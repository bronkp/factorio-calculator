import {
  Flex,
  VStack,
  Text,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Button,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { product, Ratio } from "./product";
import useProducts from "./Products/items";
type SavedRecipeProps = {
  product: { name: string; src: string; ratios: any };
  recipeIndex: number;
  setProducts: any;
  startNew: any;
};
const SavedRecipe: React.FC<SavedRecipeProps> = ({
  product,
  recipeIndex,
  setProducts,
  startNew,
}) => {
  const [producers, setProducers] = useState<any>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(product);

    let initialTypes: any = {};
    product?.ratios?.map((ratio: Ratio, index: number) => {
      initialTypes[index] = ratio.producer_type;
    });
    setProducers(initialTypes);
    console.log("here");
    setLoading(false);
  }, []);
  const handleDelete = (index: number) => {
    let items = JSON.parse(localStorage.getItem("products")!);
    items.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(items));
    startNew(true);
  };
  const changeProduction = (index: number, smelter: product) => {
    let storedProduction = JSON.parse(localStorage.getItem("products")!);
    setProducers((prev: any) => ({ ...prev, [index]: smelter }));
    storedProduction[recipeIndex].ratios[index].producer_type = smelter;
    localStorage.setItem("products", JSON.stringify(storedProduction));
    //setProducts(storedProduction);
  };
  const { smelters, smelts, assemblers, chemicals, oils, oil_refinery } =
    useProducts();

  return (
    <>
      {!isLoading && (
        <>
          <SimpleGrid
            justifyContent="flex-start"
            width={1000}
            height="100%"
            bgColor="rgb(53,55,60)"
            pb={300}
            pl={10}
            pt={10}
            ml={40}
            margin={0}
            columns={4}
            rowGap={11}
            gap={0}
          >
            <Text color="gray.200" fontWeight="bold">
              Product
            </Text>
            <Text color="gray.200" fontWeight="bold">
              Producers
            </Text>
            <Text color="gray.200" fontWeight="bold">
              Goal per/s
            </Text>
            <Text color="gray.200" fontWeight="bold">
              Producer Type
            </Text>
            {/* maps through the ratio data for the selected production displaying their info
          in the VStack */}
            {product?.ratios?.map((ratio: Ratio, index: number) => (
              <>
                <Image
                  minW={30}
                  maxHeight={30}
                  src={ratio.src}
                  onClick={() => {
                    console.log(index, producers[index]);
                  }}
                />
                <Text color="gray.400">
                  {/* checks if the production is a furnace then check which type of producer to give the proper ratio */}
                  {ratio.name === "Water"
                    ? ratio.producers
                    : oils.includes(ratio.name) ||
                      ratio.name === "Wood" ||
                      ratio.name === "Fish"
                    ? "-"
                    : smelts.includes(ratio.name)
                    ? producers[index].name === "Stone furnace"
                      ? ratio.producers.toFixed(2)
                      : (ratio.producers / 2).toFixed(2)
                    : chemicals.includes(ratio.name)
                    ? ratio.producers
                    : producers[index].name === "Assembling machine 1"
                    ? (ratio.producers * 2).toFixed(2)
                    : producers[index].name === "Assembling machine 2"
                    ? ((ratio.producers * 4) / 3).toFixed(2)
                    : ratio.producers / 1.25}
                </Text>
                <Text color="gray.400"> {ratio.goal}/s</Text>
                {/* checking if item belongs to a smelter or assembler */}
                {ratio.name === "Fish" ? (
                  <Image
                    key={Date.now()}
                    src={"/intermediate_products/water.png"}
                  />
                ) : ratio.name === "Water" ? (
                  <Image
                    key={Date.now()}
                    src={"/production/offshore_pump.png"}
                  />
                ) : ratio.name === "Wood" ? (
                  <Image key={Date.now()} src={"/tree.png"} />
                ) : oils.includes(ratio.name) ? (
                  <Image key={Date.now()} src={oil_refinery.src} />
                ) : smelts.includes(ratio.name) ? (
                  <Box height="100%">
                    {/* Menu for selecting desired furnace */}
                    <Menu>
                      <MenuButton>
                        <Box boxShadow="dark-lg" bgColor="rgb(63,65,70)">
                          <Image key={Date.now()} src={producers[index].src} />
                        </Box>
                      </MenuButton>
                      <MenuList width={100} p={0} m={0} maxW={1}>
                        {smelters.map((smelter) => (
                          <>
                            <HStack>
                              <Box cursor="pointer">
                                <Image
                                  title={smelter.name}
                                  onClick={() => {
                                    changeProduction(index, smelter);
                                  }}
                                  src={smelter.src}
                                />
                              </Box>
                              <Text>{smelter.name}</Text>
                            </HStack>
                          </>
                        ))}
                      </MenuList>
                    </Menu>
                  </Box>
                ) : chemicals.includes(ratio.name) ? (
                  <>
                    {" "}
                    <Image key={Date.now()} src={producers[index].src} />
                  </>
                ) : (
                  <Box height="100%">
                    {/* Menu for selecting desired assembler */}
                    <Menu>
                      <MenuButton>
                        <Box boxShadow="dark-lg" bgColor="rgb(63,65,70)">
                          <Image key={Date.now()} src={producers[index].src} />
                        </Box>
                      </MenuButton>
                      <MenuList p={0} m={0} maxW={1}>
                        {assemblers.map((assembler) => (
                          <>
                            <HStack>
                              <Image
                                title={assembler.name}
                                onClick={() => {
                                  changeProduction(index, assembler);
                                }}
                                src={assembler.src}
                              />
                              <Text>{assembler.name}</Text>
                            </HStack>
                          </>
                        ))}
                      </MenuList>
                    </Menu>
                  </Box>
                )}{" "}
              </>
            ))}
          </SimpleGrid>
          <Text
            onClick={() => handleDelete(recipeIndex)}
            pl={1}
            cursor="pointer"
            height="100%"
            as="u"
            fontStyle="oblique"
            _hover={{ color: "pink" }}
            color="white"
          >
            delete
          </Text>{" "}
        </>
      )}
    </>
  );
};
export default SavedRecipe;
