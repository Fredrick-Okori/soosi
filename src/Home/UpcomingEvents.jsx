import React, { useEffect } from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    HStack,
    Container,
} from "@chakra-ui/react";
import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from './customArrows';


import Aos from 'aos';
import 'aos/dist/aos.css';


import bgImage from "/bg.jpg";

const events = [
    {
        title: "Dimitri Vegas & Like Mike, Ushuaïa Ibiza",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/wahallawednesday.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike, Ushuaïa Ibiza",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/fiesta_sunday.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike, Ushuaïa Ibiza",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/afrovibes.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike, Ushuaïa Ibiza",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/ddane.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike, Ushuaïa Ibiza",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/ddane.jpg",
    },
    {
        title: "Dimitri Vegas & Like Mike, Ushuaïa Ibiza",
        date: "Wednesdays Summer 2024",
        location: "Ibiza, Spain",
        image: "/ddane.jpg",
    },
    // Add other events here
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const UpcomingEvents = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <Box backgroundImage={`url(${bgImage})`}
            backgroundPosition="center"
            backgroundAttachment="fixed"
            width="100%" color="white" py={10} px={5}>
            <Container maxW='container.xl' data-aos='fade-in-up' data-aos-duration='300'>
                <Flex justify="space-between" align="center" mb={5}>
                    <Text fontSize="4xl" fontWeight="bold">Upcoming Festivals & Events</Text>
                    <HStack spacing={3}>
                        <Button rightIcon={<FiExternalLink />} colorScheme="whiteAlpha" variant="outline">
                            Calendar
                        </Button>
                    </HStack>
                </Flex>
                <Carousel
                    responsive={responsive}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                    infinite={true}
                    ssr={true}
                    itemClass="carousel-item-padding-40-px"
                >
                    {events.map((event, index) => (
                        <Box
                            key={index}
                            bg='#151853'
                            borderRadius="md"
                            overflow="hidden"
                            mb={5}
                            mx={2}
                        >
                            <Image width={296} h={296} objectFit='cover' src={event.image} alt={event.title} />
                            <Box p={4}>
                                <Text fontSize="xl" fontWeight="bold" mb={2}>{event.title}</Text>
                                <Flex align="center" mb={1}>
                                    <Text ml={2} whiteSpace="pre-line">{event.date}</Text>
                                </Flex>
                                <Flex align="center" mb={4}>
                                    <FiMapPin />
                                    <Text ml={2}>{event.location}</Text>
                                </Flex>
                                <Flex justify="space-between">
                                    <Button size="sm" colorScheme="whiteAlpha" variant="outline">Info</Button>
                                    <Button size="sm" colorScheme="pink">Tickets</Button>
                                </Flex>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
};

export default UpcomingEvents;
