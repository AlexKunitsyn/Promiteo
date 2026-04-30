import {Box} from '@mui/material';
import React from "react";



const VerticalLine = () => {
    return (
        <Box sx={{
                width: "1px",
                height: "100%",
                background: `
                      linear-gradient(
                        0deg,
                        rgba(249, 204, 61, 0) 0%,
                        rgba(249, 204, 61, 0.28) 50%,
                        rgba(249, 204, 61, 0) 100%
                      )
                    `,
                // my: 6,
            }}
            />


    );
}

export default VerticalLine;