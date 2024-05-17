"use client"
import { Box, Button, Text } from "@mantine/core";
import React, { useState } from "react";
import CustomerRatings from "../component/compareproducts/CustomerRatings";
import Specification from "../component/compareproducts/Specification";
import { IconChevronLeft, IconCopy } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import CompareProductCard from "../component/compareproducts/ProductCard";
import { compareProducts } from "@/Constants";
// 
const CompareProduct = () => {
    const router = useRouter();
    const [productList, setProductList] = useState(compareProducts);
  return (
    <Box>
        <Button mt={32} onClick={() => router.back()} variant="transparent" c={"#0034EC"} leftSection={
            <Box mr={8}><IconChevronLeft /></Box>
        }>
            Back to Products
        </Button>
      <Text fw={700} fz={24} my={36}>
        Compare Products
      </Text>
      <Button mb={28} variant="transparent" c={"#0034EC"} leftSection={<IconCopy />}>
        Copy Link
      </Button>

      <CompareProductCard productList={productList} setProductList={productList} />
      <Specification />
      <CustomerRatings />
    </Box>
  );
};

export default CompareProduct;
