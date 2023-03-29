import { Flex,Link,Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer:React.FC = () => {


    return (
<Flex width='100%' bgColor='orange.400' p={5} position='fixed' bottom={0}  justifyContent="center">
    
    <Text >Welcome to my calculator! </Text>
    <Text>This project was mainly for practice in React, so it does not have everything.</Text>
    <Text >Contact me: rorysaxton@gmail.com</Text>
   

    
    </Flex>
    )

}
export default Footer