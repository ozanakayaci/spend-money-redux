import "./App.css";

import { Flex } from "@chakra-ui/react";

import Products from "./components/products/Products";
import Header from "./components/header/Header";
import MoneyBar from "./components/moneyBar/MoneyBar";
import Basket from "./components/basket/Basket";

function App() {
  return (
    <Flex bg="gray.200">
      <Flex
        flexDirection="column"
        maxW="1000px"
        mx="auto"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Header />
        <MoneyBar />
        <Products />
        <Basket />
      </Flex>
    </Flex>
  );
}

export default App;
