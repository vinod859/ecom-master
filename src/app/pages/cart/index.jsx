import { Box, Button, Card, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
    const cartitems = [2, 3, 4, 5, 6, 4]
    const Tbl = ({ title, title2, sx }) =>
        <Stack direction={'row'} justifyContent={'space-between'} p={2} >
            <Typography sx={sx}>{title}</Typography>
            <Typography sx={sx}>{title2}</Typography>
        </Stack>
    return (
        <Container maxWidth={'xl'}>
            <Grid container>
                <Grid item lg={8} sm={12}>
                    {cartitems.map((item, index) => <CartItem />)}
                    <Paper sx={{ position: 'sticky', bottom: 0, left: '300px', textAlign: 'right', p: 3, }}><Button variant='contained' >Place Order</Button>
                    </Paper>
                </Grid>
                <Grid item lg={4} sm={12} height={'100%'}>
                    <Card m={2} p={2} sx={{ position: 'sticky', top: 0 }}>
                        <Typography variant='h6' m={2}>Price Details</Typography>
                        <Divider />
                        <Tbl title={'Price'} title2={'₹1,465'} />
                        <Tbl title={'Price'} title2={'₹1,465'} />
                        <Tbl title={'Price'} title2={'₹1,465'} />
                        <Tbl title={'Price'} title2={'₹1,465'} />
                        <Divider />
                        <Tbl sx={{ fontWeight: 'bold' }} title={'Price'} title2={'₹1,465'} />
                        <Divider />
                    </Card>
                </Grid>
            </Grid>
            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, aspernatur eaque? Voluptas maxime libero ipsam quaerat a, est, ea consectetur facere reiciendis nostrum voluptatem earum, consequuntur deserunt exercitationem suscipit cumque?</Typography>
        </Container>
    )
}

export default Cart