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
    <Flex wrap="wrap" gap={16}>
    {productList.map((product) => (
        <Box>
          <Flex w={"100%"} justify={"flex-end"}>
            <Button variant="subtle" onClick={() => handleRemove(product.id)} >
            <IconX size={16} />
          </Button>
          </Flex>
      <Card key={product.id} shadow="sm" padding="lg" radius="md" withBorder style={{ width: '300px' }}>
        <Card.Section>
          <Image src={product.image} height={160} alt={product.name} />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{product.name}</Text>
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
          in <Text component="span" color="blue" inherit>{product.stores} stores</Text>
        </Text>
        <Text size="sm" mt="md">
          Options: <Text component="span" weight={700}>{product.options}</Text>
        </Text>
      </Card>
      </Box>
    ))}
  </Flex>
  );
}
