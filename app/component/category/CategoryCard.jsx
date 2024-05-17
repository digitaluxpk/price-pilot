import { Box, Flex, Image, Text } from '@mantine/core'
import React from 'react'
const categories = [
    {
      id: 1,
      title: "Smart Speakers & Displays",
      items: [
        { id: "smart-speakers", name: "Smart Speakers" },
        { id: "smart-displays", name: "Smart Displays" },
        { id: "smart-speaker-accessories", name: "Smart Speaker & Display Accessories" }
      ]
    },
    {
      id: 2,
      title: "Smart Lighting",
      items: [
        { id: "smart-light-bulbs", name: "Smart Light Bulbs" },
        { id: "led-light-strips", name: "LED Light Strips" },
        { id: "smart-light-panels", name: "Smart Light Panels" },
        { id: "smart-light-bars", name: "Smart Light Bars" },
        { id: "smart-lighting-kits", name: "Smart Lighting Kits" },
        { id: "smart-light-switches-dimmers", name: "Smart Light Switches & Dimmers" },
        { id: "accent-lighting", name: "Accent Lighting" }
      ]
    },
    {
      id: 3,
      title: "Smart Plugs & Outlets",
      items: [
        { id: "smart-plugs", name: "Smart Plugs" },
        { id: "smart-power-strips", name: "Smart Power Strips" },
        { id: "smart-usb-outlets", name: "Smart & USB Outlets" },
        { id: "smart-light-switches-dimmers-plugs", name: "Smart Light Switches & Dimmers" }
      ]
    }
  ];
  
  
const CategoryCard = () => {
  return (
    <Flex display={{xs:"none",md:"flex"}} mt={32} wrap={"wrap"} gap={24}>
        {categories.map(category => (
        <Box key={category.id} className="category">
            <Image src={"/images/category.png"} />
          <Text my={18} fz={18} fw={700}>{category.title}</Text>
          <Flex direction={"column"} gap={18}>
            {category.items.map(item => (
              <Text key={item.id}>{item.name}</Text>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}

export default CategoryCard;