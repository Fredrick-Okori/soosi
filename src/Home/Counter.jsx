import React from 'react'

import { Box, Container, Flex, Text, GridItem, Grid } from '@chakra-ui/react'


const count = [
    {
        count: "00",
        label: "Months",

    },
    {
        count: "00",
        label: "Days",
    },
    {
        count: "00",
        label: "Hours",
    },
    {
        count: "00",
        label: "Minutes",
    },
    {
        count: "00",
        label: "Seconds",
    }
]
export default function Counter() {
    return (
        <>
<Container maxW='container.xl'>
            <Grid color='white' gap={5}>
                <Box >
                        <Text color="#df42b1" fontSize='14' mb={3}> CONFERENCE DATE</Text>
                    <Text>COUNT EVERY SECOND UNTIL THE EVENT</Text>
                </Box>
                <Box>
                        <Grid templateColumns={['repeat(5, 1fr)']} width="30%" gap={{base: 0, lg: 5}} alignContent='center' mb={10}>
                        {count.map((item, index) => (
                            <GridItem key={index} 
                                border={{
                                    base: '1px solid #444675', lg: "2px solid #444675"}}                              
                              
                                textAlign='center'
                                lineHeight='1'
                            >
                                <Text fontSize={{base: 31, lg: 62}} fontWeight='bolder'>
                                    {item.count}
                                </Text>
                                <Text textColor='#6c757d' p={1} fontWeight='bold'>{item.label}</Text>
                            </GridItem>
                        ))}
                    </Grid>
                   
                </Box>
                </Grid>
            </Container>
        </>
    )
}