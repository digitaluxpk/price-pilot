import { Box, Flex, Image, Text } from '@mantine/core';
import React from 'react'
import Breadcrumb from '../component/BreadCrumbs';

const MobileSubcategory = () => {
   const items = [
        { id: "smart-plugs", name: "Smart Plugs" },
        { id: "smart-power-strips", name: "Smart Power Strips" },
        { id: "smart-usb-outlets", name: "Smart & USB Outlets" },
        { id: "smart-light-switches-dimmers-plugs", name: "Smart Light Switches & Dimmers" }
      ]
  return (
    <Flex px={12} c={"#000"} direction={"column"}  mt={32} wrap={"wrap"} gap={24}>
       <Breadcrumb />
        <Box   className="category">
          <Text my={24} fz={24} fw={700}>Smart Speakers & Displays</Text>
            <Image src={"/images/category.png"} />
          <Flex direction={"column"} mt={12} gap={12}>
            {items.map(item => (
              <Text key={item.id}>{item.name}</Text>
            ))}
          </Flex>
        </Box>
    
    </Flex>
  )
}

export default MobileSubcategory;