import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardActions,
  Chip,
  Button
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { blogPosts } from '../data/blogPosts';

function Blog() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', px: 3, py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Blog
        </Typography>
        
        <Box sx={{ mt: 6, space: 3 }}>
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              elevation={1}
              sx={{ 
                mb: 3,
                '&:hover': {
                  elevation: 3,
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            >
              <CardContent sx={{ pb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ 
                      fontWeight: 'semibold',
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    <Link 
                      to={`/blog/${post.id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {post.title}
                    </Link>
                  </Typography>
                  
                  <Chip 
                    icon={<AccessTimeIcon />}
                    label={post.readTime}
                    size="small"
                    variant="outlined"
                    color="primary"
                  />
                </Box>
                
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  paragraph
                  sx={{ lineHeight: 1.6 }}
                >
                  {post.description}
                </Typography>
              </CardContent>
              
              <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </Typography>
                  </Box>
                  
                  <Button 
                    component={Link}
                    to={`/blog/${post.id}`}
                    variant="contained"
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    Read more
                  </Button>
                </Box>
              </CardActions>
            </Card>
          ))}
        </Box>
        
        {blogPosts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 12 }}>
            <Typography variant="h6" color="text.secondary">
              No blog posts yet. Check back soon!
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Blog;