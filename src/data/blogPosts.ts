import { calculateReadingTime } from '../utils/readingTime';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  rawMarkdown: string; // Store the raw markdown content
}

// Raw markdown content for reading time calculation
const personalSiteMarkdown = `# How I Built This Site

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Router
- React Icons
- React Hook Form
- React Query`;

export const blogPosts: BlogPost[] = [
  {
    id: 'personal-site',
    title: 'How I Built This Site',
    description: 'A detailed look at the tech stack and development process behind this personal website.',
    date: '2024-01-15',
    rawMarkdown: personalSiteMarkdown,
    readTime: calculateReadingTime(personalSiteMarkdown) // Auto-calculate!
  }
  // Add more blog posts here as you create them
];

// Helper function to add new blog posts
export const addBlogPost = (post: Omit<BlogPost, 'readTime'>) => {
  const newPost: BlogPost = {
    ...post,
    readTime: calculateReadingTime(post.rawMarkdown)
  };
  
  blogPosts.push(newPost);
  return newPost;
};

// Helper function to get a specific blog post
export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
