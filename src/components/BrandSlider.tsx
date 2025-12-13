import React from "react";
import {Box, styled, Typography, Grid} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Line from "@components/Line";

import Aurelia from '../images/aurelia.svg';
import Calis from '../images/calis.svg';
import Elan from '../images/elan.svg';
import Lumera from '../images/lumera.svg';
import Noxe from '../images/noxe.svg';
import Oren from '../images/oren.svg';
import Seria from '../images/seria.svg';
import VeraVong from '../images/veraVong.svg';

const Slide = styled('div')(({ theme }) => ({
    width:"200px",
    height:"100px",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'20px 40px',
    '& svg':{
        width:'100%',
        height:'100px',
        objectFit:'contain',
        opacity:"0.7"
    }
}));

const SliderContainer = styled(Box)(({ theme }) => ({
    // margin:'40px 0'
}));



const BrandSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        waitForAnimate: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        adaptiveHeight: true
    };

    return (
        <SliderContainer>
            <Line/>
            <div className="slider-container">
                <Slider {...settings}>
                    <Slide>
                        <Aurelia/>
                    </Slide>
                    <Slide>
                        <Calis/>
                    </Slide>
                    <Slide>
                        <Elan/>
                    </Slide>
                    <Slide>
                        <Lumera/>
                    </Slide>
                    <Slide>
                        <Noxe/>
                    </Slide>
                    <Slide>
                        <Oren/>
                    </Slide>
                    <Slide>
                        <Seria/>
                    </Slide>
                    <Slide>
                        <VeraVong/>
                    </Slide>
                </Slider>
            </div>
            <Line/>
        </SliderContainer>
    );
}

export default BrandSlider;