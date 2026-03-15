import React, {useEffect, useState} from "react";
import {Box, styled, Typography, Button} from '@mui/material';
import Image from 'next/image';
import { keyframes } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import palette from '../styles/palette';
import firstScreenImg from '../images/firstScreenImg.jpg'
// import logoImg from '../images/logo.svg'
import LogoIcon from '../images/logo2.svg'

import AnimatedLogo from './AnimatedLogo';


const MainContainer = styled(Box)(({ theme }) => ({
    position:'fixed',
    top:0,
    left:0,
    height: '100vh',
    width:'100vw',
    backgroundColor: palette.blackMain,
    zIndex: 1300


}));


const GlowLogo = styled('div')({
    display: 'inline-flex',
    width:'150px',

    animation: 'softGlow 4.5s ease-in-out infinite',

    '@keyframes softGlow': {
        '0%': {
            filter: 'drop-shadow(0 0 4px rgba(201,166,107,0.25))',
        },
        '50%': {
            filter: 'drop-shadow(0 0 12px rgba(201,166,107,0.55))',
        },
        '100%': {
            filter: 'drop-shadow(0 0 4px rgba(201,166,107,0.25))',
        },
    },

    '@media (prefers-reduced-motion: reduce)': {
        animation: 'none',
    },
});



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

const IntroContainer = styled('div')({
    position: 'fixed',
    top:0,
    left:0,
    inset: 0,
    zIndex: 1300, // выше всего
    width:'100vw',
    height:'100vh',

    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',

    background: 'radial-gradient(ellipse at center, #241d40 0%, #0b0916 100%)',
    backdropFilter: 'blur(6px)',
});

const HeroTitle  = styled('h1')(({ theme }) => ({
    position:'relative',
    // left:'-45px',
    fontSize:'34px',
    color:'rgba(255,255,255, 0.7)',
    margin:'0 0 20px',
    padding: 0,
    fontWeight: 700,
    opacity: 0,
    animation: `${fadeUp} 1.6s ease-out forwards`,
    animationDelay: "5s",

    [theme.breakpoints.up('md')]: {
        fontSize:'3.5rem',
    },

}));

const PHASES = {
    PLAYING: "playing",
    HOLDING: "holding",
    FADING: "fading",
    DONE: "done",
};

const ANIMATION_DURATION = 6000;
const HOLD_DURATION = 2000;
const FADE_DURATION = 600;

const INTRO_KEY = "intro_seen";


const Intro = () => {
    const [allowed, setAllowed] = useState<boolean | null>(null);
    const [showIntro, setShowIntro] = useState(false);
    const [ready, setReady] = useState(false);
    const [phase, setPhase] = useState(PHASES.PLAYING);


    useEffect(() => {
        // const seen = sessionStorage.getItem(INTRO_KEY);
        const seen = false;
        let timer;

        if (!seen) {

            if (phase === PHASES.PLAYING) {
                timer = setTimeout(() => {
                    setPhase(PHASES.HOLDING);
                }, ANIMATION_DURATION);
            }

            if (phase === PHASES.HOLDING) {
                timer = setTimeout(() => {
                    setPhase(PHASES.FADING);
                }, HOLD_DURATION);
            }

            if (phase === PHASES.FADING) {
                timer = setTimeout(() => {
                    setPhase(PHASES.DONE);
                    sessionStorage.setItem(INTRO_KEY, "true");
                }, FADE_DURATION);
            }

            return () => clearTimeout(timer);
        }
    }, [phase]);


    useEffect(() => {
        const shouldLockScroll = phase !== PHASES.DONE;

        if (shouldLockScroll) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [phase]);

    const isVisible = phase !== PHASES.DONE;
    const isFading = phase === PHASES.FADING;





    // useEffect(() => {
    //     const seen = sessionStorage.getItem(INTRO_KEY);
    //
    //     if (!seen) {
    //         setShowIntro(true);
    //
    //         const timer = setTimeout(() => {
    //             sessionStorage.setItem(INTRO_KEY, "true");
    //             setShowIntro(false);
    //         }, 8000);
    //
    //         return () => clearTimeout(timer);
    //     }
    //
    //     setReady(true);
    // }, []);

    useEffect(() => {
        if (!showIntro) {
            setReady(true);
        }
    }, [showIntro]);

    const overlayStyle = {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        transition: `opacity ${FADE_DURATION}ms ease`,
    };

    return (
        <>
            {isVisible && (
                <IntroContainer
                    style={{
                        // ...overlayStyle,
                        opacity: isFading ? 0 : 1,
                        pointerEvents: isFading ? "none" : "auto",
                    }}
                >
                    <AnimatedLogo/>
                    <HeroTitle>
                        Ignite the Night
                    </HeroTitle>
                </IntroContainer>
            )}
        </>
    );
}

export default Intro;