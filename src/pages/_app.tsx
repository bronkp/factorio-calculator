import { ChakraProvider, extendTheme, Flex, Show } from '@chakra-ui/react'
import Navbar from 'factorio_calc/components/Header'
import 'factorio_calc/styles/globals.css'
import "@fontsource/cousine"
import type { AppProps } from 'next/app'
import Footer from 'factorio_calc/components/Footer'


export default function App({ Component, pageProps }: AppProps) {
  
  return( <ChakraProvider theme={extendTheme({
    fonts: {
      body:  "Cousine"
    }
  },{styles:{global:()=>({body:{bg:'gray.800',}})}}
  
  )}>
    <Navbar/>
    
  <Component {...pageProps} />
  
  <Footer/>
  </ChakraProvider>)
}
