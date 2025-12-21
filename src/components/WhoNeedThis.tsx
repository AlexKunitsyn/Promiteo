import {Box, styled, Typography, Grid} from '@mui/material';
import React from "react";
import Image from 'next/image';
import Container from '@mui/material/Container';

import palette from '../styles/palette';

import item1 from '../images/1item.jpeg';
import item2 from '../images/2item.jpeg';
import item3 from '../images/3item.jpeg';
import item4 from '../images/4item.jpeg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import MenuItem from "@mui/material/MenuItem";

import ParallaxImage from '../components/ParallaxImage';
import Line from '../components/Line';





const productList = [
    {
        name:'Item Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: img3
    },
    {
        name:'Irem Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: img2
    },
    {
        name:'Item Name',
        description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        image: img1
    },
    // {
    //     name:'Item Name',
    //     description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
    //     image: item4
    // },
    // {
    //     name:'Item Name',
    //     description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
    //     image: item1
    // },
    // {
    //     name:'Item Name',
    //     description:'Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
    //     image: item2
    // },
];



const ProductsSection = styled(Box)(({ theme }) => ({
    minHeight:'100vh',
    // background:'#0e0e12',
    color:palette.mainTextColor,
    padding:'10vh 0 0 0'

}));

const ProductImage = styled(Image)(({ theme }) => ({
    width:'100%',
    height:'100%',
    objectFit:'cover'

}));

const ProductContainer = styled(Grid)(({ theme }) => ({
    // height:'70vh',
    padding:"15px",

}));
const Content = styled(Box)(({ theme }) => ({
    position:'relative',
    width:"100%",
    height:"100%",
    borderRadius: "10px",
    overflow:"hidden",
    // border:`1px solid ${palette.mainTextColor}`,

    '& img': {
        width: '100%',
        height: '450px',
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


const ProductTitle = styled("div")(({ theme }) =>({
    position: 'relative',
    // bottom: 0,
    //
    textAlign:'left',
    width:"100%",
    background:"rgba(0, 0, 0, 0.7)",
    padding: '20px 15px',
    minHeight:'150px',
    zIndex:1,
    fontSize:'20px',
    color:palette.mainTextColor,
    opacity:1,
    // pointerEvents: 'none',
    // transition: 'opacity 0.4s ease',
    '& h4':{
        margin:'0 0 15px'
    }

}));


const Title = styled('h2')(({ theme }) => ({
    width:'100%',
    textAlign:'center',
    fontSize:'38px',
    color:palette.mainTextColor,

    [theme.breakpoints.up('md')]: {
        fontSize:'3.5rem',
    },
}));

const WhoNeedThis = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: `
      radial-gradient(circle at 20% 60%, rgba(80, 0, 120, 0.25), transparent 60%),
      radial-gradient(circle at 70% 80%, rgba(120, 70, 200, 0.15), transparent 60%),
      #0d0d0d
    `,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "url('https://grainy-gradients.vercel.app/noise.svg')",
                    opacity: 0.18,
                    pointerEvents: "none",
                },
            }}
        >
            <Container maxWidth="xl">
                <ProductsSection sx={{ textAlign: 'center', }} style={{display:'flex', flexDirection: 'column'}} className="pro" id="next">
                    <Grid container >
                        <Title>
                            Who is this product for?
                        </Title>
                        <Grid container>
                            {productList.map((item, i) => {
                                return (
                                    <ProductContainer item xs={12} md={4} key={item.name+i}>
                                        <Content>
                                            <Image src={item.image} alt={'image'}/>
                                            {/*<ProductImage src={item.image} alt={'img'}/>*/}
                                            <ProductTitle>
                                                <Typography component={'h4'}>
                                                    {item.name}
                                                </Typography>
                                                <Typography component={'p'}>
                                                    {item.description}
                                                </Typography>

                                            </ProductTitle>
                                        </Content>

                                    </ProductContainer>
                                )})}
                        </Grid>


                    </Grid>
                </ProductsSection>
            </Container>
            <Line/>
        </Box>
    );
}

export default WhoNeedThis;