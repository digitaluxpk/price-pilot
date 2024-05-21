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
        <Box  span={6}>
        <Text display={{xs:"block",lg:"none"}} mb={20} fz={16} fw={700}>{product.name}</Text>

         <Flex gap={12} direction={"column"} align={"center"}>
         <Image w={{xs:300,lg:380}} src={selectedImage} alt={product.name} />
          <Flex className='hide-scrollbar' w={350} gap={12} style={{overflow:"scroll"}} mt="md" spacing="xs">
            {product.images.map((image, index) => (
              <Box key={index} onClick={() => setSelectedImage(image)} sx={{ cursor: 'pointer', border: selectedImage === image ? '2px solid black' : 'none' }}>
                <Image src={image} w={70} height={70} alt={`Product Image ${index + 1}`} />
              </Box>
            ))}
          </Flex>
         </Flex>
        </Box>
        <Box  span={6}>
          <Text display={{xs:"none",lg:"block"}} size="lg" weight={700}>{product.name}</Text>
          <Group mt="sm" align="center">
            <Badge color={product.inStock ? 'green' : 'red'}>
              {product.inStock ? (
                <Group spacing={5}>
                  <IconCheck size={16} />
                  In stock
                </Group>
              ) : (
                <Group spacing={5}>
                  <IconAlertCircle size={16} />
                  Out of stock
                </Group>
              )}
            </Badge>
            <Text size="sm">Model: {product.model}</Text>
          </Group>
          <Group mt="sm" align="center">
            <Rating value={product.rating} readOnly />
            <Text size="sm" color="blue">({product.totalReviews} reviews)</Text>
          </Group>
          <Text size="xl" weight={700} mt="sm">{product.priceRange}</Text>
          <Text size="sm">
            in <Text component="span" color="blue" inherit>{product.stores} stores</Text>
          </Text>
          <Text size="md" weight={700} mt="md">Screen Size:</Text>
          <Group spacing="xs" mt="xs">
            {product.sizes.map((size, index) => (
              <Button key={index} variant={selectedSize === size.size ? 'filled' : 'outline'} onClick={() => setSelectedSize(size.size)}>
                {size.size} {size.price}
              </Button>
            ))}
          </Group>
          <Text size="md" weight={700} mt="md">Color:</Text>
          <Group spacing="xs" mt="xs">
            {product.colors.map((color, index) => (
              <Box key={index} onClick={() => setSelectedColor(color)} sx={{ cursor: 'pointer', border: selectedColor === color ? '2px solid black' : 'none' }}>
                <Image src={color} width={70} height={70} alt={`Color ${index + 1}`} />
              </Box>
            ))}
          </Group>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
