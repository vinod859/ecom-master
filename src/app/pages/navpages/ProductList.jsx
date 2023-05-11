import { Box, Container, Divider, Grid } from '@mui/material'
import React from 'react'
import Product2 from '../../components/Product2'
import FilterBox from '../../components/FilterBox'

const ProductList = () => {
    const products = [
        {
            id: 1,
            title: 'product 1',
            mrp: '23,999',
            selling_price: '21,999',
            description: 'lorem gdfhfdhfhf ddfsdf'
        }, {
            id: 2,
            title: 'product 1',
            mrp: '23,999',
            selling_price: '21,999',
            description: 'lorem gdfhfdhfhf ddfsdf'
        },
    ]
    return (
        <Container maxWidth='xl'>
            <Grid container>
                <Grid item sm={3} lg={3}>
                    <FilterBox />
                </Grid>
                <Grid item sm={9} lg={9}>
                    {products.map((item, index) => <><Product2 item={item} /><Divider /></>)}
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductList