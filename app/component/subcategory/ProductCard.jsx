import { Image, Text, Badge, Button, Group, Box, useMantineTheme, Rating, Flex, Checkbox } from '@mantine/core';
import ColorOptions from './ColorOptions';
import { useDisclosure } from '@mantine/hooks';
import CompareProductModal from '../modal/CompareProductModal';
import Link from 'next/link';

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

export default function CategoryCard() {
  const [opened,handleModal] = useDisclosure()
  return (
    <Flex wrap={"wrap"} gap={{xs:16,lg:16}}>
      {products.map((product, index) => (
        <Box component={Link} href={"/category/subcategory/productdescription"}
        style={{ textDecoration:"none"}}
        c={"#000"}
        key={index} w={{xs:164,md:218}}  >
          <Box >
            <Image src={product.image} height={160} alt={product.name} />
          </Box>
          <Group display={{xs:"none",md:"block"}}  position="left" spacing="xs" style={{ padding: '10px', paddingBottom: 20 }}>
            {product.colors.map(color => (
              <Badge key={color} color={color} size="lg" />
            ))}
          </Group>
          <ColorOptions colors={product.colors} />
            <Text fw={{sm:700,lg:600}} fz={14}>{product.name}</Text>
          
          <Flex gap={8} my={8} align={"center"}>
          <Rating defaultValue={product.stars} />
          <Text c={"#0034EC"}>({product.totalReviews})</Text>
          </Flex>
          <Text fw={600}>
              {product.price}
            </Text>
            <Text fz={12} fw={500} mt={8}>
            Option: <span style={{fontWeight:"500"}}> {product.description}</span>
          </Text>

          <Checkbox onClick={handleModal.open} mt={16} label="Comapare" />
        </Box>
      ))}
      <CompareProductModal opened={opened} onClose={handleModal.close} />
    </Flex>
  );
}
