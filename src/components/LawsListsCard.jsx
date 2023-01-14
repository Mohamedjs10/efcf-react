import React from 'react'
import { Box} from '@mui/system'
import Button from '@mui/material/Button';
import { styles } from './LawsListsCard.js'

export default function LawsListsCard(props) {
    return (
        <Box sx={styles.container}>
            <Box 
                component="p"
                sx={styles.title}
            >
                {props.title}
            </Box>
            <Box 
                component="p"
                sx={styles.paragraph}
            >
                {props.paragraph}
            </Box>
            <Button 
                variant="contained"
                sx={styles.btn}
            >
                إقرأ المزيد
            </Button>
        </Box>
    )
}
