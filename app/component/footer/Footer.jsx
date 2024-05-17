"use client";

import { Container, Text, Group, Anchor, Divider, Image, Box, Flex } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
  return (
      <Box mx={{xs:10,md:40}} py={{xs:40,md:80}}>
        <Divider size="xs" my={24} />
      <Image src="/images/footer-logo.png" alt="PricePilot" h={51} w={{xs:350,md:390}} />
        <Flex direction={{xs:"column",md:"row"}} gap={{xs:24,lg:80}}>
          <Box w={390}>
              
            <Text  mt={24}>
              PricePilot helps you discover the best products, compare them, and then find the best deals.
            </Text>
            <Text  mt="xs">
              We are entirely independent and free to use and are constantly growing the assortment of products.
            </Text>
          </Box>
          <Flex gap={24}>
          <Box >
            <Text  weight={700} mb="xs">
              Categories
            </Text>
            <Text>Cat 1</Text>
            <Text>Cat 1</Text>
            <Text>Cat 1</Text>
            <Text>Cat 1</Text>
          </Box>
          <Box ml={54}>
            <Text size="sm" weight={700} mb="xs">
              Company
            </Text>
            <Text>Blog</Text>
            <Text >About Us</Text>
          </Box>
          </Flex>
        </Flex>
        
        <Flex  direction={"column"} >
          <Text >
            &copy; 2024 PricePilot
          </Text>
          <Group mt={12}>
            <Text c={"#000"} fz={14}  >Privacy Policy</Text>
            <Text c={"#000"} fz={14}  >Terms & Conditions</Text>
          </Group>
        </Flex>
        </Box>
  );
};

export default Footer;
