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

import LogoFlame from "@images/Logoflame1.svg";


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



const Title = styled('h2')(({ theme }) => ({
    width:'100%',
    // fontSize:'40px',
    // fontWeight:'500',
    margin:'0 0 30px',
    color:palette.mainTextColor,
}));

const ProductBlock = () => {
    return (
        <Box className="bg-block bg-noise bg-variant-purple"
            // sx={{background: 'linear-gradient(279.35deg, #050710 1.81%, #3F437F 97.38%)'}}
        >
            <Line/>
            <Container maxWidth="xl">
                <Grid container sx={{ padding:'10vh 0'}}>
                    <Grid item md={4}>
                        <LogoFlame/>
                    </Grid>
                    <Grid item md={8} sx={{textAlign:'left', position:'relative', zIndex:'2'}}>
                        <Box>
                            <Title>
                                What Is Promiteo?
                            </Title>
                        </Box>
                        <Typography component={'p'} variant={'body1'}>
                            Promiteo was born from a simple truth:
                        </Typography>
                        <Typography component={'p'} variant={'body1'}>
                            desire should never be rushed, and passion should never be predictable.
                        </Typography>
                        <Typography component={'p'} variant={'body1'}>
                            Inspired by the myth of Prometheus — the one who dared to steal fire from the gods — Promiteo brings fire back into the night, into moments meant to be remembered, not forgotten.
                        </Typography>

                        <Typography component={'p'} variant={'body1'}>
                            This is not a box.
                        </Typography>

                        <Typography component={'p'} variant={'body1'}>
                            It is an invitation.
                        </Typography>

                        <Typography component={'p'} variant={'body1'}>
                            An invitation to pause, to disconnect from routine, and to reconnect with sensation.
                            Every Promiteo Box is carefully curated to awaken touch, curiosity, and intimacy — without pressure, without scripts, without expectations.
                        </Typography>

                        <Typography component={'p'} variant={'body1'}>
                            Designed for couples who understand that luxury is not excess, but experience.
                        </Typography>


                    </Grid>
                </Grid>
            </Container>
            <Line/>
        </Box>
    );
}

export default ProductBlock;