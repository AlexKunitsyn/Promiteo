// pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../../redux/store';
import {styled} from "@mui/material";
import { Box, Button, Typography } from '@mui/material';
// import { ReactComponent as FirstScreenImg } from '../../images/firstScreen.jpg';




// const screenHeight = window.innerHeight;
// const screenHeight2 = document.documentElement.clientHeight;

const MainContent = styled(Box)(({ theme }) => ({

}));

const MainContainer = styled(Box)(({ theme }) => ({

}));

const FeaturedProject = styled(Box)(({ theme }) => ({
    padding:'25px 0',
    // background: palette.lightGray,
    // color: palette.orange,
}));


const Home = () => {
    // const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const welcome = 'Welcome';

    // console.log('Высота видимой области экрана:', screenHeight, 'пикселей');
    // console.log('Высота:', screenHeight2, 'пикселей');
    // console.log(FirstScreenImg);
    const sliderSettings = {
        // dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        adaptiveHeight: true
    };


    // const [triggerGetPosts, responseGetPosts] = useLazyGetPostsQuery();
    // const [triggerGetPhotoList, responseGetPhotoList] = useLazyGetPhotoListQuery();

    // const { data: posts, error, isLoading } = useGetPostsQuery();

    const testApi = () => {
        // console.log('origjnfrgidfgvnb')
        // triggerGetPosts()
        // triggerGetPhotoList()
    };

    // console.log(responseGetPhotoList, 'responseGetPhotoList')

    return (
        <MainContainer>
        {/*</div>*/}fbdbdfgbf
        </MainContainer>
    );
};

export default Home;
