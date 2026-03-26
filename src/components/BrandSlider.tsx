import React from "react";
import { useState, useEffect } from "react";
import {Box, styled, Typography, Grid} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Line from "@components/Line";
import Image from 'next/image';

// import Aurelia from '../images/aurelia.svg';
// import Calis from '../images/calis.svg';
// import Elan from '../images/elan.svg';
// import Lumera from '../images/lumera.svg';
// import Noxe from '../images/noxe.svg';
// import Oren from '../images/oren.svg';
// import Seria from '../images/seria.svg';
// import VeraVong from '../images/veraVong.svg';

import durex from '../images/brands/durex.jpg';
import shunga from '../images/brands/shunga.svg';
import Shunga from '../images/brands/shunga.svg';
import sf from '../images/brands/sf.png';
import tenga from '../images/brands/tenga.svg';
import Tenga from '../images/brands/tenga.svg';
import jo from '../images/brands/jo.webp';
import orgie from '../images/brands/orgie.webp';
import pjur from '../images/brands/pjur.svg';
import Pjur from '../images/brands/pjur.svg';
import DurexLogo from '../images/brands/DurexLogo.svg';

const Slide = styled('div')(({ theme }) => ({
    width:"200px",
    height:"140px",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'20px 40px',
    '& img':{
        minWidth:'200px',
        width:'100%',
        height:'100px',
        objectFit:'contain',
        opacity:"0.7"
    },
    '& svg':{
        minWidth:'200px',
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const checkScreen =() => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    },[]);


    console.log(isMobile,'isMobile');
    // console.log(window.innerWidth < 768,'window.innerWidth < 768');
    // console.log(window.innerWidth,'window.innerWidth');

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        waitForAnimate: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
    };

    const settings2 = {
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
    };

    const sliderSettings = isMobile ? settings : settings2;

    return (
        <SliderContainer>
            <Line/>
            <div className="slider-container">
                <Slider {...sliderSettings}>
                    <Slide>
                        {/*<Image src={durex} alt={'durex'}/>*/}
                        <DurexLogo/>
                    </Slide>
                    <Slide>
                        {/*<Image src={shunga} alt={'shunga'}/>*/}
                        <Shunga/>
                    </Slide>
                    <Slide>
                        <Image src={sf} alt={'sf'}/>
                        {/*<Sf/>*/}
                    </Slide>
                    <Slide>
                        <Tenga/>
                    </Slide>
                    <Slide>
                        <Image src={jo} alt={'jo'}/>
                        {/*<Jo/>*/}
                    </Slide>
                    <Slide>
                        <Image src={orgie} alt={'orgie'}/>
                        {/*<Orgie/>*/}
                    </Slide>
                    <Slide>
                        {/*<Image src={pjur} alt={'Pjur'}/>*/}
                        <Pjur/>
                    </Slide>
                    {/*<Slide>*/}
                    {/*    <VeraVong/>*/}
                    {/*</Slide>*/}
                </Slider>
            </div>
            <Line/>
        </SliderContainer>
    );
}

export default BrandSlider;