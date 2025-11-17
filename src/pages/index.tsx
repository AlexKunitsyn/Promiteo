import React from "react";
import {Box, styled, Typography} from '@mui/material';
import ExampleComponent from '../components/ExampleComponent';
import Image from 'next/image';
import { keyframes } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import palette from '@styles/palette';
import firstScreenImg from '../images/firstScreenImg.jpg'



const arrowFloat = keyframes`
  0% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 10px); }
  100% { transform: translate(-50%, 0); }
`;

const arrowBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const MainContainer = styled(Box)(({ theme }) => ({
    backgroundColor: palette.blackMain
}));

const FirstScreen = styled(Box)(({ theme }) => ({
    position:'relative',
    height:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}));

const FirstScreenImage = styled(Image)(({ theme }) => ({
    position:'absolute',
    top: 0,
    left:0,
    width:'100%',
    height:'100%',
    filter: 'brightness(30%)',
    zIndex:'0'
}));

const ScrollDown = styled('button')(({ theme }) => ({
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '40px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    animation: `${arrowFloat} 2s infinite ease-in-out, ${arrowBlink} 2s infinite ease-in-out`,


}));

const ProductBlock = styled(Box)(({ theme }) => ({
    minHeight:'100vh'

}));

const Home = () => {
    const handleScroll = () => {
        const next = document.getElementById("next");
        next?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <Box sx={{ textAlign: 'center'}}>
        <MainContainer>
            <FirstScreen>
                <FirstScreenImage src={firstScreenImg} alt="FirstScreenImg" style={{}} />
                <Box style={{
                    position:'relative'
                }}>
                    <Typography variant="h2"
                        style={{
                            // position:'relative',
                            fontSize:'3.5rem',
                            color:'rgba(255,255,255, 0.7)',
                        }}
                    >
                        Welcome to My World...
                    </Typography>
                </Box>
                <ScrollDown className="scroll-button" onClick={()=>handleScroll()}>
                    <KeyboardArrowDownIcon style={{color: '#D4AF37',fontSize: '3rem'}} />
                </ScrollDown>
            </FirstScreen>
            <ProductBlock className="second-screen" id="next">

            </ProductBlock>

            <ExampleComponent />
        </MainContainer>
    </Box>
  );
}

export default Home;