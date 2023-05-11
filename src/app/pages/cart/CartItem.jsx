import { Badge, Button, Card, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem = () => {
    return (
        <Card>
            <Grid container alignItems={'center'} p={2} justifyContent={'center'}>
                <Grid item sm={12} lg={4} >
                    <Image src={require('../../assets/img/products/p1.webp')} width={'100px'} />
                </Grid>
                <Grid item sm={12} lg={5}>
                    <Typography variant='h5'>Google Pixel 6a (Charcoal, 128GB)</Typography>
                    <Stack>
                        <span>25,678 Ratings & 4,545 Reviews</span>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                    </Stack>
                </Grid>
                <Grid item sm={12} lg={3} >
                    <Typography variant='h4'>₹27,999</Typography>
                    <Typography variant='overline'>36% off</Typography>
                    <Typography>Free delilvery</Typography>
                </Grid>

            </Grid>
            <Stack direction={'row'} alignItems={'center'}>
                <IconButton ><RemoveCircleOutlineIcon /></IconButton>
                1
                <IconButton><AddCircleOutlineIcon /></IconButton>
                <Button startIcon={<DeleteOutlineIcon />}>Remove</Button>
            </Stack>
        </Card>
    )
}

export default CartItem