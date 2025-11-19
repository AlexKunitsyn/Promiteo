import {Box, styled, Typography, Grid} from '@mui/material';
import React from "react";
import Image from 'next/image';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BrushIcon from '@mui/icons-material/Brush';
import DiamondIcon from '@mui/icons-material/Diamond';
import palette from '../styles/palette';

import boxImage from '../images/box_image.jpg'

const ProductSection = styled(Box)(({ theme }) => ({
    minHeight:'100vh',
    // background: 'linear-gradient(38deg,rgba(10, 10, 10, 0.78) 78%, rgba(249, 204, 61, 1) 100%)'
    background:'#0e0e12',
    color:palette.mainTextColor

}));
const Content = styled(Box)(({ theme }) => ({

}));

const ProductBlock = () => {
    return (
        <ProductSection sx={{ textAlign: 'center', }} className="second-screen" id="next">
            <Typography component={'h2'}
                        style={{
                            fontSize:'3.5rem',
                            color:palette.mainTextColor,
                            padding:'10vh 0',
                        }}>
                What Is Promiteo Box?
            </Typography>

            <Grid container>
                <Grid item sm={6}>
                    <WorkspacePremiumIcon/>
                    <CardGiftcardIcon/>
                    <VerifiedIcon/>
                    <LocalShippingIcon/>
                    <DiamondIcon/>
                    <BrushIcon/>
                </Grid>
                <Grid item sm={6}>
                    <Image src={boxImage} alt='boxImage'/>
                </Grid>

            </Grid>
        </ProductSection>
    );
}

export default ProductBlock;