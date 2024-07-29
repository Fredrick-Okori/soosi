import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    Container,
    Stack,
    Link,
    useColorModeValue,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';

import {FiMenu} from 'react-icons/fi'


import logo from '../assets/logo2.jpg';

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            bg={useColorModeValue('black', 'gray.800')}
            px={3}
            color="white"
            zIndex={100}
            top={0}
            left={0}
            width='100%'
        >
            <Container maxW='container.xl'>
                <Flex padding={7} alignItems={'center'} justifyContent={'space-between'}>
                    <Box fontWeight="bold" fontSize="lg" display="flex" alignItems="center">
                        <Image maxW={50} rounded={50} src={logo} alt="logo" />
                    </Box>

                    <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Link to="/" _hover={{ textDecoration: 'none', color: '#df42b1' }} color="#df42b1">
                                Home
                            </Link>
                            <Menu>
                                <MenuButton as={Link} _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                    Pages
                                </MenuButton>
                                <MenuList bg="black" borderColor="gray.700">
                                    <MenuItem to="/page1" _hover={{ bg: 'gray.700' }}>Page 1</MenuItem>
                                    <MenuItem to="/page2" _hover={{ bg: 'gray.700' }}>Page 2</MenuItem>
                                </MenuList>
                            </Menu>
                            <Link to="/speakers" _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                Speakers
                            </Link>
                            <Link to="/blog" _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                Blog
                            </Link>
                            <Link to="/contact" _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                                Contact
                            </Link>
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
                        </Stack>
                    </Flex>

                    <IconButton
                        aria-label="Open Menu"
                        icon={<FiMenu />}
                        display={{ base: 'flex', md: 'none' }}
                        onClick={onOpen}
                    />
                </Flex>
            </Container>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg={useColorModeValue('black', 'gray.800')} color="white">
                        <DrawerCloseButton />
                     
                        <DrawerBody>
                            <MobileNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
};

const MobileNav = () => {
    return (
        <Stack p={4}>
            <Link to="/" _hover={{ textDecoration: 'none', color: '#df42b1' }} color="#df42b1">
                Home
            </Link>
            <Menu>
                <MenuButton as={Link} _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                    Pages
                </MenuButton>
                <MenuList bg="black" borderColor="gray.700">
                    <MenuItem to="/page1" _hover={{ bg: 'gray.700' }}>Page 1</MenuItem>
                    <MenuItem to="/page2" _hover={{ bg: 'gray.700' }}>Page 2</MenuItem>
                </MenuList>
            </Menu>
            <Link to="/speakers" _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                Speakers
            </Link>
            <Link to="/blog" _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                Blog
            </Link>
            <Link to="/contact" _hover={{ textDecoration: 'none', color: '#df42b1' }}>
                Contact
            </Link>
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
        </Stack>
    );
};

export default NavBar;
