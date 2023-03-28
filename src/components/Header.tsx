import { Button, Flex, Image,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
const Navbar:React.FC = () => {
  const [xPos, setXPos]=useState('0')
  const [yPos, setYPos]=useState('0')
  const [display,setDisplay]=useState('none')
  useEffect(()=>{
    if(!localStorage.getItem('products')){
      localStorage.setItem('products', JSON.stringify(['fill']))
    }
  },[])
  useEffect(()=>{
    setDisplay('none')
  },[])
  const Train = motion(Image)
  const handleClick = ()=>{
  setDisplay('show')
setXPos('0')
setYPos('0')
setTimeout(() => {
  setXPos('50vw');
  setYPos('100vh')
}, 0)
setTimeout(() => {
  setDisplay('none')
}, 100)
  }
  return (
    <Flex width='100%' backgroundColor='gray.400'height={40} alignItems='center' display='flex' >
<Train src='choochoo.png' animate={{display:display, x:xPos, y:yPos}} display={display} onClick={()=>console.log(display)}/>
        <Image onClick={()=>{console.log(JSON.parse(localStorage.getItem('products')!)); handleClick();}} height='100%' src='/factorio.png'/>
        <Text fontSize='7xl' as='b'  bgGradient='linear(to-r, gray.800, yellow.800)'
  bgClip='text'>
        Factorio Calculator</Text>
    </Flex>

  )
}

export default Navbar