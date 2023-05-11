import { Badge, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product2 = ({ item }) => {
    return (
        <Card component={Link} to={'/product-details/' + item.id}>
            <Grid container alignItems={'center'} p={2} justifyContent={'center'}>
                <Grid item sm={12} lg={4} >
                    <Image src={require('../assets/img/products/p1.webp')} width={'100px'} />
                </Grid>
                <Grid item sm={12} lg={5}>
                    <Typography variant='h5'>Google Pixel 6a (Charcoal, 128GB)</Typography>
                    <Stack>
                        <Badge>4.3</Badge> <span>25,678 Ratings & 4,545 Reviews</span>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                    </Stack>
                </Grid>
                <Grid item sm={12} lg={3} >
                    <Typography variant='h4'>₹27,999</Typography>
                    <Typography variant='overline'>36% off</Typography>
                    <Typography>Free delilvery</Typography>
                </Grid>

            </Grid>
        </Card>
    )
}

export default Product2