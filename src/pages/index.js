import { Box, Typography } from '@mui/material';
import ExampleComponent from '../components/ExampleComponent';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Next.js App
      </Typography>
      <ExampleComponent />
    </Box>
  );
}