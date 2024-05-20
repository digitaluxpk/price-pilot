"use client"
import { Image, Text, Badge, Button, Group, Box, useMantineTheme, Rating, Flex, Checkbox } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CompareProductModal from '../modal/CompareProductModal';

const products = [
  {
    name: 'MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core',
    price: '$9999.99',
    image: '/images/category.png',  
    description: '6 colours, 3 storage sizes',
    stars:5,
    totalReviews:1000,
    total:88,
    colors: ['blue', 'red', 'gray','yellow','orange'] 
  },
  {
    name: 'MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core',
    price: '$9999.99',
    image: '/images/category.png',  
    description: '6 colours, 3 storage sizes',
    stars:5,
    totalReviews:1000,
    total:88,
    colors: ['blue', 'red', 'gray','yellow','orange'] 
  },
  {
    name: 'MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core',
    price: '$9999.99',
    image: '/images/category.png',  
    description: '6 colours, 3 storage sizes',
    stars:5,
    totalReviews:1000,
    total:88,
    colors: ['blue', 'red', 'gray','yellow','orange'] 
  },
];

export default function CustomerViewed() {
  const [opened,handleModal] = useDisclosure()
  return (
    <Box mt={40}>
        <Text fw={700} fz={24}>Customers also viewed</Text>
        <Text mt={8}>People who looked at this product looked at these other options too</Text>
        <Flex mt={24} wrap={"wrap"} gap={16}>
      {products.map((product, index) => (
        <Box key={index} w={{xs:164,md:218}} onClick={handleModal.open} >
          <Box >
            <Image src={product.image} height={160} alt={product.name} />
          </Box>
          {/* <Group display={{xs:"none",md:"block"}}  position="left" spacing="xs" style={{ padding: '10px', paddingBottom: 20 }}>
            {product.colors.map(color => (
              <Badge key={color} color={color} size="lg" />
            ))}
          </Group> */}
          {/* <ColorOptions colors={product.colors} /> */}
            <Text fw={700} fz={14}>{product.name}</Text>
          
          <Flex gap={8} my={8} align={"center"}>
          <Rating defaultValue={product.stars} />
          <Text c={"#0034EC"}>({product.totalReviews})</Text>
          </Flex>
          <Text fw={500}>
              {product.price}
            </Text>
            <Text fz={12} mt={8}>
            Option: <span style={{fontWeight:"700"}}> {product.description}</span>
          </Text>

          <Checkbox mt={16} label="Comapare" />
        </Box>
      ))}
      <CompareProductModal opened={opened} onClose={handleModal.close} />
    </Flex>
    </Box>
  );
}
