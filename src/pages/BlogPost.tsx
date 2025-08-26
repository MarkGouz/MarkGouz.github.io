import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Import your MDX files
import PersonalSitePost from '../blog/personal-site.mdx';

const blogPosts = {
  'personal-site': {
    component: PersonalSitePost,
    title: 'How I Built This Site',
    date: '2024-01-15',
    readTime: '3 min read'
  }
};

function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  
  if (!postId || !blogPosts[postId as keyof typeof blogPosts]) {
    return (
      <Box sx={{ maxWidth: 900, mx: 'auto', px: 3, py: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Post Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          The blog post you're looking for doesn't exist.
        </Typography>
        <Button 
          component={Link}
          to="/blog" 
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Back to Blog
        </Button>
      </Box>
    );
  }

  const post = blogPosts[postId as keyof typeof blogPosts];
  const PostComponent = post.component;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50', py: 4 }}>
      {/* Back Button */}
      <Box sx={{ maxWidth: 900, mx: 'auto', px: 3, mb: 2 }}>
        <Button 
          component={Link}
          to="/blog" 
          variant="text"
          startIcon={<ArrowBackIcon />}
          sx={{ color: 'text.secondary' }}
        >
          Back to Blog
        </Button>
      </Box>

      {/* Blog Post Content */}
      <BlogPost 
        title={post.title}
        date={post.date}
        readTime={post.readTime}
      >
        <PostComponent />
      </BlogPost>
    </Box>
  );
}

export default BlogPostPage;
