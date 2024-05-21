"use client";

import { useState } from 'react';
import { Box, Button, Drawer, Text, Group, Image, Flex, Rating, Checkbox, TextInput } from '@mantine/core';
import { IconX, IconSearch } from '@tabler/icons-react';

const products = [
  {
    name: 'MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core',
    price: '$9999.99',
    image: '/images/category.png',
    description: '6 colours, 3 storage sizes',
    stars: 5,
    totalReviews: 1000,
    colors: ['#007bff', '#dc3545', '#6c757d', '#ffc107', '#fd7e14']
  },
  {
    name: 'MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core',
    price: '$9999.99',
    image: '/images/category.png',
    description: '6 colours, 3 storage sizes',
    stars: 5,
    totalReviews: 1000,
    colors: ['#007bff', '#dc3545', '#6c757d', '#ffc107', '#fd7e14']
  },
  {
    name: 'MacBook Air (2020) 13.3-inch - Apple M1 8-core and 7-core',
    price: '$9999.99',
    image: '/images/category.png',
    description: '6 colours, 3 storage sizes',
    stars: 5,
    totalReviews: 1000,
    colors: ['#007bff', '#dc3545', '#6c757d', '#ffc107', '#fd7e14']
  },
];


const CompareProductModal = ({opened,onClose}) => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [compareProducts, setCompareProducts] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  const addToCompare = (product) => {
    if (compareProducts.length < 4) {
      setCompareProducts([...compareProducts, product]);
    }
  };

  const removeFromCompare = (index) => {
    if (index === null) {
      setCompareProducts([]);
    } else {
      setCompareProducts(compareProducts.filter((_, i) => i !== index));
    }
  };

  

  return (
    <div>
      

      <Drawer
        opened={opened}
        onClose={onClose}
        title={`Compare Products (${compareProducts.length}/4)`}
        padding="xl"
        size="sm"
        right={ <Group position="right" mt="lg">
        <Button variant="subtle" onClick={() => removeFromCompare(null)}>Clear All</Button>
        <Button color="blue">Compare</Button>
      </Group>}
        position="bottom"
      >
        <Box>
        <Flex gap={12} w={"100%"} justify={"flex-end"} my={16} display={{xs:"none",md:"flex"}} position="right" mt="lg">
        <Button variant="transparent" style={{border:"1px solid #0034EC"}} c={"#0034EC"} onClick={() => removeFromCompare(null)}>Clear All</Button>
        <Button color="blue" >Compare</Button>
      </Flex>
          <Flex wrap="wrap" gap="md" align="center">
            {compareProducts.map((product, index) => (
              <Box
                key={index}
                sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: 'calc(25% - 10px)' }}
              >
                <Flex justify="space-between" align="center">
                  <Text>{product.name}</Text>
                  <Button variant="subtle" onClick={() => removeFromCompare(index)}>
                    <IconX size={16} />
                  </Button>
                </Flex>
                <Image src={product.image} height={80} alt={product.name} />
                <Text fw={700}>{product.price}</Text>
              </Box>
            ))}
            {Array.from({ length: 4 - compareProducts.length }).map((_, index) => (
              <Flex
              w={280}
              h={80}
              justify={"center"}
              align={"center"}
                key={index}
                style={{ border: '1px solid #000', borderRadius: '8px', padding: '10px', textAlign: 'center' }}
              >
                <Text>Add another product to compare</Text>
              </Flex>
            ))}
          </Flex>
          <Box mt={24} display={{xs:"block",md:"none"}}>

         <Button w={"100%"}>
           Compare
         </Button>
            <Button mt={16} w={"100%"} variant='transparent' style={{border:"1px solid #0034EC"}}>
              Clear all
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* <Box mt="md">
        <Flex wrap="wrap" gap={16}>
          {products.map((product, index) => (
            <Box key={index} w={{ xs: 164, md: 218 }}>
              <Box>
                <Image src={product.image} height={160} alt={product.name} />
              </Box>
              <Group position="left" spacing="xs" style={{ padding: '10px', paddingBottom: 20 }}>
                {product.colors.slice(0, 3).map((color, idx) => (
                  <Box
                    key={idx}
                    h={30}
                    w={29}
                    style={{
                      borderRadius: '50%',
                      backgroundColor: color,
                      border: '1px solid #ddd',
                    }}
                  ></Box>
                ))}
                {product.colors.length > 3 && (
                  <Popover
                    position="bottom"
                    withArrow
                    shadow="md"
                  >
                    <Popover.Target>
                      <Button variant="subtle" size="xs">+{product.colors.length - 3}</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <Group spacing="xs">
                        {product.colors.slice(3).map((color, idx) => (
                          <Box
                            key={idx}
                            h={30}
                            w={30}
                            style={{
                              borderRadius: '50%',
                              backgroundColor: color,
                              border: '1px solid #ddd',
                            }}
                          />
                        ))}
                      </Group>
                    </Popover.Dropdown>
                  </Popover>
                )}
              </Group>
              <Text fw={700} fz={14}>{product.name}</Text>
              <Flex gap={8} my={8} align="center">
                <Rating defaultValue={product.stars} />
                <Text c="#0034EC">({product.totalReviews})</Text>
              </Flex>
              <Text fw={500}>{product.price}</Text>
              <Text fz={12} mt={8}>
                Option: <span style={{ fontWeight: "700" }}> {product.description}</span>
              </Text>
              <Checkbox mt={16} label="Compare" onChange={() => addToCompare(product)} />
            </Box>
          ))}
        </Flex>
      </Box> */}
    </div>
  );
};

export default CompareProductModal;
