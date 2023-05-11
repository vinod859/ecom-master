import { Box, Card, Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import Category from './Category'

const Categories = () => {
    const categories = [
        {
            title: 'Offers',
            img: require('../assets/img/categories/cat1.webp'),
            id: 1
        }, {
            title: 'Mobiles & Tables',
            img: require('../assets/img/categories/cat2.webp'),
            id: 2
        }, {
            title: 'Electronics',
            img: require('../assets/img/categories/cat3.webp'),
            id: 3
        }, {
            title: 'TV & Appliances',
            img: require('../assets/img/categories/cat4.webp'),
            id: 4
        }, {
            title: 'Fashion',
            img: require('../assets/img/categories/cat5.webp'),
            id: 5
        },
    ]
    return (
        <Card>
            <Grid container justifyContent={'space-evenly'}>
                {categories.map(item => <Category title={item.title} img={item.img} id={item.id} />)}
            </Grid>
        </Card>
    )
}

export default Categories