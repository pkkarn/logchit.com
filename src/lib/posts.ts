import { postsMetadata, postsContent, type PostMetadata } from './posts_markdown';

export interface BlogPost extends PostMetadata {
  content: string;
  readingTime: string;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const metadata = postsMetadata.find((post) => post.slug === slug);
  if (!metadata) return undefined;

  const content = postsContent[slug];
  if (!content) return undefined;

  return {
    ...metadata,
    content,
    readingTime: metadata.readTime,
  };
}

export function getAllPosts(): BlogPost[] {
  return postsMetadata
    .map((metadata) => ({
      ...metadata,
      content: postsContent[metadata.slug] || '',
      readingTime: metadata.readTime,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
