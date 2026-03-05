import React, {useEffect, useState} from "react";
import {Box, styled, Typography, Button, keyframes} from '@mui/material';
import LogoIcon from "@images/logo.svg";

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

const AnimatedLogoStyle = styled(LogoIcon)(({ theme }) => ({
    width:'90vw',
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

    [theme.breakpoints.up('md')]: {
        width:'25vw',
    },

}));








const AnimatedLogo = () => {
    const [logoVisible, setLogoVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setLogoVisible(true), 1800);
    }, []);

    return (
        <AnimatedLogoStyle className={logoVisible ? "active" : ""}/>
    );
}

export default AnimatedLogo;