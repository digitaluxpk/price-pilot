import {
  Image,
  Text,
  Badge,
  Button,
  Group,
  Box,
  useMantineTheme,
  Rating,
  Flex,
  Checkbox,
  Card,
} from "@mantine/core";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";



export default function CompareProductCard({productList,setProductList}) {
  

  const handleRemove = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };
  return (
    <Flex  gap={16} wrap={"wrap"} style={{overflow:"scroll"}}>
    {productList&& productList.length > 0 ? productList.map((product) => (
        <Box w={{xs:140,lg:300}} key={product.id}>
          <Flex w={"100%"} justify={"flex-end"}>
            <Button variant="subtle" onClick={() => handleRemove(product.id)} >
            <IconX size={16} />
          </Button>
          </Flex>
      <Card  shadow="sm" padding="lg" radius="md" withBorder w={"100%"}>
        <Card.Section>
          <Image src={product.image} height={160} alt={product.name} />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={700} fz={14} >{product.name}</Text>
        </Group>

        <Group mt="md" mb="xs">
          {product.inStock && <Badge color="green">In stock</Badge>}
        </Group>

        <Group position="apart" mt="md" mb="xs">
          <Rating value={product.rating} readOnly />
          <Text size="sm" color="dimmed">({product.totalReviews} reviews)</Text>
        </Group>

        <Text weight={700} size="lg">
          {product.price}
        </Text>
        <Text size="sm">
          in <Text component="span" c={"#0034EC"} inherit>{product.stores} stores</Text>
        </Text>
        <Text size="sm" mt="md">
          Options: <Text component="span" weight={700}>{product.options}</Text>
        </Text>
      </Card>
      </Box>
    )):<Text>No product selected to compare</Text>
 }
  </Flex>
  );
}
