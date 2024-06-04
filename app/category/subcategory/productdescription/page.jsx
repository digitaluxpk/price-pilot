import ProductDescription from "@/app/pages/ProductDescription";
import { Box } from "@mantine/core";
import React from "react";
import BreadCrumb from "@/app/component/BreadCrumbs";
const page = () => {
  return (
    <>
      <BreadCrumb />
      <Box mx={{ xs: 10, lg: 40 }} mt={50}>
        <ProductDescription />
      </Box>
    </>
  );
};

export default page;
