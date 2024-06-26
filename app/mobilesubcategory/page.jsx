import { Box, Flex, Image, Text } from '@mantine/core';
import React from 'react'
import Breadcrumb from '../component/BreadCrumbs';
import Link from 'next/link';
import { mobileSubCategoryList } from '@/Constants';

const MobileSubcategory = () => {

  return (
    <Flex px={12} c={"#000"} direction={"column"}  mt={8} wrap={"wrap"} gap={24}>
       <Breadcrumb />
        <Box component={Link} href={"/category/subcategory"} c={"#000"} style={{textDecoration:"none"}}  className="category">
          <Text mt={14} mb={17} fz={24} fw={600}>Smart Speakers & Displays</Text>
            <Image src={"/images/category.png"} alt="category" />
          <Flex direction={"column"} mt={12} gap={12}>
            {mobileSubCategoryList.map(item => (
              <Text key={item.id}>{item.name}</Text>
            ))}
          </Flex>
        </Box>
    
    </Flex>
  )
}

export default MobileSubcategory;