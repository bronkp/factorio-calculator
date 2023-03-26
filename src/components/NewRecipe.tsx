import { Flex, Button, Input, VStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useProducts from "./Products/items";
import { product } from "./product";
import ProductsMenu from "./Products/ProductsMenu";
type NewRecipeProps = {
  setProducts: any;
  setStartNew: any;
  setView:any;
};
const NewRecipe: React.FC<NewRecipeProps> = ({ setProducts, setStartNew,setView }) => {
  
  const { logistics, getProduction, precursors, setProduction, production} = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<product>();
  const [productionGoal, setProductionGoal] = useState(0);
  const [warning, setWarning] = useState(false)
  return (
    <>
      <Flex width={50} borderWidth={0} height="100vh">
        <VStack alignItems='center' pl={20} height="100%" spacing={0}>
          {/*  */}
          
          {warning && <Text fontSize='xs' color='orange.400'>No Product Set</Text>}
          <ProductsMenu
            productSelect={setSelectedProduct}
            product={selectedProduct?.src}
          />
          <Input
           backgroundColor='gray.300'
            width="100%"
            type="number"
            placeholder="per/s"
            borderRadius={0}
            onChange={(e) => {
              setProductionGoal(parseInt(e.target.value));
            }}
          />
          {/* first checks production has a product and goal
          sets view to last stored recipe and its index
          localStorage does not like -1 as an index */}
          <Button
          backgroundColor='gray.300'
            borderRadius={0}
            onClick={() => {if(selectedProduct && productionGoal>0){
              setProduction(selectedProduct!, productionGoal);
              
              if (typeof window !== "undefined") {
                setProducts(JSON.parse(localStorage.getItem("products")!));
              }
              
              setView([JSON.parse(localStorage.getItem("products")!)[JSON.parse(localStorage.getItem("products")!).length-1],JSON.parse(localStorage.getItem("products")!).length-1])
              setStartNew(false);}else{setWarning(true)}
            }}
          >
            Calculate
          </Button>
        </VStack>
      </Flex>{" "}
    </>
  );
};

export default NewRecipe;
