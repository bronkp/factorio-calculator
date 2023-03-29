import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import Navbar from 'factorio_calc/components/Header'
import 'factorio_calc/styles/globals.css'
import "@fontsource/cousine"
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  
  return( <ChakraProvider theme={extendTheme({
    fonts: {
      body:  "Cousine"
    }
  },{styles:{global:()=>({body:{bg:'gray.800',}})}}
  
  )}>
    <Navbar/>
    
  <Component {...pageProps} />
  
  </ChakraProvider>)
}
