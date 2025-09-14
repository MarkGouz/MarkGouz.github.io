import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Breadcrumbs as MuiBreadcrumbs, 
  Link as MuiLink, 
  Typography,
  Box 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrentPage?: boolean;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  
  // Define route mappings
  const routeLabels: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/projects': 'Projects',
    '/resume': 'Resume',
    '/blog': 'Blog',
    '/Block_Jump': 'Block Jump'
  };

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Always start with home
    breadcrumbs.push({
      label: 'Home',
      path: '/',
      isCurrentPage: location.pathname === '/'
    });

    // Build path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Handle special cases
      let label = routeLabels[currentPath] || segment;
      
      // Handle blog post routes - show actual post title
      if (currentPath.startsWith('/blog/') && segment !== 'blog') {
        // Try to get the actual post title from the URL or use a generic label
        if (segment === 'personal-site') {
          label = 'How I Built This Site';
        } else {
          label = 'Blog Post';
        }
      }
      
      // Handle project routes
      if (currentPath.startsWith('/projects/')) {
        label = segment.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      }

      breadcrumbs.push({
        label,
        path: currentPath,
        isCurrentPage: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  return (
    <Box sx={{ 
      py: 2, 
      px: 3, 
      bgcolor: 'background.paper',
      borderBottom: 1,
      borderColor: 'divider',
      width: '100%',
      maxWidth: '100%'
    }}>
      <MuiBreadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: 'text.secondary'
          },
          '& .MuiBreadcrumbs-ol': {
            flexWrap: 'wrap'
          }
        }}
      >
        {breadcrumbItems.map((item, index) => {
          if (item.isCurrentPage) {
            return (
              <Typography 
                key={item.path} 
                color="text.primary" 
                sx={{ 
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                {index === 0 && <HomeIcon fontSize="small" />}
                {item.label}
              </Typography>
            );
          }

          return (
            <MuiLink
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              underline="hover"
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              {index === 0 && <HomeIcon fontSize="small" />}
              {item.label}
            </MuiLink>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
