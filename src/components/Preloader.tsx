import React, {useEffect, useState} from "react";
import {Box, styled, Typography, Button} from '@mui/material';
import Image from 'next/image';
import { keyframes } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import palette from '../styles/palette';
import firstScreenImg from '../images/firstScreenImg.jpg'
// import logoImg from '../images/logo.svg'
import LogoIcon from '../images/logo2.svg'

const MainContainer = styled(Box)(({ theme }) => ({
    position:'fixed',
    top:0,
    left:0,
    height: '100vh',
    width:'100vw',
    backgroundColor: palette.blackMain,
    zIndex: 1300


}));

const AnimatedLogo = styled(LogoIcon)(({ theme }) => ({
    width:'25vw',
    color: '#F9CC3D',
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



const AgeOverlay = styled('div')({
    position: 'fixed',
    inset: 0,
    zIndex: 1300, // выше всего

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: 'radial-gradient(ellipse at center, #241d40 0%, #0b0916 100%)',
    backdropFilter: 'blur(6px)',
});

const AgeCard = styled('div')({
    maxWidth: 420,
    width: '90%',
    padding: '40px 32px',
    borderRadius: 20,

    textAlign: 'center',
    color: '#fff',

    background: 'rgba(10, 15, 26, 0.85)',
    border: '1px solid rgba(201,166,107,0.3)',
    boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
});

const Preloader = () => {
    const [allowed, setAllowed] = useState<boolean | null>(null);

    const useScrollLock = (locked: boolean) => {
        useEffect(() => {
            if (!locked) return;

            const scrollY = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';

            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
            };
        }, [locked]);
    };

    useScrollLock(allowed !== true);

    useEffect(() => {
        const confirmed = localStorage.getItem('ageConfirmed');
        setAllowed(confirmed === 'true');
    }, []);

    const confirmAge = () => {
        localStorage.setItem('ageConfirmed', 'true');
        setAllowed(true);
    };

    if (allowed) return null;

    return (
        <AgeOverlay>
            <AgeCard>
                <GlowLogo>
                    <AnimatedLogo/>
                </GlowLogo>
                <Typography variant="h5" gutterBottom>
                    Age Verification
                </Typography>

                <Typography sx={{ opacity: 0.75, mb: 3 }}>
                    You must be 18 years or older to enter this site.
                </Typography>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={confirmAge}
                    sx={{
                        background: '#C9A66B',
                        color: '#000',
                        fontWeight: 600,
                        borderRadius: 999,
                        py: 1.4,
                        '&:hover': {
                            background: '#d9b77d',
                        },
                    }}
                >
                    I am 18+
                </Button>
            </AgeCard>
        </AgeOverlay>
    );



    return (
        <Box sx={{ textAlign: 'center'}}>
            <MainContainer>
                <GlowLogo>
                    <AnimatedLogo/>
                </GlowLogo>
                {/*<FirstScreen>*/}
                {/*    <FirstScreenImage src={firstScreenImg} alt="FirstScreenImg" style={{}} />*/}
                {/*    <Welcome style={{*/}
                {/*        position:'relative'*/}
                {/*    }}>*/}
                {/*        <HeroTitle>*/}
                {/*            Welcome to My World...*/}
                {/*        </HeroTitle>*/}
                {/*        /!*<Image src={logoImg} alt="Logo"/>*!/*/}
                {/*        <AnimatedLogo className={logoVisible ? "active" : ""}/>*/}
                {/*    </Welcome>*/}
                {/*    <ScrollDown className="scroll-button" onClick={()=>handleScroll()}>*/}
                {/*        <KeyboardArrowDownIcon style={{color: '#D4AF37',fontSize: '3rem'}} />*/}
                {/*    </ScrollDown>*/}
                {/*</FirstScreen>*/}
            </MainContainer>
        </Box>
    );
}

export default Preloader;