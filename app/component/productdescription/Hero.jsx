"use client";

import { useState } from 'react';
import { Container, Group, Text, Image, Badge, Rating, Box, Button, Grid, Flex } from '@mantine/core';
import { IconCheck, IconAlertCircle } from '@tabler/icons-react';

const product = {
  name: 'Apple - MacBook Air 15" Laptop - M2 chip - 16GB Memory - 1TB SSD (Latest Model) - Midnight',
  priceRange: '$6666.99 - $9999.99',
  inStock: true,
  model: 'MQTM3LL/A',
  rating: 4,
  totalReviews: 1000,
  images: ['/images/laptop.png', '/images/close-laptop.png', '/images/laptop.png', '/images/close-laptop.png', '/images/laptop.png', '/images/laptop.png'],
  sizes: [
    { size: '15"', price: '$6666.99+', selected: true },
    { size: '20"', price: '$4444.99' },
    { size: '30"', price: '$4444.99' },
    { size: '42"', price: '$4444.99' },
  ],
  colors: [
    '/images/laptop.png',
    '/images/laptop.png',
    '/images/laptop.png',
    '/images/laptop.png',
  ],
};

const Hero = () => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].size);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <Flex w={"100%"}>
      <Flex direction={{xs:"column",lg:"row"}} gap={24} >
        <Box  >
        <Text display={{xs:"block",md:"none"}} mb={20} fz={16} fw={700}>{product.name}</Text>

         <Flex gap={12} direction={"column"} align={"center"}>
         <Image w={{xs:300,md:"80%",lg:380}} src={selectedImage} alt={product.name} />
          <Flex className='hide-scrollbar' w={{xs:320,md:550,lg:350}} gap={12} style={{overflow:"scroll"}} mt="md" spacing="xs">
            {product.images.map((image, index) => (
              <Box key={index} onClick={() => setSelectedImage(image)} sx={{ cursor: 'pointer', border: selectedImage === image ? '2px solid black' : 'none' }}>
                <Image src={image} w={70} height={70} alt={`Product Image ${index + 1}`} />
              </Box>
            ))}
          </Flex>
         </Flex>
        </Box>
        <Box  >
          <Text display={{xs:"none",md:"block"}} fz={24} fw={600}>{product.name}</Text>
          <Flex gap={12} direction={{xs:"column",md:"row",lg:"column"}} align={{xs:"start",md:"center",lg:"start"}}>
          <Group mt="sm" align="center">
            <Badge color={product.inStock ? 'green' : 'red'}>
              {product.inStock ? (
                <Group spacing={1}>
                  <IconCheck size={16} />
                  In stock
                </Group>
              ) : (
                <Group spacing={1}>
                  <IconAlertCircle size={16} />
                  Out of stock
                </Group>
              )}
            </Badge>
            <Text fz={12}>Model: {product.model}</Text>
          </Group>
          <Flex gap={12} direction={{xs:"column",md:"row",lg:"column"}}>
          <Group mt="sm" align="center">
            <Rating value={product.rating} readOnly />
            <Text fz="sm" c="blue">({product.totalReviews} reviews)</Text>
          </Group>
         <Box>
         <Text fz="xl" weight={700} mt="sm">{product.priceRange}</Text>
          <Text fz="sm">
            in <Text component="span" c={"blue"} inherit>{product.stores} stores</Text>
          </Text>
         </Box>
          </Flex>
          </Flex>
          <Text fz="md" weight={700} mt="md">Screen Size:</Text>
          <Group spacing="xs" mt="xs">
            {product.sizes.map((size, index) => (
              <Button key={index} variant={selectedSize === size.size ? 'filled' : 'outline'} onClick={() => setSelectedSize(size.size)}>
                {size.size} {size.price}
              </Button>
            ))}
          </Group>
          <Text fz="md" fw={700} mt="md">Color:</Text>
          <Group spacing="xs" mt="xs">
            {product.colors.map((color, index) => (
              <Box style={{borderRadius:"100%",overflow:"hidden"}} key={index} onClick={() => setSelectedColor(color)} sx={{ cursor: 'pointer', border: selectedColor === color ? '2px solid black' : 'none' }}>
                <Image src={color} w={56} h={56} alt={`Color ${index + 1}`} />
              </Box>
            ))}
          </Group>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
