# Blog System Documentation

## Overview

This website includes a blog system built with React, MDX, and Vite. The blog allows you to write posts in Markdown with JSX support.

## How to Add a New Blog Post

### 1. Create the MDX File

Create a new `.mdx` file in the `src/blog/` directory. Use the template in `blog-post-template.mdx` as a starting point.

Example: `src/blog/my-new-post.mdx`

```mdx
# My New Blog Post

## Introduction

This is my new blog post about...

## Content

Write your content here using Markdown syntax.

- Point 1
- Point 2

## Conclusion

Thanks for reading!
```

### 2. Update the Blog Posts Array

In `src/pages/BlogPost.tsx`, add your new post to the `blogPosts` object:

```typescript
const blogPosts = {
  'personal-site': {
    component: PersonalSitePost,
    title: 'How I Built This Site',
    date: '2024-01-15',
    readTime: '3 min read'
  },
  'my-new-post': {  // Add this
    component: MyNewPost,  // Import this component
    title: 'My New Blog Post',
    date: '2024-01-20',
    readTime: '5 min read'
  }
};
```

### 3. Import the MDX Component

At the top of `src/pages/BlogPost.tsx`, import your new MDX file:

```typescript
import MyNewPost from '../blog/my-new-post.mdx';
```

### 4. Update the Blog List

In `src/pages/Blog.tsx`, add your new post to the `blogPosts` array:

```typescript
const blogPosts: BlogPost[] = [
  {
    id: 'personal-site',
    title: 'How I Built This Site',
    description: 'A detailed look at the tech stack...',
    date: '2024-01-15',
    readTime: '3 min read'
  },
  {
    id: 'my-new-post',  // Add this
    title: 'My New Blog Post',
    description: 'Description of your new post...',
    date: '2024-01-20',
    readTime: '5 min read'
  }
];
```

## MDX Features

Your blog posts support:

- **Markdown syntax**: Headers, lists, links, images, etc.
- **JSX components**: You can use React components in your posts
- **Code highlighting**: Code blocks with syntax highlighting
- **Custom styling**: Consistent typography and spacing

## File Structure

```
src/
├── blog/                    # Blog post MDX files
│   ├── personal-site.mdx   # Your first blog post
│   ├── blog-post-template.mdx  # Template for new posts
│   └── [your-post].mdx     # Your new posts
├── components/
│   └── BlogPost.tsx        # MDX rendering component
└── pages/
    ├── Blog.tsx            # Blog listing page
    └── BlogPost.tsx        # Individual blog post page
```

## Styling

The blog uses Tailwind CSS classes for consistent styling. The `BlogPost` component provides:

- Responsive typography
- Proper spacing and margins
- Code block styling
- Hover effects
- Mobile-friendly layout

## Tips for Writing

1. **Use descriptive titles** that clearly indicate the content
2. **Include a brief description** in the blog posts array
3. **Estimate read time** accurately (about 200 words per minute)
4. **Use headers** to organize your content
5. **Include code examples** when relevant
6. **Add images** to make posts more engaging

## Troubleshooting

- **MDX not rendering**: Make sure the file is imported and added to the `blogPosts` object
- **Styling issues**: Check that Tailwind CSS is properly configured
- **Routing problems**: Verify the route is added to `App.tsx`

## Next Steps

Consider adding these features in the future:

- [ ] Blog post categories/tags
- [ ] Search functionality
- [ ] Related posts
- [ ] Social sharing buttons
- [ ] Comments system
- [ ] RSS feed
- [ ] SEO optimization
