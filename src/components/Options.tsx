import {
  Flex,
  Image,
  HStack,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NewRecipe from "./NewRecipe";
import MenuOptions from "./NewRecipe";
import { product } from "./product";
import SavedRecipe from "./SavedRecipe";

const Options: React.FC = () => {
  // Allows the page to be switched to the create new page
  const [startNew, setStartNew] = useState(true);
  const [products, setProducts] = useState([]);
  const [view, setView] = useState<any>([]);

  //loads the saved production bar
  useEffect(() => {
    //uncomment if local storage gets corrupted
    // localStorage.setItem("products",JSON.stringify([{name:'a',src:'a',materials:[['a']],ratios:[[]]}]))
    if (typeof window !== "undefined") {
      setProducts(JSON.parse(localStorage.getItem("products")!));
    }
    if (!JSON.parse(localStorage.getItem("products")!)) {
      localStorage.setItem("products", ":D");
    }
  }, [view, startNew]);
  const handleClear = () => {
    localStorage.setItem("products", JSON.stringify([]));
    setProducts(JSON.parse(localStorage.getItem("products")!));
    setStartNew(true)
  };

  return (
    <>
      <Flex
      display='flex'
        bgColor="orange.400"
        justifyContent="center"
        height={10}
        width="100%"
      >
        <HStack spacing={4}>
          {/* <Button
        onClick={() => localStorage.setItem("products", JSON.stringify([]))}
      >
       Debug
      </Button> */}
          {/* sets StartNew to true, opening the create new recipe page */}
          <Button
          color='black'
          variant='link'
            bgColor="orange.400"
            _hover={{ bgColor: "orange.400" }}
            onClick={() => setStartNew(true)}
          >
            Add New
          </Button>
          <Button

          variant='link'
          color='black'
            bgColor="orange.400"
            _hover={{ bgColor: "orange.400" }}
            onClick={() => {
              handleClear();
            }}
          >
            Clear All
          </Button>
          {/* maps through saved products */}
          {products?.map((productInfo: product, index) => (
            <Image
            key={index}
            alt=''
              cursor="pointer"
              title={`${productInfo.name}: ${productInfo.ratios?.[0].goal}/s`}
              onClick={() => {
                setStartNew(false);
                setView([productInfo, index]);
              }}
              src={productInfo.src}
            />
          ))}
        </HStack>
      </Flex>

      {startNew && (
        <Flex height={900}justifyContent={{base:'flex-start',md:"center"}}>
        <NewRecipe
          setView={setView}
          setProducts={setProducts}
          setStartNew={setStartNew}
        /></Flex>
      )}
      {!startNew && (
        <Flex justifyContent="center">
          {" "}
          <SavedRecipe
            key={Date.now()}
            setProducts={setProducts}
            startNew={setStartNew}
            product={view[0]}
            recipeIndex={view[1]}
          />
        </Flex>
      )}

      {/* If the new recipe button has been clicked it shows the new recipe page */}
    </>
  );
};

export default Options;
