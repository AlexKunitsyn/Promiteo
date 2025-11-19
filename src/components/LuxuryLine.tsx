import {Box, styled, Typography} from '@mui/material';
import React from "react";
import Image from 'next/image';

import smallLogo from '../images/logo2.svg'

const Line = styled('div')(({ theme }) => ({
    width: '100%',
}));

const LuxuryLine = () => {
    return (
        <Line>
            <Image src={smallLogo} alt={'smallLogo'}/>
        </Line>
    );
}

export default LuxuryLine;