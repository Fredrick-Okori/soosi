import * as React from 'react'


import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './views/NavBar'
import Home from './Home/Home'





export default function App() {
  return (
    <>
      <ChakraProvider >
      
        <NavBar />
        <Home/>
      </ChakraProvider>
    </>
    
  )
}