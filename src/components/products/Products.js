import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  addBasket,
  removeBasket,
  updateBasket,
  totalMoneyCalculate,
} from "../../redux/products/productsSlice";

import {
  Box,
  Image,
  Container,
  Flex,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";

function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  let handleChange = (item, e) => {
    dispatch(updateBasket([item, e.target.value]));
  };

  useEffect(() => {
    dispatch(totalMoneyCalculate());
  }, [products]);

  return (
    <Flex>
      <Flex justifyContent="center" flexWrap="wrap">
        {products.map((item, i) => {
          return (
            <Container
              bg="white"
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              m="5px"
              centerContent
              key={i}
            >
              <Box maxW="sm">
                <Box mt="20px">
                  <Image
                    mx="auto"
                    height="120px"
                    src={item.photo}
                    alt={item.title}
                  />
                </Box>

                <Box p="6" textAlign="center">
                  <Box display="flex" alignItems="center"></Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {item.title}
                  </Box>

                  <Text color="green.300" textAlign="center" fontSize="xl">
                    ${item.price.toLocaleString("en-US")}
                  </Text>
                  <Box display="flex" my="12px">
                    <Button
                      bg="red.400"
                      disabled={item.count === 0}
                      onClick={() => {
                        dispatch(removeBasket(item));
                      }}
                    >
                      Sell
                    </Button>
                    <Input
                      mx="10px"
                      type="number"
                      maxW="120px"
                      textAlign="center"
                      onChange={(e) => {
                        return handleChange(item, e);
                      }}
                      value={item.count}
                    />
                    <Button
                      bg="green.400"
                      onClick={() => {
                        dispatch(addBasket(item));
                      }}
                    >
                      Buy
                    </Button>
                  </Box>

                  <Box display="flex" mt="2" alignItems="center" />
                </Box>
              </Box>
            </Container>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Products;
