import {
  Menu,
  Icon,
  Box,
  Image,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  Flex,
  Grid,
  MenuDivider,
  HStack,
  VStack,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { product } from "../product";
import useProducts from "./items";
type ProductsMenuProps = {
  productSelect: any;
  product?: string;
};
//passing productSelect as prop so the menu can give parent element the selected product
const ProductsMenu: React.FC<ProductsMenuProps> = ({
  productSelect,
  product,
}) => {
  const { logistics, materials, getProduction, precursors, production } =
    useProducts();
  const [category, setCategory] = useState(0);
  return (
    <>
    
      <Box width="100%">
        <Menu>
          <MenuButton
            _hover={{ backgroundColor: "orange.500" }}
            width="100%"
            borderRadius={0}
            as={Button}
            backgroundColor="gray.400"
          >
            <Flex display="flex" justifyContent="center" alignItems="center">
              {product ? <Image src={product} /> : <Icon />}
            </Flex>
          </MenuButton>

          <MenuList bgColor="rgb(53,55,60)" >
            <HStack>
              {[
                "/groups/logistics.png",
                "/groups/production.png",
                "/groups/intermediate_products.png",
                "/groups/combat.png",
              ].map((img, index) => (
                <Image
                key={index}
                  src={img}
                  cursor="pointer"
                  onClick={() => setCategory(index)}
                />
              ))}
            </HStack>

            <>
              <MenuGroup
                color="yellow.200"
                fontSize="x-large"
                title={materials[category].name}
              >
                <Flex justifyContent="flex-start" width={500}>
                  <VStack
                    spacing={0}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    display="flex"
                  >
                    {materials[category].list.map((row,index) => (
                      <HStack key={index} spacing={0}>
                        {row.map((product, index) => (
                          <Flex
                          
                            bgGradient={[
                              'linear(to-t, rgb(60,52,65),rgb(60,62,65) )',
                              
                            ]}
                            justifyContent="center"
                            alignItems="center"
                            shadow="xs"
                            cursor="pointer"
                            key={index}
                            onClick={() => {
                              productSelect(product);
                            }}
                            height={10}
                            width={10}
                          >
                            <Image
                              height={7}
                              src={product.src}
                              title={product.name}
                            />
                          </Flex>
                        ))}
                      </HStack>
                    ))}
                  </VStack>
                </Flex>
              </MenuGroup>
              <MenuDivider />
            </>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default ProductsMenu;
