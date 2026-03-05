import {Box, styled, Typography, Grid, keyframes} from '@mui/material';
import React, {useEffect, useState} from "react";
import Image from 'next/image';


import firstScreenImg from "@images/firstScreenImg.webp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LogoIcon from '../images/logo.svg'

import AnimatedLogo from './AnimatedLogo';


const arrowFloat = keyframes`
  0% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 10px); }
  100% { transform: translate(-50%, 0); }
`;

const arrowBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

// const fadeUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;


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
    filter: 'brightness(40%)',
    zIndex:'0',
    objectFit:'cover'
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

// const HeroTitle  = styled('h1')(({ theme }) => ({
//     fontSize:'34px',
//     color:'rgba(255,255,255, 0.7)',
//     margin:'0 0 20px',
//     padding: 0,
//     fontWeight: 700,
//     opacity: 0,
//     animation: `${fadeUp} 1.6s ease-out forwards`,
//     animationDelay: "1.3s",
//
//     [theme.breakpoints.up('md')]: {
//         fontSize:'3.5rem',
//     },
//
// }));


const Welcome = styled(Box)(({ theme }) => ({
    position:'relative',
    height:'100vh',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'

}));


const FirstScreenBlock = () => {
    const handleScroll = () => {
        const next = document.getElementById("next");
        next?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <FirstScreen>
            <FirstScreenImage src={firstScreenImg} alt="FirstScreenImg" style={{}} />
            <Welcome style={{

            }}>
                {/*<Image src={logoImg} alt="Logo"/>*/}
                <AnimatedLogo/>
                {/*<HeroTitle>*/}
                {/*    /!*{t("WelcomeToMyWorld")}...*!/*/}
                {/*    Ignite the Night*/}
                {/*</HeroTitle>*/}
            </Welcome>
            <ScrollDown className="scroll-button" onClick={()=>handleScroll()}>
                <KeyboardArrowDownIcon style={{color: '#D4AF37',fontSize: '3rem'}} />
            </ScrollDown>
        </FirstScreen>
    );
}

export default FirstScreenBlock;