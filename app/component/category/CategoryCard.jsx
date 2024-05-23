import { categoryCard } from '@/Constants';
import { Box, Flex, Image, Text } from '@mantine/core'
import Link from 'next/link';
import React from 'react'

  
  
const CategoryCard = () => {
  return (
    <Flex display={{xs:"none",md:"flex"}} mt={32} wrap={"wrap"} gap={24}>
        {categoryCard.map(category => (
        <Box component={Link} href={"/category/subcategory"} 
        c={"#000"}
        style={{textDecoration:"none"}}
        key={category.id} className="category">
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