export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
}

export const postsMetadata: PostMetadata[] = [
  {
    slug: 'understanding-consensus-mechanisms-blockchain',
    title: 'Understanding Consensus Mechanisms in Blockchain',
    date: '2024-05-12',
    description: 'A deep dive into Proof of Work vs Proof of Stake consensus mechanisms, exploring their trade-offs in security, scalability, and energy efficiency.',
    tags: ['Blockchain', 'Architecture', 'Web3'],
    readTime: '8 min read',
  },
  {
    slug: 'optimizing-rag-pipelines-genai',
    title: 'Optimizing RAG Pipelines for GenAI Applications',
    date: '2024-06-20',
    description: 'Practical strategies for reducing latency and improving accuracy in Retrieval Augmented Generation systems for production LLM applications.',
    tags: ['AI', 'Python', 'LLM'],
    readTime: '6 min read',
  },
  {
    slug: 'brain',
    title: 'The Dog and the Dreamer: Diogenes vs. Plato',
    date: '2024-06-20',
    description: 'A deep dive into Proof of Work vs Proof of Stake consensus mechanisms, exploring their trade-offs in security, scalability, and energy efficiency.',
    tags: ['Blockchain', 'Architecture', 'Web3'],
    readTime: '8 min read',
  },
  {
    slug: 'gemini-ai-tutorial',
    title: 'Gemini AI Tutorial: Flash Models & Nano Banana',
    date: '2025-12-24',
    description: 'A comprehensive guide to leveraging Gemini Flash models for speed and Nano Banana for state-of-the-art image generation via API.',
    tags: ['AI', 'Gemini', 'Generative-Art'],
    readTime: '5 min read',
  },
  {
    slug: 'serverless-deployment-github-pages',
    title: 'Zero-Cost Serverless: Automating Deployments with GitHub Pages',
    date: '2025-12-24',
    description: 'A masterclass on building CI/CD pipelines with GitHub Actions and connecting custom domains for serverless applications.',
    tags: ['DevOps', 'GitHub', 'Serverless'],
    readTime: '7 min read',
  },
];

// Import markdown content
import consensusContent from './understanding-consensus-mechanisms-blockchain.md?raw';
import ragContent from './optimizing-rag-pipelines-genai.md?raw';
import brainContent from './brain.md?raw';
import geminiTutorialContent from './gemini-ai-tutorial.md?raw';
import serverlessDeploymentContent from './serverless-deployment-github-pages.md?raw';

export const postsContent: Record<string, string> = {
  'understanding-consensus-mechanisms-blockchain': consensusContent,
  'optimizing-rag-pipelines-genai': ragContent,
  'brain': brainContent,
  'gemini-ai-tutorial': geminiTutorialContent,
  'serverless-deployment-github-pages': serverlessDeploymentContent,
};
