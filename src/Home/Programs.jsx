import React, {useEffect} from 'react';
import {
    Box,
    Text,
    Flex,
    Avatar,
    Button,
    Stack,
    Tab,
    TabList,
    TabPanels,
    Container,
    TabPanel,
    Tabs,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

//importing animation
import Aos from 'aos';
import 'aos/dist/aos.css';



import eventsbg from "/eventsbg.jpg";

const ProgramTab = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);


    return (
        <Box color="white" py={10} px={5} backgroundImage={`url(${eventsbg})`}
            backgroundPosition="center"
            backgroundAttachment="fixed"
            width="100%">
            <Container maxWidth='container.xl' data-aos='zoom-in-up' data-aos-duration='1000'>
            <Box textAlign="center" mb={10}>
                <Text fontSize="lg" color="pink.400">Our Timetable</Text>
                <Text fontSize="4xl" fontWeight="bold">Schedule Plan</Text>
            </Box>
            <Tabs align="center" variant="styled">
                <TabList>
                    <Tab
                        _selected={{ color: "white", bg: "blue.700" }}
                        px={6}
                        py={2}
                        borderRadius="md"
                    >
                        Monday<br />January 14, 2019
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "blue.700" }}
                        px={6}
                        py={2}
                        borderRadius="md"
                    >
                        Tuesday<br />January 15, 2019
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "blue.700" }}
                        px={6}
                        py={2}
                        borderRadius="md"
                    >
                        Wednesday<br />January 16, 2019
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ProgramItem
                            title="Dealing with Difficult People"
                            speaker="Gary Armstrong"
                            date="12-14 Jan 2019"
                            location="Mountain Resort, Phoenix, USA"
                        />
                        <ProgramItem
                            title="Street Food Convention"
                            speaker="Jeffrey Morales"
                            date="12-14 Jan 2019"
                            location="Mountain Resort, Phoenix, USA"
                        />
                    </TabPanel>
                    <TabPanel>
                        <ProgramItem
                            title="Dealing with Difficult People"
                            speaker="Gary Armstrong"
                            date="12-14 Jan 2019"
                            location="Mountain Resort, Phoenix, USA"
                        />
                        <ProgramItem
                            title="Street Food Convention"
                            speaker="Jeffrey Morales"
                            date="12-14 Jan 2019"
                            location="Mountain Resort, Phoenix, USA"
                        />
                    </TabPanel>
                    <TabPanel>
                        <ProgramItem
                            title="Dealing with Difficult People"
                            speaker="Gary Armstrong"
                            date="12-14 Jan 2019"
                            location="Mountain Resort, Phoenix, USA"
                        />
                        <ProgramItem
                            title="Street Food Convention"
                            speaker="Jeffrey Morales"
                            date="12-14 Jan 2019"
                            location="Mountain Resort, Phoenix, USA"
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Flex justify="center" mt={10}>
                <Button colorScheme="pink">Download Schedule (PDF)</Button>
            </Flex>
        </Container>
            </Box>
    );
};

const ProgramItem = ({ title, speaker, date, location }) => {
    return (
        <Flex
            background='#020617'
            border='1px solid #020617'
            p={5}
            borderRadius="md"
           
            _hover={{
                border: '1px solid #df42b1',
                transitionDuration: '500ms',
            }}

            align="center"
            justify="space-between"
            mb={5}
            color='white'
        >
            <Flex align="center">
                <Avatar name={speaker}  mr={4} />
                <Box>
                    <Text fontSize="xl" fontWeight="bold">{title}</Text>
                    <Text>by {speaker}</Text>
                    <Flex align="center" mt={2}>
                        <FaCalendarAlt />
                        <Text ml={2}>{date}</Text>
                    </Flex>
                    <Flex align="center" mt={1}>
                        <FaMapMarkerAlt />
                        <Text ml={2}>{location}</Text>
                    </Flex>
                </Box>
            </Flex>
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
                GET TICKETS &rarr;
            </Button>
        </Flex>
    );
};

export default ProgramTab;
