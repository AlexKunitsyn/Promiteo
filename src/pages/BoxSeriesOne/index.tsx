// pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../../redux/store';
import {styled} from "@mui/material";
import { Box, Button, Typography } from '@mui/material';
import ProductsList from "@components/ProductsList";
import FirstScreenBlock from "@components/FirstScreenBlock";
import Preloader from "@components/Preloader";
// import { ReactComponent as FirstScreenImg } from '../../images/firstScreen.jpg';

const MainContainer = styled(Box)(({ theme }) => ({
    position:'relative',

}));

const BoxSeriesOne = () => {
        return (
        <MainContainer>
            <Preloader/>
            <FirstScreenBlock/>
            <ProductsList/>
        </MainContainer>
    );
};

export default BoxSeriesOne;
