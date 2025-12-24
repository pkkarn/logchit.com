# Zero-Cost Serverless: Automating Deployments with GitHub Pages & Actions

In the modern web era, you don't always need a complex server to host your digital architecture. Whether you're building with **React (Vite)**, **Vue**, or **Next.js**, GitHub Pages provides a robust, free, and serverless solution for hosting static sites with a professional touch.

This guide explores how to build a fully automated CI/CD pipeline that takes your code from a `git push` to a live custom domain in seconds.

## 1. The Engine: GitHub Actions Pipelines

Gone are the days of manual builds and FTP uploads. GitHub Actions allows us to define a "workflow" that triggers every time we update our code.

### Sample Workflow (`.github/workflows/deploy.yml`)

The following YAML file instructs GitHub to spin up a Linux environment, install your dependencies, build the production-ready assets, and deploy them to Pages.

```yaml
name: Deploy to Pages
on:
  push:
    branches: ["master"] # Or main
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist' # Use './out' for Next.js static exports
      - uses: actions/deploy-pages@v4
```

## 2. Framework Configuration

Different frameworks require slight adjustments to ensure asset paths resolve correctly.

### Vite (React/Vue)
In your `vite.config.ts`, ensure your base path is set appropriately. If you are using a custom domain at the root, keep it as:
```typescript
export default defineConfig({
  base: "/", 
});
```

### Next.js
If using the App Router, update your `next.config.js` to enable static exports:
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

#### Why are these settings required?
- **`output: 'export'`**: By default, Next.js requires a Node.js server to handle features like Image Optimization and SSR (Server-Side Rendering). Since GitHub Pages is a **static file host**, it cannot run Node.js code. This setting forces Next.js to build your entire site into a folder of static HTML, CSS, and JS files that can be served directly from memory or disk.
- **`images: { unoptimized: true }`**: Next.js has a powerful built-in Image Transformation service. However, this service runs as a small server-side function. On a serverless host like GitHub Pages, this function doesn't exist. Setting this to `true` tells Next.js to serve your original images as-is, rather than trying to transform them on the fly.

## 3. Professionalism with Custom Domains

Serving your site from `username.github.io/repo` is fine for testing, but a custom domain like `logchit.com` signals authority.

### The CNAME File
GitHub needs to know which domain should map to your repository. Create a file named `CNAME` in your `public` folder containing only your domain name:
```text
logchit.com
```

### DNS Records (The Handshake)
In your DNS provider (Cloudflare, GoDaddy, etc.), point your domain to GitHub using these **A Records**:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Add a **CNAME** record for `www` pointing to `yourusername.github.io`.

## 4. Enforcing HTTPS

Security is no longer optional. Under your repository **Settings > Pages**, check the **"Enforce HTTPS"** box. 

*Pro-tip: If you use Cloudflare, ensure your DNS records are set to "DNS Only" (Grey Cloud) during the initial SSL verification process to avoid conflicts.*

## Conclusion

By leveraging GitHub Pages and Actions, you've created a resilient, scalable, and zero-cost hosting environment. Your focus is now where it belongs: on the code and the ideas, not the infrastructure.
