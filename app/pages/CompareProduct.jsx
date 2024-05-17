"use client"
import { Box, Button, Flex, Text } from "@mantine/core";
import React, { useState } from "react";
import CustomerRatings from "../component/compareproducts/CustomerRatings";
import Specification from "../component/compareproducts/Specification";
import { IconChevronLeft, IconCopy, IconSquareX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import CompareProductCard from "../component/compareproducts/ProductCard";
import { compareProducts } from "@/Constants";
// 
const CompareProduct = () => {
    const router = useRouter();
    const [productList, setProductList] = useState(compareProducts);
    const handleRemoveAll = () =>{
        setProductList([]);
    }
  return (
    <Box >
        <Button mt={32} onClick={() => router.back()} variant="transparent" c={"#0034EC"} leftSection={
            <Box mr={8}><IconChevronLeft /></Box>
        }>
            Back to Products
        </Button>
      <Text fw={700} fz={24} my={36}>
        Compare Products
      </Text>
      <Flex w={"100%"} justify={"space-between"}>
      <Button mb={28} variant="transparent" c={"#0034EC"} leftSection={<IconCopy />}>
        Copy Link
      </Button>
      <Button onClick={() =>{handleRemoveAll()}}  mb={28} variant="transparent" c={"#EF4444"} leftSection={<IconSquareX />}>
      Remove all
      </Button>
      </Flex>

      <CompareProductCard productList={productList} setProductList={setProductList} />
      <Specification />
      <CustomerRatings />
    </Box>
  );
};

export default CompareProduct;
