import { Box, Button, useTheme } from '@mui/material'
import React from 'react'

export default function SmallBtnTweet() {
    const theme = useTheme();
    return (
        <Box 
            sx={{
                cursor: 'pointer',
                visibility: {lg: 'hidden', xs: 'visible' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50px',
                height: '50px',
                marginTop: '20px',
                fill: '#FFFF',
                backgroundColor: `${theme.palette.primary.disabled}`,
                borderRadius: "50%",
                '&:hover': {
                    backgroundColor: `${theme.palette.primary.hover}`,
                }
            }}
        >
            <svg padding='0px' width="24px" height="24px">
                <g>
                    <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                    </path>
                </g>
            </svg>
        </Box>
    )
}
