import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import Box from '@mui/material/Box';

function Contact() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid', borderColor: 'divider', p: 2, borderRadius: 2, mt: 8 }}>
      <Box component="form"
        action="/api/contact"
        method="POST"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
      <TextField label="Name" name="name" required />
      <TextField label="Email" name="email" type="email" required />
      <TextField label="Message" name="message" multiline rows={4} required />
      <Button type="submit">Send</Button>
    </Box>
    </Box>
  );
}
export default Contact;