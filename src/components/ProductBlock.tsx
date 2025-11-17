import {Box, styled, Typography} from '@mui/material';
import React from "react";

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BrushIcon from '@mui/icons-material/Brush';
import DiamondIcon from '@mui/icons-material/Diamond';

const ProductSection = styled(Box)(({ theme }) => ({
    minHeight:'100vh'

}));

const ProductBlock = () => {
    return (
        <ProductSection sx={{ textAlign: 'center', p: 4 }} className="second-screen" id="next">

        </ProductSection>
    );
}

export default ProductBlock;