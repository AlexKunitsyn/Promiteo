import React, {useEffect, useState} from "react";
import Slider from 'react-slick';
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Rating,
    Stack, Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import palette from "@styles/palette";
import Container from "@mui/material/Container";
import Line from "@components/Line";

/* ---------------- styles ---------------- */

const Section = styled('section')({
    color:palette.mainTextColor,

});

const ReviewCard = styled(Card)({
    minHeight: '400px',
    background: 'rgba(17,18,24,0.65)',
    border: '1px solid rgba(201,166,107,0.18)',
    borderRadius: 24,
    backdropFilter: 'blur(6px)',
    color:palette.mainTextColor,
});

const AuthorRow = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginTop: 16,
});

const Name = styled(Typography)({
    fontWeight: 500,
});

const Role = styled(Typography)({
    opacity: 0.6,
    fontSize: 13,
});

const slickCss = `
.slick-track {
  display: flex;
}
.slick-slide {
  height: auto;
  padding: 0 16px;
}
.slick-prev, .slick-next {
  z-index: 2;
}
.slick-prev:before,
.slick-next:before {
  color: #C9A66B;
  font-size: 28px;
  opacity: .6;
}
.slick-prev:hover:before,
.slick-next:hover:before {
  opacity: 1;
}
`;

/* ---------------- data ---------------- */

const REVIEWS = [
    {
        name: 'Anna Peterson',
        role: 'Beauty Expert',
        rating: 5,
        text:
            'Очень качественный продукт. Упаковка и детали выглядят действительно премиально. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores atque corporis culpa deleniti distinctio,',
    },
    {
        name: 'Michael Ross',
        role: 'Creative Director',
        rating: 5,
        text:
            'Редко встречается такой уровень внимания к деталям. Отличный подарок. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores atque corporis culpa deleniti distinctio,',
    },
    {
        name: 'Sofia Laurent',
        role: 'Lifestyle Blogger',
        rating: 4.5,
        text:
            'Минимализм, стиль и ощущение дорогого продукта. Выглядит очень достойно. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores atque corporis culpa deleniti distinctio,',
    },
    {
        name: 'Anna Peterson',
        role: 'Beauty Expert',
        rating: 5,
        text:
            'Очень качественный продукт. Упаковка и детали выглядят действительно премиально. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores atque corporis culpa deleniti distinctio,',
    },
    {
        name: 'Michael Ross',
        role: 'Creative Director',
        rating: 5,
        text:
            'Редко встречается такой уровень внимания к деталям. Отличный подарок. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores atque corporis culpa deleniti distinctio,',
    },
    {
        name: 'Sofia Laurent',
        role: 'Lifestyle Blogger',
        rating: 4.5,
        text:
            'Минимализм, стиль и ощущение дорогого продукта. Выглядит очень достойно. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores atque corporis culpa deleniti distinctio,',
    },
];

/* ---------------- component ---------------- */

const ReviewsSlider =() => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const checkScreen =() => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    },[]);

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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        waitForAnimate: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
    };

    const sliderSettings = isMobile ? settings : settings2;
    const Title = styled('h2')(({ theme }) => ({
        width:'100%',
        textAlign:'center',
        fontSize:'38px',
        color:palette.mainTextColor,
        margin:'0 0 30px',

        [theme.breakpoints.up('md')]: {
            fontSize:'3.5rem',
        },
    }));

    return (
        <Box>
            <Section className="bg-block bg-noise bg-variant-purple" sx={{position:'relative', minHeight:'75vh' }}>
                <Box
                    sx={{
                        background: '#131024',
                        padding: '120px 0',
                        clipPath: 'polygon(0 100%, 100% 100%, 100% 60%, 0 0)',
                        transform: 'scaleX(-1)',
                        position:'absolute',
                        bottom:0,
                        width:'200%',
                        height:'100%',
                        zIndex: 0,
                        opacity:'0.6'
                    }}
                />
                <Container maxWidth="xl">
                {/* slick styles */}
                    <Title>
                        What do people say about our product?
                    </Title>


                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
                    />
                    <style>{slickCss}</style>

                    <Slider {...sliderSettings}>
                        {REVIEWS.map((review, idx) => (
                            <div key={idx}>
                                <ReviewCard>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Rating
                                                value={review.rating}
                                                readOnly
                                                precision={0.5}
                                                size="small"
                                            />
                                            <AuthorRow>
                                                <Avatar />
                                                <div>
                                                    <Name variant="subtitle2">{review.name}</Name>
                                                    <Role>{review.role}</Role>
                                                </div>
                                            </AuthorRow>

                                            <Typography variant="body1">
                                                “{review.text}”
                                            </Typography>


                                        </Stack>
                                    </CardContent>
                                </ReviewCard>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </Section>
        </Box>

    );
}

export default ReviewsSlider;