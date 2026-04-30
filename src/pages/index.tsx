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
import HowItWorks from '@components/HowItWorks';
import CuratedSelection from '@components/CuratedSelection';
import { useAppSelector } from '@redux/hooks';

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
    const age = useAppSelector((state) => state.age.isAgeConfirmed);

    console.log(age,'age')



  return (
    <Box sx={{ textAlign: 'center'}}>
        <MainContainer>
            {/*<Preloader/>*/}
            <FirstScreenBlock fistImage ={firstScreenImg} showLogo={true} text={'Ignite the Night'}/>
            <HowItWorks/>
            <ProductBlock/>
            <BrandPhilosophy/>
            <CuratedSelection/>
            {/*<ProductsList/>*/}
            {/*<BrandSlider/>*/}
            <ForCustomerBlock/>
            {/*<WhoNeedThis/>*/}

            {/*<ReviewsSlider/>*/}
            <ContactForm/>


        </MainContainer>
    </Box>
  );
}

export default Home;