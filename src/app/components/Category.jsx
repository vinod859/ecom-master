import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Category = ({ title, img, id }) => {
    return (

        <Stack p={1}>
            <Link to={'/product-list/' + id} style={{ textAlign: 'center' }}>
                <Image src={img} width={'70px'} />
                <Typography >{title}</Typography>
            </Link>
        </Stack>
    )
}

export default Category