import React, { useEffect } from 'react'

import { Box, Container, Grid, Text, Image, Button } from '@chakra-ui/react'
import Counter from './Counter'


//importing animation
import Aos from 'aos';
import 'aos/dist/aos.css';

import eventsbg from "/eventsbg.jpg";


export default function EventSchedule() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <Box backgroundImage={`url(${eventsbg})`}
                backgroundPosition="center"
                backgroundAttachment="fixed"
                width="100%">
                <Container  maxW="container.xl" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} py={{ base: 5, lg: 20 }} gap={3}>
                        <Box>
                            <Text fontSize='14' color="#df42b1" textUnderlineOffset={7} textDecor='underline' textDecorationColor='grey' p={5}>ABOUT EVENTS SCHEDULE</Text>

                            <Text color='white' fontWeight='bold' p={3} lineHeight={1.2} fontSize={{base: 20, lg: 40}} letterSpacing={1.1}>WELCOME TO THE AFRICAN SIMBA MANAGEMENT</Text>
                            <Text color='white' p={3} fontSize={16} lineHeight={1.8} fontWeight={"400"}>
                                The Project Management is a platform
                                to learn expert techniques for building successful
                                project teams, creating efficient plans and implementing
                                effective tracking measures to ensure your projects come in
                                on deadline and on budget. In one fast-paced, well-designed day,
                                well cover all the essential elements of project management.
                            </Text>
                            <Box pt={7} pl={3}>

                                <Button
                                    py={25}
                                    to="/tickets"
                                   
                                    rounded={'full'}
                                    bgGradient="linear(to-r, purple.500, #df42b1)"
                                    color={'white'}>
                                    INTERESTED &rarr;
                                </Button>
                            </Box>

                        </Box>
                        <Box >
                            <Image rounded={4} mt={{base: 5, lg: 0}} src='./ddane.jpg' alt='Wahalla' />
                        </Box>
                    </Grid>


                    {/* Counter area */}
                    <Counter />
                </Container>


            </Box>
        </>
    )
}