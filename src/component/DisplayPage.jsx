import { Box, Typography, Container, Button } from '@mui/material'
import React from 'react'
import img from '../Image/Laptop-iStock.jpg'
const DisplayPage = () => {
    return (
        <Container maxWidth="xl"  >
            <Box sx={{ display: "flex", justifyContent: "space-around", margin: "auto" }}>
                <Box sx={{ margin: "105px 18px" }}>
                    <Typography variant="h2" sx={{ textAlign: "center", fontStyle: "inherit", fontFamily: "initial", color: "black" }}>
                        69% of employees say they would work harder
                        if they were better recognized.
                        we make it easy & affordable.
                    </Typography>
                    <Typography variant='title' sx={{ textAlign: "end" }}>
                        -:Mayur Kumbhar
                    </Typography>
                </Box>
                <Box sx={{ margin: "65px 18px" }}>
                    <img src={img} alt="" srcset="" height="500px" width="800px" />
                </Box>
            </Box>
            <hr />
            <Box sx={{ margin: "90px 18px" }}>
                <Typography variant="h4" sx={{ textAlign: "center", fontFamily: "sans-serif", color: "black" }}>
                    Corporate Employee Training &
                    <br />Development Programs
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", margin: "auto" }}>
                    <Box>
                        <Button variant='outlined' >Marketing</Button>
                        <Typography variant='h6' sx={{ textAlign: "center", fontFamily: "sans-serif", color: "black" }}>
                            Timed she his law the spoil round defer.
                            In surprise concerns informed betrayed he learning is ye.
                            Ignorant formerly so ye blessing. He as spoke avoid given downs money on we.
                            Of properly carriage shutters ye as wandered up repeated moreover.

                        </Typography>

                    </Box>
                    <Box>
                        <Button variant='outlined' >Technology</Button>
                        <Typography variant='h6' sx={{ textAlign: "center", fontFamily: "sans-serif", color: "black" }}>
                            Timed she his law the spoil round defer.
                            In surprise concerns informed betrayed he learning is ye.
                            Ignorant formerly so ye blessing. He as spoke avoid given downs money on we.
                            Of properly carriage shutters ye as wandered up repeated moreover.

                        </Typography>

                    </Box>
                    <Box >
                        <Button variant='outlined' >Strategy</Button>
                        <Typography variant='h6' sx={{ textAlign: "center", fontFamily: "sans-serif", color: "black" }}>
                            Timed she his law the spoil round defer.
                            In surprise concerns informed betrayed he learning is ye.
                            Ignorant formerly so ye blessing. He as spoke avoid given downs money on we.
                            Of properly carriage shutters ye as wandered up repeated moreover.

                        </Typography>
                    </Box>
                    <Box >
                        <Button variant='outlined' >Work Force</Button>
                        <Typography variant='h6' sx={{ textAlign: "center", fontFamily: "sans-serif", color: "black" }}>
                            Timed she his law the spoil round defer.
                            In surprise concerns informed betrayed he learning is ye.
                            Ignorant formerly so ye blessing. He as spoke avoid given downs money on we.
                            Of properly carriage shutters ye as wandered up repeated moreover.
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Container >
    )
}
export default DisplayPage