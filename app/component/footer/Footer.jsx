"use client";

import { Text, Group, Divider, Image, Box, Flex } from "@mantine/core";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex w={"100%"}  direction={"column"} px={{ xs: 16, md: 40 }} py={{ xs: 40, md: 80 }}  style={{overflow:"hidden"}}>
      <Divider size="xs" my={24} />
      <Box w={"100%"} component={Link} href={"/"} >
        <Image
          src="/images/footer-logo.png"
          alt="PricePilot"
          h={{xs:30,lg:51}}
          w={{ xs: 214, md: 300 }}
        />
      </Box>
      <Flex  direction={{ xs: "column", md: "row" }} gap={{ xs: 24, lg: 110 }}>
        <Box w={{xs:300,md:390}}>
          <Text mt={24} fz={14}>
            PricePilot helps you discover the best products, compare them, and
            then find the best deals.
          </Text>
          <Text mt="xs" fz={14}>
            We are entirely independent and free to use and are constantly
            growing the assortment of products.
          </Text>
          <Flex display={{xs:"none",lg:"flex"}}  mt={12}  fz={12} align={"center"}  gap={16} >
        <Text c={"#212427"}>&copy; 2024 PricePilot</Text>
        <Group>
          <Text c={"#0034EC"} fz={14}>
            Privacy Policy
          </Text>
          <Text c={"#0034EC"} fz={14}>
            Terms & Conditions
          </Text>
        </Group>
      </Flex>
        </Box>
        <Flex gap={{xs:24,lg:110}}>
          <Box>
            <Text fw={600} mb="xs">
            Shop for
            </Text>
            <Flex direction={"column"} gap={14}>
            <Text component={Link}
              href={"/category"} fz={14}>Smart Speakers & Displays</Text>
            <Text component={Link}
              href={"/category"} fz={14}>Smart Lighting</Text>
            <Text component={Link}
              href={"/category"} fz={14}>Smart Plugs & Outlets</Text>
            <Text component={Link}
              href={"/category"} fz={14}>Smart & Wi-fi Thermostats</Text>
            <Text component={Link}
              href={"/category"} fz={14}>Smart Doorbells</Text>
            <Text component={Link}
              href={"/category"} fz={14}>Smart Doorlocks</Text>
            <Text component={Link}
              href={"/category"} fz={14}>Routers</Text>
              </Flex>
          </Box>
          <Box ml={54}>
            <Text  fw={600} mb="xs">
              Company
            </Text>
            <Text fz={14}>Blog</Text>
            <Text fz={14} mt={14}>About Us</Text>
          </Box>
        </Flex>
      </Flex>

      <Flex display={{xs:"flex",lg:"none"}}  mt={12}  fz={12} align={"center"}  gap={16} >
        <Text c={"#212427"}>&copy; 2024 PricePilot</Text>
        <Group>
          <Text c={"#0034EC"} fz={14}>
            Privacy Policy
          </Text>
          <Text c={"#0034EC"} fz={14}>
            Terms & Conditions
          </Text>
        </Group>
      </Flex>
    </Flex>
  );
};

export default Footer;
