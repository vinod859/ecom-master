import { Badge, Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import PopularProduct from '../../components/PopularProduct'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ProductDetails = () => {
    const { id } = useParams()
    return (
        <Container maxWidth='xl'>
            <Grid container p={2} m={2}>
                <Grid sm={12} lg={4} p={2} justifyContent={'center'} >
                    <Box sx={{ border: '1px solid #ccc', padding: 2 }}  >
                        <Image src={require('../../assets/img/products/p1.webp')} width={'300px'} />
                    </Box>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item sm={6} lg={6}>
                            <Button variant='contained' startIcon={<ShoppingCartIcon />} >Add to Cart</Button>
                        </Grid>
                        <Grid item sm={6} lg={6}>
                            <Button component={Link} to={'/cart/'} variant='contained' startIcon={<FlashOnIcon />} >Buy Now</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sm={12} lg={8} p={2}>
                    <Typography variant='h5'>Google Pixel 6a (Charcoal, 128GB)</Typography>
                    <Stack>
                        <Badge >4.3</Badge> <span>25,678 Ratings & 4,545 Reviews</span>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                        <Typography>6GB RAM | 128 GB ROM</Typography>
                    </Stack>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, rerum eaque! Alias adipisci sequi nobis aperiam. Distinctio reiciendis ab nobis corrupti nisi nam quo sed, fuga soluta aspernatur odit commodi?</Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, rerum eaque! Alias adipisci sequi nobis aperiam. Distinctio reiciendis ab nobis corrupti nisi nam quo sed, fuga soluta aspernatur odit commodi?</Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, rerum eaque! Alias adipisci sequi nobis aperiam. Distinctio reiciendis ab nobis corrupti nisi nam quo sed, fuga soluta aspernatur odit commodi?</Typography>

                </Grid>

            </Grid>
            <PopularProduct />
        </Container>
    )
}

export default ProductDetails