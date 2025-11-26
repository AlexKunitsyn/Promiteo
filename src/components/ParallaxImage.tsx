import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '14px',
    cursor: 'pointer',

    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0)',
        transition: 'background 0.3s ease',
        pointerEvents: 'none',
    },

    '&:hover::after': {
        background: 'rgba(0, 0, 0, 0.3)',
    },
});

const Img = styled('img')({
    width: '110%',
    height: '110%',
    objectFit: 'cover',
    willChange: 'transform', // <— супер важно для плавности
});

interface Props {
    src: any;
    width?: any;
    height?: any;
    alt?: string;
}

export default function ParallaxImage({ src, width = "100%", height = "100%", alt = '' }: Props) {
    const imgRef = useRef<HTMLImageElement>(null);
    const frame = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

        // отменяем предыдущий кадр
        if (frame.current) cancelAnimationFrame(frame.current);

        // создаём супер-плавный кадр анимации
        frame.current = requestAnimationFrame(() => {
            if (imgRef.current) {
                imgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
            }
        });
    };

    const handleMouseLeave = () => {
        if (imgRef.current) {
            imgRef.current.style.transform = `translate(0px, 0px) scale(1.08)`;
        }
    };

    return (
        <Container
            style={{ width, height }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Img ref={imgRef} src={src.src} alt={alt} />
        </Container>
    );
}
