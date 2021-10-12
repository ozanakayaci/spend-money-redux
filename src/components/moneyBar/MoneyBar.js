import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";

function MoneyBar() {
  const totalMoney = useSelector((state) => state.products.totalMoney);

  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      my="10px"
      p="10px"
      bg="linear-gradient(
        180deg,#2ecc71,#1abc9c)"
      justifyContent="center"
      top="0"
      position="sticky"
      zIndex="9999"
      flexWrap="wrap"
      mx="10px"
    >
      <Text color="white" textAlign="center" fontSize="2xl">
        ${totalMoney.toLocaleString("en-US")}
      </Text>
    </Flex>
  );
}

export default MoneyBar;
