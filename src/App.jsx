import * as React from 'react'


import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './views/NavBar'
import HeroSection from './Home/Hero'





export default function App() {
  return (
    <>
      <ChakraProvider >
        <NavBar />
        <HeroSection/>
      </ChakraProvider>
    </>
    
  )
}