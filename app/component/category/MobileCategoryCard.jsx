import { Flex, Image, Text } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'


const categories = [
    {
      id: 1,
      title: "Smart Speakers & Displays",
      image:"/images/category.png"
    },
    {
        id: 2,
        title: "Smart Speakers & Displays",
        image:"/images/category.png"
      },
      {
        id: 3,
        title: "Smart Speakers & Displays",
        image:"/images/category.png"
      },
]
const MobileCategoryCard = () => {
  return (
    <Flex gap={12} mt={24} display={{xs:"flex",md:"none"}} direction={"column"}>
{
    categories.map((category) =>{
        return(
            <Flex component={Link} href={"/mobilesubcategory"} c={"#000"} w={"100%"} justify={"space-between"} align={"center"} gap={12}>
                <Image src={category.image} width={90} height={50} radius="md" alt="Category" />
                <Text fw={700} fz={14} >{category.title}</Text>
                <IconChevronRight color='#0034EC' stroke={1.5} />
            </Flex>
        )
    })
}
    </Flex>
  )
}

export default MobileCategoryCard