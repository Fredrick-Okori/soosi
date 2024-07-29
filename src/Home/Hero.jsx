import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    Box,
    VStack,
    Text,
    Button,
    Stack,
    Heading,
} from '@chakra-ui/react';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

//Carousel Arrows
import { CustomLeftArrow, CustomRightArrow } from './customArrows';
import EventSchedule from './EventsSchedule';



// import { CustomLeftArrow, CustomRightArrow } from '../Home/CustomArrows';

const carouselItems = [
    {
        image: '../../public/clean.jpg',
        heading: 'AFRICAN SIMBA EVENTS',
        text: 'SHANGRI-LA HOTEL BANGKOK, BANGKOK, CHINA',
    },

    {
        image: '../../public/catwalk.jpg',
        heading: 'PARADIGM LOUNGE GGABA',
        text: 'Hilton Hotel, New York, USA',
    }
];

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const HeroSection = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <Carousel responsive={responsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}

            >
                {carouselItems.map((item, index) => (
                    <Box
                        key={index}
                        height="100vh"
                        backgroundImage={`url(${item.image})`}
                        backgroundPosition="center"
                        backgroundAttachment="fixed"
                        width="100%"
                        zIndex={-100}

                        display="grid"
                        margin='auto'

                    >
                        {/* Overlay */}
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            bg="blackAlpha.600"
                            zIndex="1"
                        />
                        <VStack

                            position="relative"
                            zIndex="2"
                            height="100%"
                            spacing={6}
                            textAlign="center"
                            color="white"
                            justifyContent="center"
                            data-aos='fade-up' data-aos-duration='2000'
                        >
                            <Heading fontSize={{ base: "5xl", lg: '8xl' }} color="white">
                                {item.heading}
                            </Heading>
                            <Text fontSize="2xl" maxW="600px" background='rgba(255, 255, 200, 0.1)' p={2}>
                                {item.text}
                            </Text>
                            <Stack direction="row" spacing={4}>
                                <Button
                                    to="/tickets"
                                    rounded={'full'}
                                    bgGradient="linear(to-r, purple.500, #df42b1)"
                                    color={'white'}
                                    _hover={{
                                        bgGradient: 'linear(to-r, purple.500, pink.700)',
                                        boxShadow: 'xl',
                                    }}
                                    py={25}
                                >
                                    MORE INFORMATION &rarr;
                                </Button>
                            </Stack>
                        </VStack>
                    </Box>
                ))}
            </Carousel>



        </>
    );
};

export default HeroSection;
