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

import boxImage from '../images/box_image.jpg'
import MenuItem from "@mui/material/MenuItem";
import Line from "@components/Line";

import EmbossLogo from '@components/EmbosLogo';
import Container from "@mui/material/Container";


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

const noiseSvg = `
data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
<filter id='n'>
<feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1'/>
</filter>
<rect width='100%' height='100%' filter='url(%23n)' opacity='0.06'/>
</svg>
`.replace(/\n/g, '');

const materialTexture =
    'data:image/svg+xml;base64,' +
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIj4KPGZpbHRlciBpZD0ibWF0Ij4KPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KPGZlRGlzcGxhY2VtZW50TWFwIGluPSJTb3VyY2VHcmFwaGljIiBzY2FsZT0iMS44Ii8+CjwvZmlsdGVyPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbWF0KSIgb3BhY2l0eT0iMC4yMiIvPgo8L3N2Zz4=';



const BrandBackground = styled('div')(({ theme }) => ({
    position:'relative',
    width:'100%',
    height:'100%',
    backgroundColor: '#111218',


    backgroundImage: `
    radial-gradient(
      ellipse at center,
      rgba(255,255,255,0.07) 0%,
      rgba(0,0,0,0.6) 74%
    ),
    url("${materialTexture}")
  `,

    backgroundRepeat: 'repeat',
    backgroundSize: 'auto, 180px 180px',

    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));



const ProductSection = styled(Box)(({ theme }) => ({
    minHeight:'100vh',
    // background: 'linear-gradient(38deg,rgba(10, 10, 10, 0.78) 78%, rgba(249, 204, 61, 1) 100%)'
    // background:'#0e0e12',
    color:palette.mainTextColor,
    padding:'10vh 0 0 4vh',
    zIndex:1

}));

const BoxImage = styled(Image)(({ theme }) => ({
    width:'100%',
    height:'100%',
    objectFit:'cover'

}));
const Content = styled(Box)(({ theme }) => ({

}));

const IconWrapper = styled("div")({
    width: 80,
    height: 80,
    borderRadius: "50%",
    border: "2px solid #F9CC3D", // Золотой
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#F9CC3D",
    fontSize: 40,
});

const ProductBlock = () => {
    return (
        <Box className="bg-block bg-noise bg-variant-purple">
            <Line/>
            <BrandBackground>
                <EmbossLogo/>
                <ProductSection sx={{ textAlign: 'center', }} style={{display:'flex'}} className="second-screen" id="next">
                    <Container maxWidth="xl">
                        <Box>
                        <Typography component={'h2'}
                                    style={{
                                        fontSize:'3.5rem',
                                        color:palette.mainTextColor,
                                    }}>
                            What Is Promiteo Box?
                        </Typography>
                        </Box>
                        <Typography component={'p'}
                                    style={{
                                        fontSize:'1.2rem',
                                        lineHeight:3,
                                        color:palette.mainTextColor,
                                    }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto asperiores atque corporis culpa deleniti distinctio, eaque enim eos et hic impedit inventore ipsa iure maiores nisi obcaecati odio pariatur quaerat quo recusandae repellat reprehenderit saepe suscipit temporibus tenetur ut? At autem corporis distinctio dolorem doloremque eum exercitationem odio perferendis possimus. Ab amet assumenda autem cum dolorum eius eligendi eos eum ex in incidunt ipsa itaque magnam magni minima mollitia nam natus nostrum officiis optio possimus qui quibusdam quisquam, quo repellendus reprehenderit saepe sed sequi similique sunt suscipit tempora vel voluptatem? Ab ad alias aliquid asperiores autem commodi, corporis cum cumque delectus ea fuga fugit iusto minima nesciunt placeat quaerat repudiandae sint sit suscipit tenetur totam vitae voluptas. Aliquid autem esse inventore, libero molestiae nihil nostrum nulla sed tempore tenetur. Accusamus ad animi corporis est fugit iusto labore nihil nostrum numquam? Ad aliquam culpa deleniti, distinctio ducimus enim eum ex illo modi obcaecati omnis, pariatur placeat quidem quisquam quod repudiandae sint voluptatem voluptatibus. Ab adipisci aliquam distinctio illo iste iusto, libero molestias, non nostrum officia porro quae quaerat temporibus. A aliquid asperiores at dignissimos dolorum ea ipsa maiores maxime modi molestiae mollitia nihil officiis porro praesentium quam, qui quos reiciendis reprehenderit repudiandae sunt suscipit, temporibus ut voluptatibus. Aperiam blanditiis dolor et eum fugit ipsam, laborum necessitatibus pariatur rerum sapiente sequi voluptatibus? Corporis, cupiditate eius eveniet maxime nemo nobis odio quam reiciendis vel vero? Ab autem culpa debitis dolorem eius impedit itaque magni maiores perspiciatis voluptas. Beatae eveniet id molestias numquam quia quod tenetur, voluptatem. A adipisci, alias architecto assumenda cum cumque delectus deleniti dolore dolorum eaque eligendi enim error, excepturi fugiat id illo impedit magnam modi mollitia nisi nobis odit officia pariatur porro possimus quaerat quam quasi quibusdam recusandae rem sint suscipit temporibus ullam ut, vitae voluptas voluptate. Accusantium, quos?
                        </Typography>
                    </Container>

                </ProductSection>
            </BrandBackground>
            </Box>
    );
}

export default ProductBlock;