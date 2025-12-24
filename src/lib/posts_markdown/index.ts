export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
  thumbnail: string;
}

export const postsMetadata: PostMetadata[] = [
  {
    slug: 'understanding-consensus-mechanisms-blockchain',
    title: 'Understanding Consensus Mechanisms in Blockchain',
    date: '2024-05-12',
    description: 'A deep dive into Proof of Work vs Proof of Stake consensus mechanisms, exploring their trade-offs in security, scalability, and energy efficiency.',
    tags: ['Blockchain', 'Architecture', 'Web3'],
    readTime: '8 min read',
    thumbnail: '/thumbnails/blockchain.png',
  },
  {
    slug: 'optimizing-rag-pipelines-genai',
    title: 'Optimizing RAG Pipelines for GenAI Applications',
    date: '2024-06-20',
    description: 'Practical strategies for reducing latency and improving accuracy in Retrieval Augmented Generation systems for production LLM applications.',
    tags: ['AI', 'Python', 'LLM'],
    readTime: '6 min read',
    thumbnail: '/thumbnails/rag.png',
  },
  {
    slug: 'brain',
    title: 'The Dog and the Dreamer: Diogenes vs. Plato',
    date: '2024-06-20',
    description: 'A deep dive into Proof of Work vs Proof of Stake consensus mechanisms, exploring their trade-offs in security, scalability, and energy efficiency.',
    tags: ['Blockchain', 'Architecture', 'Web3'],
    readTime: '8 min read',
    thumbnail: '/thumbnails/brain.png',
  },
  {
    slug: 'gemini-ai-tutorial',
    title: 'Gemini AI Tutorial: Flash Models & Nano Banana',
    date: '2025-12-24',
    description: 'A comprehensive guide to leveraging Gemini Flash models for speed and Nano Banana for state-of-the-art image generation via API.',
    tags: ['AI', 'Gemini', 'Generative-Art'],
    readTime: '5 min read',
    thumbnail: '/thumbnails/gemini.png',
  },
  {
    slug: 'serverless-deployment-github-pages',
    title: 'Zero-Cost Serverless: Automating Deployments with GitHub Pages',
    date: '2025-12-24',
    description: 'A masterclass on building CI/CD pipelines with GitHub Actions and connecting custom domains for serverless applications.',
    tags: ['DevOps', 'GitHub', 'Serverless'],
    readTime: '7 min read',
    thumbnail: '/thumbnails/blockchain.png',
  },
  {
    slug: 'deploy-react-aws-ec2-github-actions',
    title: 'Deploying React to AWS EC2 with GitHub Actions: A Complete CI/CD Guide',
    date: '2025-12-24',
    description: 'Learn how to automate your React deployments to AWS EC2 using GitHub Actions and Nginx for a robust and scalable CI/CD pipeline.',
    tags: ['AWS', 'GitHub Actions', 'React', 'DevOps'],
    readTime: '7 min read',
    thumbnail: '/thumbnails/aws-ec2.png',
  },
  {
    slug: 'four-phases-of-interest-development',
    title: 'The Four Phases of Interest Development: A Framework for Mastery',
    date: '2025-12-24',
    description: 'Understanding how fleeting moments of curiosity evolve into lifelong passions through the Hidi and Renninger model.',
    tags: ['Psychology', 'Learning', 'Productivity'],
    readTime: '6 min read',
    thumbnail: '/thumbnails/interest-development.png',
  },
];

// Import markdown content
import consensusContent from './understanding-consensus-mechanisms-blockchain.md?raw';
import ragContent from './optimizing-rag-pipelines-genai.md?raw';
import brainContent from './brain.md?raw';
import geminiTutorialContent from './gemini-ai-tutorial.md?raw';
import serverlessDeploymentContent from './serverless-deployment-github-pages.md?raw';
import awsEc2DeploymentContent from './deploy-react-aws-ec2-github-actions.md?raw';
import interestDevelopmentContent from './four-phases-of-interest-development.md?raw';

export const postsContent: Record<string, string> = {
  'understanding-consensus-mechanisms-blockchain': consensusContent,
  'optimizing-rag-pipelines-genai': ragContent,
  'brain': brainContent,
  'gemini-ai-tutorial': geminiTutorialContent,
  'serverless-deployment-github-pages': serverlessDeploymentContent,
  'deploy-react-aws-ec2-github-actions': awsEc2DeploymentContent,
  'four-phases-of-interest-development': interestDevelopmentContent,
};
