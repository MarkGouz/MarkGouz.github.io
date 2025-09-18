import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  projectPath: string;
}

const projects: Project[] = [
  {
    title: "Block Jump",
    description:
      "A 2D platformer game built with Raylib and C++, compiled to WebAssembly for web deployment. Features smooth gameplay, collision detection, and responsive controls.",
    technologies: ["C++", "Raylib", "WebAssembly", "HTML5", "CSS3"],
    projectPath: "/Block_Jump",
  },
  // Add more projects here
];

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="h6" color="text.secondary" mx="auto" maxWidth={600}>
          A collection of my work showcasing various technologies and creative
          solutions
        </Typography>
      </Box>

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 21.33px)' }
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
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

                  <Stack direction="row" spacing={0.5} flexWrap="wrap">
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
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
              </Box>
            ))}
          </Box>
      ) : (
        <Box textAlign="center" py={12}>
          <Typography variant="h6" color="text.secondary">
            No projects yet. Check back soon!
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default Projects;
