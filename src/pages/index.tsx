import {Box, styled, Typography} from '@mui/material';
import ExampleComponent from '../components/ExampleComponent';
import React from "react";

const MainContainer = styled(Box)(({ theme }) => ({

}));

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
        <MainContainer>
            {/*</div>*/}fbdbdfgbf
        </MainContainer>
      <Typography variant="h4" gutterBottom>
        Welcome to My Next.js App
      </Typography>
      <ExampleComponent />
    </Box>
  );
}

export default Home;