import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Box,
  Divider 
} from '@mui/material';

interface BlogPostProps {
  children: React.ReactNode;
  title?: string;
  date?: string;
  readTime?: string;
}

const components = {
  h1: (props: any) => (
    <Typography 
      variant="h3" 
      component="h1" 
      gutterBottom 
      sx={{ 
        fontWeight: 'bold', 
        color: 'text.primary',
        mt: 4,
        mb: 2
      }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Typography 
      variant="h4" 
      component="h2" 
      gutterBottom 
      sx={{ 
        fontWeight: 'semibold', 
        color: 'text.primary',
        mt: 3,
        mb: 2
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography 
      variant="h5" 
      component="h3" 
      gutterBottom 
      sx={{ 
        fontWeight: 'medium', 
        color: 'text.primary',
        mt: 2.5,
        mb: 1.5
      }}
      {...props}
    />
  ),
  p: (props: any) => (
    <Typography 
      variant="body1" 
      component="p" 
      paragraph 
      sx={{ 
        lineHeight: 1.7,
        color: 'text.secondary'
      }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <Box component="ul" sx={{ mb: 2, pl: 3 }}>
      {props.children}
    </Box>
  ),
  li: (props: any) => (
    <Typography 
      component="li" 
      variant="body1" 
      sx={{ 
        mb: 1,
        color: 'text.secondary'
      }}
      {...props}
    />
  ),
  hr: (props: any) => (
    <Divider sx={{ my: 3 }} {...props} />
  ),
  code: (props: any) => (
    <Box 
      component="code" 
      sx={{ 
        backgroundColor: 'grey.100',
        px: 1,
        py: 0.5,
        borderRadius: 1,
        fontSize: '0.875rem',
        fontFamily: 'monospace',
        color: 'text.primary'
      }}
      {...props}
    />
  ),
  pre: (props: any) => (
    <Box 
      component="pre" 
      sx={{ 
        backgroundColor: 'grey.100',
        p: 2,
        borderRadius: 2,
        overflow: 'auto',
        mb: 2,
        border: '1px solid',
        borderColor: 'grey.300'
      }}
      {...props}
    />
  ),
};

const BlogPost: React.FC<BlogPostProps> = ({ children, title, date, readTime }) => {
  return (
    <Card 
      elevation={2} 
      sx={{ 
        maxWidth: 900, 
        mx: 'auto', 
        my: 4,
        borderRadius: 3
      }}
    >
      {(title || date || readTime) && (
        <CardHeader
          title={title && (
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
          )}
          subheader={(date || readTime) && (
            <Typography variant="body2" color="text.secondary">
              {date && new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              {date && readTime && ' • '}
              {readTime}
            </Typography>
          )}
          sx={{
            pb: 1,
            '& .MuiCardHeader-content': {
              minWidth: 0
            }
          }}
        />
      )}
      
      <CardContent sx={{ pt: 0, px: 4, pb: 4 }}>
        <MDXProvider components={components}>
          <Box sx={{ typography: 'body1' }}>
            {children}
          </Box>
        </MDXProvider>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
