import React, { useState } from 'react';


import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"
import VideoGallery from './Videos';



export default function Main() {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    return (
        <>
            {/* Column 2 */}
            < Flex
                w={["100%", "100%", "60%", "60%", "100%"]}
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading
                    fontWeight="normal"
                    mb={4}
                    letterSpacing="tight"
                >
                    Today's <Flex display="inline-flex" fontWeight="bold">Picks</Flex>
                </Heading>
                <Text color="gray" fontSize="sm">Pick out your best video</Text>

                
               <VideoGallery/>
            </Flex >
        </>
    )
}