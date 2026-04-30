import {Box, styled, Typography, Grid} from '@mui/material';
import React from "react";
import Image from 'next/image';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BrushIcon from '@mui/icons-material/Brush';
import DiamondIcon from '@mui/icons-material/Diamond';

import palette from '../styles/palette';

import Line from "@components/Line";

import EmbossLogo from '@components/EmbosLogo';
import Container from "@mui/material/Container";

import LogoFlame from "@images/Logoflame1.svg";
import curatedSelection1 from "@images/CuratedSelection1.png";
import curatedSelection2 from "@images/CuratedSelection2.png";
import curatedSelection3 from "@images/CuratedSelection3.png";
import curatedSelection4 from "@images/CuratedSelection4.png";


const aboutBoxList = [
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: CardGiftcardIcon
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: VerifiedIcon
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: LocalShippingIcon
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: BrushIcon
    },
    {
        name:'Заголовок пункта',
        description:'Описание пункта. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ',
        icon: DiamondIcon
    }
];



const Title = styled('h2')(({ theme }) => ({
    width:'100%',
    fontSize:'40px',
    fontWeight:'500',
    margin:'0 0 30px',
    color:palette.mainTextColor,

    [theme.breakpoints.up('md')]: {
        fontSize:'3.5rem',
    },
}));

const Block = styled(Grid)(({ theme }) => ({
    position:'relative',
    'img':{
        width:'100%',
        objectFit:'cover',
    }

}));

const TextBlockRight = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,

    padding: '6vh', // Глубокие отступы от краев
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    // Эффект "дорогой" верстки — текст как бы парит
    pointerEvents: 'none',

}));

const TextBlockLeft = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '6vh', // Глубокие отступы от краев
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    // Эффект "дорогой" верстки — текст как бы парит
    pointerEvents: 'none',

}));

const TitleStyle = styled('h4')(({ theme }) => ({
    // fontFamily: theme.fonts.header,
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '1.2',
    letterSpacing: '0.05em', // Небольшое разрежение
    textTransform: 'uppercase', // Можно попробовать для еще большей строгости
    // color: theme.colors.white,
    marginBottom: '16px',
    // Плавное появление для эффекта "ритуала"
    // color:'#f9cc3d',
    color:'#d7be96',
    transition: 'color 0.3s ease',
    '&:hover': {
        // color: theme.colors.gold,
    }
}))

    const DescriptionStyle = styled('p')(({ theme }) => ({
        // fontFamily: theme.fonts.body,
        fontSize: '18px',
        fontWeight: '300', // Тонкое начертание
        lineHeight: '30px',  // Увеличенный интервал для легкости
        // letterSpacing: '0.02em',
        // color: '#d7be96',
        color: '#f7bf71',
        maxWidth: '450px',  // Ограничиваем ширину, чтобы текст не растягивался
        margin: '0',
    }))

const CuratedSelection = () => {
    return (
        <Box className="bg-block bg-noise bg-variant-purple">
            <Line/>
            {/*<Container maxWidth="xl">*/}
                <Grid container>
                    <Block item md={6}>
                        <Image src={curatedSelection1} alt={'image'}/>
                        <TextBlockRight>
                        <TitleStyle> Безупречность в деталях</TitleStyle>
                        <DescriptionStyle> Каждая линия и текстура продуманы для того, чтобы доставлять эстетическое удовольствие еще до начала использования.</DescriptionStyle>
                        </TextBlockRight>
                    </Block>
                    <Block item md={6}>
                        <Image src={curatedSelection2} alt={'image'}/>
                        <TextBlockLeft>
                            <TitleStyle> Ваш личный ритуал</TitleStyle>
                            <DescriptionStyle> Наши эксперты собрали лучшие продукты, которые превращают обычный вечер в незабываемый личный опыт.</DescriptionStyle>
                        </TextBlockLeft>
                    </Block>
                    <Block item md={6}>
                        <Image src={curatedSelection4} alt={'image'}/>
                        <TextBlockRight>
                            <TitleStyle> Забота о комфорте</TitleStyle>
                            <DescriptionStyle> Гипоаллергенные составы и анатомические формы. Ваше спокойствие и физический комфорт — наш главный приоритет.</DescriptionStyle>
                        </TextBlockRight>
                    </Block>
                    <Block item md={6}>
                        <Image src={curatedSelection3} alt={'image'}/>
                        <TextBlockLeft>
                            <TitleStyle> Проверено временем</TitleStyle>
                            <DescriptionStyle> Мы отобрали имена, которым доверяют миллионы. Продукты с историей, гарантирующие предсказуемый и высокий результат.</DescriptionStyle>
                        </TextBlockLeft>
                    </Block>
                </Grid>
            {/*</Container>*/}
            <Line/>
        </Box>
    );
}

export default CuratedSelection;