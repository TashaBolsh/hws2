import React from 'react'
import {Slider, SliderProps, useTheme} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    const theme = useTheme()
    return (
        <Slider
            sx={{
                margin:'0px 20px',
                height:'6px',
                width: '147px',
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                    border: 'none',
                    backgroundColor: '#0f0',
                },
                '& .MuiSlider-thumb': {
                    border: '#0f0 1px solid',
                    width: 18,
                    height: 18,
                    backgroundColor: 'rgba(254,254,254,1)',
                    '&::before': {
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#0f0',
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: 'none',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default SuperRange
