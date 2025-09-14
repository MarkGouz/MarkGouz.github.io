import React from 'react';
import { Box } from '@mui/material';

const Resume: React.FC = () => {
  return (
    <Box sx={{
      position: 'fixed',
      top: '140px', // Position below navbar + breadcrumbs
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: 'calc(100vh - 140px)',
      display: 'flex',
      justifyContent: 'flex-start', // Left align
      alignItems: 'flex-start',
      padding: 0,
      margin: 0,
      overflow: 'hidden',
      zIndex: 1
    }}>
      <iframe
        src="/Mark_Gouzoulis_Resume_v8.pdf"
        title="Resume"
        width="100%"
        height="100%"
        style={{ 
          border: 'none',
          display: 'block',
          minHeight: '100%'
        }}
      />
    </Box>
  );
}
export default Resume;
