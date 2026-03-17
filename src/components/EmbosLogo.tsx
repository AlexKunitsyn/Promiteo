import {Box, styled, Typography, Grid} from '@mui/material';
import React from "react";
import Image from 'next/image';
import Container from '@mui/material/Container';


const EmbossLogo = () => {
    return (
        <div style={{
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)',
            zIndex:0,
        }}>

        <svg
            viewBox="0 0 900 450"
            width="50vw"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="deboss" x="-20%" y="-20%" width="140%" height="140%">
                    {/* мягкое размытие формы */}
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1.6" result="blur" />

                    {/* свет сверху */}
                    <feOffset dx="-1.2" dy="-1.2" result="highlight" />

                    {/* тень снизу */}
                    <feOffset dx="1.6" dy="1.6" result="shadow" />

                    {/* сборка */}
                    <feMerge>
                        <feMergeNode in="highlight" />
                        <feMergeNode in="shadow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* микротекстура бумаги */}
                <filter id="paper">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="1"
                        result="noise"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="1.2"
                    />
                </filter>
            </defs>

            <g
                filter="url(#deboss)"
                fill="#111218"
                // fill="#9E7C45"
                opacity="0.95"
            >
                <path d="M82.27 121.27c2-.69 3.89-1.66 5.58-3 3.74-2.97 6.2-7.36 6.93-12.07.86-5.55-.42-11.4-3.29-16.2-2.24-3.75-5.51-6.92-9.52-8.7.81.36 1.21 3.16 1.39 3.94.38 1.64.6 3.31.65 4.99.28 9.34-4.98 18.21-12.34 23.69-3.06 2.28-6.29 4.31-9.67 6.09-.5.26-1.02.48-1.51.73.33.2 2.46.68 3.08.81 1.24.26 2.48.47 3.73.63 5 .64 10.19.7 14.99-.94Z"/>
                <path  d="M41.94 0C55.01 7.66 61.03 25.97 54.6 41.39c-3.23 7.75-8.41 14.73-12.99 21.88-3.17 4.95-7.11 9.43-10.21 14.42-9.08 14.59-10.59 29.6-1.63 44.95-9.3.59-23.74-15.94-27.21-25.26-5.76-15.45-1.27-28.8 8.34-40.92 7.69-9.7 16.21-18.75 23.85-28.5C41.07 19.89 44.5 10.67 41.94 0Z"/>
                <path  d="M67.46 36.86c7.93 8.87 8.83 19.46 5.45 29.92-2.24 6.94-6.46 13.56-11.01 19.37-7.91 10.1-13.02 20.48-8.34 33.88-14.13-7.25-18.8-20.8-11.44-35.4 4.16-8.24 10.12-15.61 15.63-23.11 5.41-7.36 9.96-14.88 9.71-24.66Z"/>


            </g>
        </svg>
        </div>
    );
};


export default EmbossLogo;