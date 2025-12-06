import {Box} from '@mui/material';
import React from "react";



const Line = () => {
    return (
        <Box sx={{
                width: "100%",
                height: "1px",
                background: `
                      linear-gradient(
                        90deg,
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

export default Line;