// pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../../redux/store';
import {styled} from "@mui/material";
import { Box, Button, Typography } from '@mui/material';
import ProductsList from "@components/ProductsList";
import FirstScreenBoxPage from "@components/FirstScreenBoxPage";
import Preloader from "@components/Preloader";
import ReviewsSlider from "@components/ReviewsSlider";
import ContactForm from "@components/ContactForm";
// import { ReactComponent as FirstScreenImg } from '../../images/firstScreen.jpg';
import boxFirstSeriesImg from "@images/boxFirstSeries.png";


const MainContainer = styled(Box)(({ theme }) => ({
    position:'relative',

}));

const BoxSeriesOne = () => {
        return (
        <MainContainer>

            <FirstScreenBoxPage
                fistImage = {boxFirstSeriesImg}
                showLogo={false}
                text={'What Is inside?'}
            />
            <ProductsList/>
            <ReviewsSlider/>
            <ContactForm/>
        </MainContainer>
    );
};

export default BoxSeriesOne;
