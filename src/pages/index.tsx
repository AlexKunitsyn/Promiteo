import React, {useEffect, useState} from "react";
import {Box, styled, Typography} from '@mui/material';
import ExampleComponent from '../components/ExampleComponent';
import ProductBlock from '../components/ProductBlock';
import ProductsList from '../components/ProductsList';
import Image from 'next/image';
import { keyframes } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import palette from '../styles/palette';
import firstScreenImg from '../images/firstScreenImg.jpg'
// import logoImg from '../images/logo.svg'
import LogoIcon from '../images/logo.svg'



const arrowFloat = keyframes`
  0% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 10px); }
  100% { transform: translate(-50%, 0); }
`;

const arrowBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const drawLogo = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const drawStroke = keyframes`
  from {
    stroke-dashoffset: 1500;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

//
// ЭФФЕКТ ПОЯВЛЕНИЯ FILL
//
const fillLogo = keyframes`
  from { fill: transparent; }
  to   { fill: #F9CC3D; }
`;

const MainContainer = styled(Box)(({ theme }) => ({
    backgroundColor: palette.blackMain
}));

const FirstScreen = styled(Box)(({ theme }) => ({
    position:'relative',
    height:'100vh',
    display:'flex',
    alignItems:'flex-end',
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
    bottom: '12vh',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '60px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    animation: `${arrowFloat} 2s infinite ease-in-out, ${arrowBlink} 2s infinite ease-in-out`,


}));

const HeroTitle  = styled('h1')(({ theme }) => ({
    fontSize:'3.5rem',
    color:'rgba(255,255,255, 0.7)',
    margin:'0 0 20px',
    padding: 0,
    fontWeight: 700,
    opacity: 0,
    animation: `${fadeUp} 1.6s ease-out forwards`,
    animationDelay: "0.3s",

}));


const Welcome = styled(Box)(({ theme }) => ({
    height:'57vh',
    width:'100%',

}));

const AnimatedLogo = styled(LogoIcon)(({ theme }) => ({
    width:'25vw',
    color: '#F9CC3D',

    // ЛОГОТИП НЕ ВИДЕН ДО СТАРТА АНИМАЦИИ
    opacity: 0,

    animation: "fadeInContainer 0s linear forwards",
    animationDelay: "2s", // <- логотип становится видимым ровно когда начинается прорисовка

    "@keyframes fadeInContainer": {
        to: { opacity: 1 },
    },



    "& path": {
        stroke: "#F9CC3D",
        strokeWidth: 3,

        fill: "transparent",          // скрываем заливку
        strokeDasharray: 1500,
        strokeDashoffset: 1500,       // скрываем stroke, но НЕ ломаем анимацию

        animation: `
      ${drawStroke} 4s ease forwards,
      ${fillLogo} 1.4s ease forwards
    `,
        animationDelay: `
      2s, 6s
    `, // stroke: 2s–6s, fill: 6s+
    },

}));

const Home = () => {
    const handleScroll = () => {
        const next = document.getElementById("next");
        next?.scrollIntoView({ behavior: "smooth" });
    };

    const [logoVisible, setLogoVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setLogoVisible(true), 1800);
    }, []);



  return (
    <Box sx={{ textAlign: 'center'}}>
        <MainContainer>
            <FirstScreen>
                <FirstScreenImage src={firstScreenImg} alt="FirstScreenImg" style={{}} />
                <Welcome style={{
                    position:'relative'
                }}>
                    <HeroTitle>
                        Welcome to My World...
                    </HeroTitle>
                    {/*<Image src={logoImg} alt="Logo"/>*/}
                    <AnimatedLogo className={logoVisible ? "active" : ""}/>
                </Welcome>
                <ScrollDown className="scroll-button" onClick={()=>handleScroll()}>
                    <KeyboardArrowDownIcon style={{color: '#D4AF37',fontSize: '3rem'}} />
                </ScrollDown>
            </FirstScreen>
            <ProductBlock/>
            <ProductsList/>
        </MainContainer>
    </Box>
  );
}

export default Home;