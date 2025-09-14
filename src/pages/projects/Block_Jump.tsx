import { Box, Typography, Container, Paper } from '@mui/material';
import RaylibGame from '../../components/Games/Raylib_game';

function Block_Jump() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Block Jump
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
          A 2D platformer game built with Raylib and C++, compiled to WebAssembly for web deployment
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Experience smooth gameplay with collision detection and responsive controls. 
          Use arrow keys or WASD to move and spacebar to jump. Try to reach the end of each level!
        </Typography>
      </Box>
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 2, 
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70vh'
        }}
      >
        <RaylibGame />
      </Paper>
    </Container>
  );
}
export default Block_Jump;