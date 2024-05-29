import { Flex, Text } from "@mantine/core";
import { IconArrowLeftFromArc, IconArrowRight } from "@tabler/icons-react";
import React from "react";
import Breadcrumb from "../component/BreadCrumbs";
import MobileCategoryCard from "../component/category/MobileCategoryCard";
import CategoryCard from "../component/category/CategoryCard";
const Category = () => {
  return (
    <Flex direction={"column"} >
    
      <Breadcrumb />
        <Text mt={34} fz={24} fw={600}>
          Smart Home
        </Text>
      <Flex gap={32}>
      <CategoryCard />
      <MobileCategoryCard />
      <Flex display={{xs:"none",}} w={256} h={"300px"} align={"center"} justify={"center"} bg={"#D9D9D9"}>
        <Text fw={700}>
          Ads
        </Text>
      </Flex>
      </Flex>
    </Flex>
  );
};

export default Category;
