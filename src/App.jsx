import * as React from 'react'
import './index.css'

//Registering Prismic




import { ChakraProvider } from '@chakra-ui/react'
import Layout from './Layout'







export default function App() {
  return (
    <>

      <ChakraProvider >
        <Layout />
      </ChakraProvider>

    </>

  )
}

