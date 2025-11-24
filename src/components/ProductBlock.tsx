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
import StarIcon from '@mui/icons-material/StarIcon';


import palette from '../styles/palette';

import boxImage from '../images/box_image.jpg'
import MenuItem from "@mui/material/MenuItem";



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



const ProductSection = styled(Box)(({ theme }) => ({
    minHeight:'100vh',
    // background: 'linear-gradient(38deg,rgba(10, 10, 10, 0.78) 78%, rgba(249, 204, 61, 1) 100%)'
    background:'#0e0e12',
    color:palette.mainTextColor,
    padding:'10vh 0 0 0'

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

const ProductBlock = () => {
    return (
        <ProductSection sx={{ textAlign: 'center', }} style={{display:'flex'}} className="second-screen" id="next">
            <Grid container >
                <Grid item sm={6}
                    style={{

                    }}
                >
                    <Typography component={'h2'}
                                style={{
                                    fontSize:'3.5rem',
                                    color:palette.mainTextColor,
                                }}>
                        What Is Promiteo Box?
                    </Typography>
                    <List>
                        {console.log(aboutBoxList,'aboutBoxList')}
                        {aboutBoxList.map((item, i) => {
                            const Icon = item.icon;
                            return (
                        <ListItem key={item.name+i}>
                            <Grid container alignItems="center">
                                <Grid item xs={4} align="center">
                                    <IconWrapper>
                                        <Icon sx={{ fontSize: 40 }}/>
                                    </IconWrapper>
                                </Grid>

                                <Grid item xs={8}>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={item.description}
                                        primaryTypographyProps={{
                                            fontSize: 30,
                                            color: "white",
                                        }}
                                        secondaryTypographyProps={{
                                            fontSize: 16,
                                            color: "#dddddd",
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </ListItem>
                        )})}

                    </List>
                </Grid>
                <Grid item sm={6} style={{
                    clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0 100%)",

                }}>
                    <BoxImage src={boxImage} alt='boxImage'/>
                </Grid>

            </Grid>
        </ProductSection>
    );
}

export default ProductBlock;