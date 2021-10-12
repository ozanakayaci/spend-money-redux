import React from "react";

import { Flex, Image, Box, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex p="20px" justifyContent="center" flexWrap="wrap">
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="lg"
        justifyContent="center"
        flexWrap="wrap"
        py="15px"
        px="30px"
      >
        <Image
          mx="auto"
          mb="30px"
          borderRadius="full"
          boxSize="150px"
          src="https://neal.fun/spend/billgates.jpg"
          alt="Bill Gates"
        />
        <Text textAlign="center" fontSize="2xl">
          Spend Bill Gates' Money
        </Text>
      </Box>
    </Flex>
  );
}

export default Header;
