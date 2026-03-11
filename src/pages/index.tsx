import React, {useEffect, useState} from "react";
import {Box, styled, Typography} from '@mui/material';
import ExampleComponent from '../components/ExampleComponent';
import ProductBlock from '../components/ProductBlock';
import ProductsList from '../components/ProductsList';
import ForCustomerBlock from '@components/Advantages';
import WhoNeedThis from '@components/WhoNeedThis';
import BrandPhilosophy from '@components/BrandPhilosophy';
import BrandSlider from '@components/BrandSlider';
import ReviewsSlider from '@components/ReviewsSlider';
import ContactForm from '@components/ContactForm';
import Preloader from '@components/Preloader';
import FirstScreenBlock from '@components/FirstScreenBlock';
import Image from 'next/image';
import { keyframes } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import palette from '../styles/palette';

// import logoImg from '../images/logo.svg'
import LogoIcon from '../images/logo.svg'
import firstScreenImg from "@images/firstScreenImg.webp";

import {useTranslation} from "../i18n/useTranslation";


const MainContainer = styled(Box)(({ theme }) => ({
    // backgroundColor: palette.blackMain
}));

const Home = () => {
    const { t, i18n } = useTranslation();



  return (
    <Box sx={{ textAlign: 'center'}}>
        <MainContainer>
            {/*<Preloader/>*/}
            <FirstScreenBlock fistImage ={firstScreenImg} showLogo={true}/>
            <ProductBlock/>
            <BrandPhilosophy/>
            {/*<ProductsList/>*/}
            <BrandSlider/>
            <ForCustomerBlock/>
            {/*<WhoNeedThis/>*/}

            <ReviewsSlider/>
            <ContactForm/>


        </MainContainer>
    </Box>
  );
}

export default Home;