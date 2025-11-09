import React from "react";
import {Box, styled, Typography} from '@mui/material';
import ExampleComponent from '../components/ExampleComponent';

import palette from '@styles/palette';

const MainContainer = styled(Box)(({ theme }) => ({
    backgroundColor: palette.blackMain
}));

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
        <MainContainer>
            <Typography variant="h4" gutterBottom>
                Welcome to My Next.js App
            </Typography>
            <ExampleComponent />
        </MainContainer>
    </Box>
  );
}

export default Home;