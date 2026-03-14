import {Box, styled, Typography, Grid} from '@mui/material';
import React from "react";
import Image from 'next/image';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BrushIcon from '@mui/icons-material/Brush';
import DiamondIcon from '@mui/icons-material/Diamond';

import palette from '../styles/palette';

import Line from "@components/Line";

import EmbossLogo from '@components/EmbosLogo';
import Container from "@mui/material/Container";


const aboutBoxList = [
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: CardGiftcardIcon
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: VerifiedIcon
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: LocalShippingIcon
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: BrushIcon
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: DiamondIcon
    }
];

const noiseSvg = `
data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
<filter id='n'>
<feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1'/>
</filter>
<rect width='100%' height='100%' filter='url(%23n)' opacity='0.06'/>
</svg>
`.replace(/\n/g, '');

const materialTexture =
    'data:image/svg+xml;base64,' +
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIj4KPGZpbHRlciBpZD0ibWF0Ij4KPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KPGZlRGlzcGxhY2VtZW50TWFwIGluPSJTb3VyY2VHcmFwaGljIiBzY2FsZT0iMS44Ii8+CjwvZmlsdGVyPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbWF0KSIgb3BhY2l0eT0iMC4yMiIvPgo8L3N2Zz4=';



const BrandBackground = styled('div')(({ theme }) => ({
    position:'relative',
    width:'100%',
    height:'100%',
    // backgroundColor: '#111218',


    backgroundImage: `
    radial-gradient(
      ellipse at center,
      rgba(255,255,255,0.07) 0%,
      rgba(0,0,0,0.6) 74%
    ),
    url("${materialTexture}")
  `,

    backgroundRepeat: 'repeat',
    backgroundSize: 'auto, 180px 180px',

    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));



const ProductSection = styled(Box)(({ theme }) => ({
    minHeight:'100vh',
    // background: 'linear-gradient(38deg,rgba(10, 10, 10, 0.78) 78%, rgba(249, 204, 61, 1) 100%)'
    // background:'#0e0e12',
    color:palette.mainTextColor,
    padding:'10vh 0 0',
    zIndex:1

}));

const Title = styled('h2')(({ theme }) => ({
    width:'100%',
    textAlign:'center',
    fontSize:'38px',
    color:palette.mainTextColor,

    [theme.breakpoints.up('md')]: {
        fontSize:'3.5rem',
    },
}));

const ProductBlock = () => {
    return (
        <Box className="bg-block bg-noise bg-variant-purple">
            <Line/>
            <BrandBackground>
                <EmbossLogo/>
                <ProductSection sx={{ textAlign: 'center', }} style={{display:'flex'}} className="second-screen" id="next">
                    <Container maxWidth="xl">
                        <Box>
                            <Title>
                                What Is Promiteo?
                            </Title>
                        </Box>
                        <Typography component={'p'} variant={'body1'}>
                            Promiteo was born from a simple truth:
                            desire should never be rushed, and passion should never be predictable.
                        </Typography>
                        <Typography component={'p'} variant={'body1'}>
                            Inspired by the myth of Prometheus — the one who dared to steal fire from the gods — Promiteo brings fire back into the night, into moments meant to be remembered, not forgotten.
                        </Typography>

                        <Typography component={'p'} variant={'body1'}>
                            This is not a box.
                            It is an invitation.
                        </Typography>

                        <Typography component={'p'} variant={'body1'}>
                            An invitation to pause, to disconnect from routine, and to reconnect with sensation.
                            Every Promiteo Box is carefully curated to awaken touch, curiosity, and intimacy — without pressure, without scripts, without expectations.
                        </Typography>

                        <Typography component={'p'} variant={'body1'}>
                            Designed for couples who understand that luxury is not excess, but experience.
                        </Typography>
                    </Container>

                </ProductSection>
            </BrandBackground>
            <Line/>
        </Box>
    );
}

export default ProductBlock;