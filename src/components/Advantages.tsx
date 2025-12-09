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

import boxImage from '../images/box_image.jpg'
import MenuItem from "@mui/material/MenuItem";
import Line from "@components/Line";
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
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: DiamondIcon
    }
];



const ProductSection = styled(Box)(({ theme }) => ({
    minHeight:'100vh',
    // background: 'linear-gradient(38deg,rgba(10, 10, 10, 0.78) 78%, rgba(249, 204, 61, 1) 100%)'
    // background:'#0e0e12',
    color:palette.mainTextColor,
    padding:'10vh 0'

}));

const BoxImage = styled(Image)(({ theme }) => ({
    width:'100%',
    height:'100%',
    objectFit:'cover'

}));
const Content = styled(Box)(({ theme }) => ({

}));

const IconWrapper = styled("div")({
    width: 80,
    height: 80,
    borderRadius: "50%",
    border: "2px solid #F9CC3D", // Золотой
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#F9CC3D",
    fontSize: 40,
});

const ForCustomerBlock = () => {
    return (
        <Box className="bg-block bg-noise bg-variant-purple" sx={{position:'relative'}}>
            <Box
                sx={{
                    background: '#0A0F1A',
                    padding: '120px 0',
                    clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)',
                    position:'absolute',
                    width:'200%',
                    height:'50%',
                    zIndex: 0,
                    opacity:'0.6'
                }}
            />
            <Container maxWidth="xl" sx={{position:'relative'}}>
                <ProductSection sx={{ textAlign: 'center', }} style={{display:'flex'}} className="second-screen" id="next">
                    <Grid container >
                        <Grid item sm={12}
                        >
                            <Typography component={'h2'}
                                        style={{
                                            fontSize:'3.5rem',
                                            color:palette.mainTextColor,
                                            padding:"0 0 5vh"
                                        }}>
                                Advantages
                            </Typography>
                            <Grid container>

                                {aboutBoxList.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <Grid container item sm={12} md={4} alignItems="center">
                                            <Grid item xs={4}
                                                  sx={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                                                <IconWrapper>
                                                    <Icon sx={{ fontSize: 40 }}/>
                                                </IconWrapper>
                                            </Grid>

                                            <Grid item xs={8} sx={{padding:'30px 10px'}}>
                                                <ListItemText
                                                    primary={item.name}
                                                    secondary={item.description}
                                                    primaryTypographyProps={{
                                                        fontSize: 30,
                                                        color: "white",
                                                        textAlign:"left"
                                                    }}
                                                    secondaryTypographyProps={{
                                                        fontSize: 16,
                                                        color: "#dddddd",
                                                        textAlign:"left"
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>

                                    )})}

                            </Grid>
                        </Grid>

                    </Grid>
                </ProductSection>
            </Container>
            <Line/>
        </Box>
    );
}

export default ForCustomerBlock;