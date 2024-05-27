import { Box, Flex, Image, Text } from '@mantine/core';
import React from 'react'
import Breadcrumb from '../component/BreadCrumbs';
import Link from 'next/link';
import { mobileSubCategoryList } from '@/Constants';

const MobileSubcategory = () => {

  return (
    <Flex px={12} c={"#000"} direction={"column"}  mt={32} wrap={"wrap"} gap={24}>
       <Breadcrumb />
        <Box component={Link} href={"/category/subcategory/productdescription"} c={"#000"} style={{textDecoration:"none"}}  className="category">
          <Text my={24} fz={24} fw={600}>Smart Speakers & Displays</Text>
            <Image src={"/images/category.png"} />
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