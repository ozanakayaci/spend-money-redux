import React from "react";

import { Flex, Text, Box } from "@chakra-ui/react";

import { useSelector } from "react-redux";

function Basket() {
  const products = useSelector((state) => state.products.products);
  const totalMoney = useSelector((state) => state.products.totalMoney);

  return (
    <Flex
      my="50px"
      flexDirection="column"
      maxW="1000px"
      mx="auto"
      justifyContent="flex-center"
      flexWrap="wrap"
      alignItems="center"
      minH="200px"
    >
      <Text>Your Receipt</Text>
      {products.map((item, i) => {
        return (
          <>
            {item.count !== 0 && (
              <Box
                key={i}
                display="flex"
                justifyContent="space-between"
                minW="350px"
              >
                <Text minW="150px">{item.title}</Text>
                <Text minW="75px">x{item.count}</Text>
                <Text minW="125px" color="green.300">
                  ${(item.count * item.price).toLocaleString("en-US")}
                </Text>
              </Box>
            )}
          </>
        );
      })}

      {100000000000 - totalMoney !== 0 && (
        <Box
          borderTop="double"
          display="flex"
          justifyContent="space-between"
          minW="350px"
        >
          <Text fontSize="xl">Total</Text>
          <Text fontSize="xl" minW="125px" color="green.300">
            ${(100000000000 - totalMoney).toLocaleString("en-US")}
          </Text>
        </Box>
      )}
    </Flex>
  );
}

export default Basket;
