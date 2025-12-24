# Deploying React to AWS EC2 with GitHub Actions: A Complete CI/CD Guide

Automating your deployment saves time and prevents human error. By the end of this guide, every time you push code to your `main` branch, GitHub will automatically build your React app and ship the files to your server.

## 📋 The Architecture

A production-grade React deployment involves three key stages:

1.  **GitHub Actions**: Builds the React app into static HTML/CSS/JS files.
2.  **SCP/Rsync**: Securely transfers those files to your AWS server.
3.  **Nginx**: Serves the files to the public and handles routing.

---

## Step 1: Prepare the AWS Ubuntu Server

First, we need to set up the web server (Nginx) to host the files.

### 1. SSH into your server
```bash
ssh -i your-key.pem ubuntu@your-server-ip
```

### 2. Update and Install Nginx
```bash
sudo apt update
sudo apt install nginx -y
```

### 3. Create a Directory for Your App
Standard practice is to put web apps in `/var/www/`. We will create a folder and give your user (`ubuntu`) permission to write to it so GitHub can copy files there later without permission errors.
```bash
sudo mkdir -p /var/www/my-react-app
# Grant ownership to the 'ubuntu' user
sudo chown -R ubuntu:ubuntu /var/www/my-react-app
# Set permissions
sudo chmod -R 755 /var/www/my-react-app
```

### 4. Configure Nginx
Create a new configuration file for your site.
```bash
sudo nano /etc/nginx/sites-available/my-react-app
```

Paste the following configuration (replace `your_domain_or_IP` with your actual IP or domain):
```nginx
server {
    listen 80;
    server_name your_domain_or_IP;

    root /var/www/my-react-app;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

*Note: The `try_files ... /index.html;` line is critical for React Router (Single Page Apps) to handle direct links correctly.*

### 5. Enable the Site and Restart Nginx
```bash
sudo ln -s /etc/nginx/sites-available/my-react-app /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Remove default test page
sudo nginx -t                             # Test config for errors
sudo systemctl restart nginx
```

---

## Step 2: Generate SSH Keys for GitHub

GitHub needs a way to "log in" to your server to copy files. We will create a specific SSH key pair for this.

### 1. Generate a new key on your local machine
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy" -f ./github_deploy_key
```
* Press Enter for no passphrase.
* This creates `github_deploy_key` (private) and `github_deploy_key.pub` (public).

### 2. Add the Public Key to AWS Server
Copy the contents of the **public** key (`.pub`). SSH back into your AWS server and add it to the `authorized_keys` file:
```bash
echo "PASTE_YOUR_PUBLIC_KEY_CONTENT_HERE" >> ~/.ssh/authorized_keys
```

---

## Step 3: Configure GitHub Secrets

We must store the Private Key securely in GitHub so the Action can use it.

1.  Go to your Repository on GitHub.
2.  Navigate to **Settings** > **Secrets and variables** > **Actions**.
3.  Click **New repository secret**.
4.  Add the following secrets:

| Secret Name | Value |
| :--- | :--- |
| `EC2_HOST` | Your AWS Server IP address (e.g., `54.123.45.67`). |
| `EC2_USER` | The username (usually `ubuntu`). |
| `EC2_SSH_KEY` | Paste the **entire** content of your **Private Key** (`github_deploy_key`). |

---

## Step 4: Create the Deployment Pipeline

Now, we create the workflow file.

1.  In your project root, create this folder structure: `.github/workflows/`
2.  Create a file named `deploy.yml`.
3.  Paste the following YAML configuration:

```yaml
name: Deploy to AWS

on:
  push:
    branches:
      - main  # Set this to your default branch (master or main)

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      # 1. Checkout the code
      - name: Checkout Code
        uses: actions/checkout@v4

      # 2. Setup Node.js environment
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20' # Use a version compatible with your app
          cache: 'npm'

      # 3. Install Dependencies
      - name: Install Dependencies
        run: npm ci

      # 4. Build the React App
      - name: Build
        run: npm run build
        env:
          CI: false # Prevents build from failing on minor warnings

      # 5. Deploy to Server (using scp-action)
      - name: Deploy to Server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          port: 22
          # IMPORTANT: Check your build folder name.
          # Create React App uses 'build', Vite uses 'dist'.
          source: "dist/*" 
          target: "/var/www/my-react-app"
          strip_components: 1 # Removes the parent 'dist' folder when copying
```

**⚠️ Important Note on Folder Names:**
* If you use **Vite**, your build folder is usually `dist`.
* If you use **Create React App (CRA)**, your build folder is `build`.
* *Adjust the `source` line in the YAML above accordingly.*

---

## Step 5: Test the Pipeline

1.  Commit and push the `deploy.yml` file to GitHub.
2.  Go to the **Actions** tab in your GitHub repository.
3.  Once the workflow completes with a green checkmark ✅, visit your EC2 IP address.

### Troubleshooting Common Issues

*   **"Permission Denied" during copy**: Ensure you ran the `chown -R ubuntu:ubuntu /var/www/my-react-app` command. The user defined in `EC2_USER` must own the target folder.
*   **404 on Refresh**: If you get a 404 when refreshing sub-pages, check your Nginx config `try_files` line (Step 1.4).
*   **White Screen**: Check the browser console. If assets cannot be found, ensure your `base` path is set correctly in `package.json` or `vite.config.js`.
