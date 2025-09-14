import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Container, 
  Card, 
  CardContent, 
  CardActions,
  Button,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Projects() {
  const projects = [
    {
      title: "Block Jump",
      description: "A 2D platformer game built with Raylib and C++, compiled to WebAssembly for web deployment. Features smooth gameplay, collision detection, and responsive controls.",
      technologies: ["C++", "Raylib", "WebAssembly", "HTML5", "CSS3"],
      projectPath: "/Block_Jump"
    },
    // Add more projects here as you create them
    // {
    //   title: "Next Project",
    //   description: "Description of your next amazing project...",
    //   technologies: ["React", "TypeScript", "Node.js"],
    //   projectPath: "/next-project"
    // }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          My Projects
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          A collection of my work showcasing various technologies and creative solutions
        </Typography>
      </Box>
      
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              elevation={2}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  elevation: 4,
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {project.title}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph
                  sx={{ lineHeight: 1.6, mb: 2 }}
                >
                  {project.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Chip 
                      key={techIndex}
                      label={tech} 
                      size="small" 
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Box>
              </CardContent>
              
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  component={Link}
                  to={project.projectPath}
                  variant="contained"
                  startIcon={<PlayArrowIcon />}
                  size="small"
                >
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {projects.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 12 }}>
          <Typography variant="h6" color="text.secondary">
            No projects yet. Check back soon!
          </Typography>
        </Box>
      )}
    </Container>
  );
}
export default Projects;
