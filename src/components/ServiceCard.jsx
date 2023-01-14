import React from 'react'
import { Box } from '@mui/material'
import { styles } from './ServiceCard.js'

export default function ServiceCard(props) {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.image}>
                <Box sx={styles.img}  component="img" src={props.image} alt={props.text}>
                </Box>
            </Box>
            <Box sx={styles.text}  component ="span">
                {props.text}
            </Box>
        </Box>
    )
}
