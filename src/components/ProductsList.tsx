import {Box, styled, Typography, Grid} from '@mui/material';
import React from "react";
import Image from 'next/image';

import palette from '../styles/palette';

import item1 from '../images/1item.jpeg';
import item2 from '../images/2item.jpeg';
import item3 from '../images/3item.jpeg';
import item4 from '../images/4item.jpeg';
import MenuItem from "@mui/material/MenuItem";

import ParallaxImage from '../components/ParallaxImage';





const productList = [
    {
        name:'Item Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: item1
    },
    {
        name:'Irem Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: item2
    },
    {
        name:'Item Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: item3
    },
    {
        name:'Item Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: item4
    },
    {
        name:'Item Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: item1
    },
    {
        name:'Item Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: item2
    },
];



const ProductsSection = styled(Box)(({ theme }) => ({
    minHeight:'100vh',
    background:'#0e0e12',
    color:palette.mainTextColor,
    padding:'10vh 0 0 0'

}));

const ProductImage = styled(Image)(({ theme }) => ({
    width:'100%',
    height:'100%',
    objectFit:'cover'

}));

const ProductContainer = styled(Grid)(({ theme }) => ({
    height:'70vh',
    padding:"1vw",
}));
const Content = styled(Box)(({ theme }) => ({
    position:'relative',
    width:"100%",
    height:"100%",
    borderRadius: "10px",
    overflow:"hidden",
    border:`1px solid ${palette.mainTextColor}`,

    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s ease',
    },
    '&:hover img': {
        transform: 'scale(1.1)',
    },

    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0)',   // изначально прозрачный
        transition: 'background 0.4s ease',
        pointerEvents: 'none',

    },

    // Затемнение при наведении
    '&:hover::after': {
        background: 'rgba(0, 0, 0, 0.35)', // можно 0.2–0.5
    },'&:hover .productTitle': {
        opacity:1,
        pointerEvents: 'all',
    },

}));

const productWrapper = styled("div")(({ theme }) =>({
    // width: 80,
    // height: 80,
    // borderRadius: "50%",
    border: "2px solid #F9CC3D", // Золотой
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: palette.gold,
    fontSize: 40,
}));

const Title = styled("div")(({ theme }) =>({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width:"100%",
    background:"rgba(0, 0, 0, 0.7)",
    padding: 10,
    height:'150px',
    zIndex:1,
    fontSize:'20px',
    color:palette.mainTextColor,
    opacity:0,
    pointerEvents: 'none',
    transition: 'opacity 0.4s ease',

}));

const ProductBlock = () => {
    return (
        <ProductsSection sx={{ textAlign: 'center', }} style={{display:'flex'}} className="pro" id="next">
            <Grid container >
                <Typography component={'h2'}
                            style={{
                                fontSize:'3.5rem',
                                color:palette.gold,
                            }}>
                    What Is inside?
                </Typography>
                <Grid container>
                    {productList.map((item, i) => {
                        return (
                            <ProductContainer item xs={12} md={4} key={item.name+i}>
                                <Content>
                                    <ParallaxImage src={item.image}/>
                                    {/*<ProductImage src={item.image} alt={'img'}/>*/}
                                    <Title className={'productTitle'}>
                                        <Typography component={'h4'}>
                                            {item.name}
                                        </Typography>
                                        <Typography component={'p'}>
                                            {item.description}
                                        </Typography>

                                    </Title>
                                </Content>

                            </ProductContainer>
                        )})}
                </Grid>


            </Grid>
        </ProductsSection>
    );
}

export default ProductBlock;