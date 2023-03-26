import { Button, Flex, Image,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const Navbar:React.FC = () => {
  useEffect(()=>{
    if(!localStorage.getItem('products')){
      localStorage.setItem('products', JSON.stringify(['fill']))
    }
  },[])
  return (
    <Flex width='100%' backgroundColor='gray.400'height={40} alignItems='center' display='flex' >
<Flex>asdf</Flex>
        <Image onClick={()=>console.log(JSON.parse(localStorage.getItem('products')!))} height='100%' src='/factorio.png'/>
        <Text fontSize='7xl'>
        Factorio Calculator</Text>
    </Flex>

  )
}

export default Navbar