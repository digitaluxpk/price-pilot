import { Flex, Text } from "@mantine/core";
import { IconArrowLeftFromArc, IconArrowRight } from "@tabler/icons-react";
import CategoryCard from "../category/CategoryCard";
import React from "react";
import BreadCrumb from "../BreadCrumbs"
import MobileCategoryCard from "./MobileCategoryCard";
const Main = () => {
  return (
    <Flex direction={"column"}>
    
      <BreadCrumb />
        <Text mt={34} fz={24} fw={700}>
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

export default Main;
