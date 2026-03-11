import * as React from 'react';
import { useState, MouseEvent, useEffect } from "react";
import Container from '@mui/material/Container';
import {Box, styled, Typography, Grid} from '@mui/material';
import { List, ListItem} from "@mui/material"
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";


import Image from "next/image";

import SmallLogo from '../images/logo2.svg';
import {useTranslation} from "../i18n/useTranslation";



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const StyledFooter = styled('footer')(({ theme }) => ({
    padding:'50px 20px'

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
        <StyledFooter>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid container item md={4}>
                        <Grid item xs={12} md={3}>
                        <SmallLogo
                            style={{
                                height: "70px",
                                padding: "0 15px 0 0",
                                transition: "all 0.35s ease",
                            }}
                        />
                        </Grid>
                        <Grid item  xs={12} md={9}>
                        <Typography component={'p'} variant={'body1'}>
                            Premium experience boxes for unforgettable moments.
                        </Typography>
                        <Typography component={'p'} variant={'body1'}>
                            Designed for unforgettable moments.
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <List>
                            <ListItem disablePadding>
                                <Link href="/">What's inside</Link>
                            </ListItem>

                            <ListItem disablePadding>
                                <Link href="/about">About</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="/faq">Contact</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="/faq">FAQ</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link href="/faq">Privacy Policy</Link>
                            </ListItem>

                        </List>
                    </Grid>
                    <Grid item md={4}>
                        Instagram  TikTok
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Typography component={'p'} variant={'body1'}>
                        © 2026 Promiteo
                        All rights reserved.
                    </Typography>

                </Grid>

            </Container>
        </StyledFooter>
    );
}
export default ResponsiveAppBar;