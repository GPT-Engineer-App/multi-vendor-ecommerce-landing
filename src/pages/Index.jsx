import React from "react";
import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const categories = ["Electronics", "Fashion", "Home & Kitchen", "Books", "Toys", "Sports", "Beauty", "Automotive"];

const Header = () => (
  <Box bg="blue.500" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          MultiVendor
        </Heading>
        <InputGroup maxW="500px">
          <Input placeholder="Search for products" bg="white" color="black" />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>
        <HStack spacing={4}>
          <IconButton aria-label="User" icon={<FaUser />} />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const CategorySection = () => (
  <Box bg="gray.100" py={4}>
    <Container maxW="container.xl">
      <HStack spacing={4} overflowX="auto">
        {categories.map((category) => (
          <Link key={category} px={4} py={2} bg="white" borderRadius="md" boxShadow="md" _hover={{ bg: "blue.500", color: "white" }}>
            {category}
          </Link>
        ))}
      </HStack>
    </Container>
  </Box>
);

const ProductCard = ({ title, image, price }) => (
  <Box bg="white" borderRadius="md" boxShadow="md" overflow="hidden" maxW="sm">
    <Image src={image} alt={title} />
    <Box p={4}>
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text color="gray.500">${price}</Text>
    </Box>
  </Box>
);

const ProductSection = () => (
  <Container maxW="container.xl" py={8}>
    <Heading as="h2" size="xl" mb={4}>
      Featured Products
    </Heading>
    <Flex wrap="wrap" spacing={4} justify="space-around">
      <ProductCard title="Product 1" image="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3MTc1ODIzMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" price="99.99" />
      <ProductCard title="Product 2" image="https://images.unsplash.com/photo-1712847332419-7bb0475464aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxmYXNoaW9ufGVufDB8fHx8MTcxNzU4MjMzNXww&ixlib=rb-4.0.3&q=80&w=1080" price="49.99" />
      <ProductCard title="Product 3" image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lJTIwa2l0Y2hlbnxlbnwwfHx8fDE3MTc1ODIzMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" price="29.99" />
      <ProductCard title="Product 4" image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rc3xlbnwwfHx8fDE3MTc1ODIzMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" price="19.99" />
    </Flex>
  </Container>
);

const Footer = () => (
  <Box bg="blue.500" color="white" py={4} mt={8}>
    <Container maxW="container.xl">
      <Text textAlign="center">© 2023 MultiVendor. All rights reserved.</Text>
    </Container>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <CategorySection />
      <ProductSection />
      <Footer />
    </Box>
  );
};

export default Index;
