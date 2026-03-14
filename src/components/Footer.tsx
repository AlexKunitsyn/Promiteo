import * as React from 'react';
import { useState, MouseEvent, useEffect } from "react";
import Container from '@mui/material/Container';
import {Box, styled, Typography, Grid} from '@mui/material';
import { List, ListItem} from "@mui/material"
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import Line from "@components/Line";
import palette from "@styles/palette";
import theme from "@styles/theme";


import Image from "next/image";

import SmallLogo from '../images/logo2.svg';
import {useTranslation} from "../i18n/useTranslation";



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const StyledFooter = styled('footer')(({ theme }) => ({
    padding:'30px 20px 0'

}));

const FooterListItems = styled('li')(({ theme }) => ({
    lineHeight: '28px',
    fontSize: 14,
    opacity:'0.6',
    '& p':{
        lineHeight: '28px',
        fontSize: 14,
        opacity:'0.6',
    }

}));

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <Box
        sx={{
            background: '#131024',
        }}>
            <Line/>
            <StyledFooter  >

                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item md={3}>
                            <Box
                                sx={{
                                    position:'relative',
                                    // top: '-15px',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    flexDirection:'column',
                                    textAlign:'center',
                                }}>
                                <SmallLogo
                                    style={{
                                        height: "70px",
                                        padding: "0 15px 0 0",
                                        transition: "all 0.35s ease",
                                    }}
                                />
                                <Typography component={'p'} variant={'body1'}
                                    sx={{
                                    padding:'15px 0 0 0',
                                    lineHeight: '28px',
                                    fontSize: 14,
                                    opacity:'0.6'
                                    }}>
                                    Designed for unforgettable moments.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid container  md={8}>
                            <Grid item md={2}>
                                <Typography  component={'h6'} variant={'h6'}>
                                    Info
                                </Typography>
                                <List>
                                    <FooterListItems disablePadding>
                                        <Link href="/">What's inside</Link>
                                    </FooterListItems>
                                </List>
                            </Grid>
                            <Grid item md={2}>
                                <Typography  component={'h6'} variant={'h6'}>
                                    Info
                                </Typography>
                                <List>
                                    <FooterListItems disablePadding>
                                        <Link href="/about">About</Link>
                                    </FooterListItems>
                                    <FooterListItems disablePadding>
                                        <Link href="/faq">Contact</Link>
                                    </FooterListItems>
                                    <FooterListItems disablePadding>
                                        <Link href="/faq">FAQ</Link>
                                    </FooterListItems>
                                    <FooterListItems disablePadding>
                                        <Link href="/faq">Privacy Policy</Link>
                                    </FooterListItems>
                                </List>
                            </Grid>
                            <Grid item md={4}>
                                <Typography  component={'h6'} variant={'h6'}>
                                    Contact
                                </Typography>
                                <List>
                                    <FooterListItems disablePadding>
                                        <strong>Monday - Friday</strong>
                                        <p>09:00 - 18:00 (GMT)</p>
                                    </FooterListItems>
                                    <FooterListItems disablePadding>
                                        <strong>Phone: +455 544 455 255 </strong>
                                        <p>(call to national mobile network)</p>
                                    </FooterListItems>
                                    <FooterListItems disablePadding>
                                         Email: geral@promiteocompany.com
                                    </FooterListItems>
                                    <FooterListItems disablePadding>
                                        WhatsApp: +455 544 455 255
                                    </FooterListItems>
                                </List>
                            </Grid>
                            <Grid item md={3}>
                                <Typography  component={'h6'} variant={'h6'}>
                                    Head Office
                                </Typography>
                                <List>
                                    <FooterListItems disablePadding>
                                        <address>
                                            Beautyenigma, Lda.

                                            Rua Conceição Sales, 23

                                            2500-303 Caldas da Rainha

                                            Portugal
                                        </address>
                                    </FooterListItems>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12}
                          sx={{
                              padding:'20px',
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center'
                          }}
                    >
                        <Line/>
                        <Typography component={'p'} variant={'body1'} align={'center'}
                                    sx={{
                                        padding:'20px 0 0 0',
                                        opacity:'0.6',
                                    }}>
                            © 2026 Promiteo.
                            All rights reserved.
                        </Typography>

                    </Grid>

                </Container>
            </StyledFooter>
        </Box>
    );
}
export default ResponsiveAppBar;