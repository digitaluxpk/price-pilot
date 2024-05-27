import { searchOptions, weOffer } from "@/Constants";
import { Box, Button, Flex, Image, Text, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";




const LandingPage = () => {
  return (
    <Flex
      mt={42}
      mx={12}
      c={"#000"}
      justify={"center"}
      align={"center"}
      direction={"column"}
    >
      <Box>
        <Image src="/images/hero.png" w={320} h={54} />
      </Box>
      <Text c={"#303030"} fz={{sm:16,lg:20}} fw={{sm:500,lg:400} } mx={12} mt={20} ta={"center"}>
      Find the best prices on Smart Home products online with PricePilot
      </Text>
      <Flex ml={{md:32}} h={48} w={{xs:300,lg:702}}>
        <TextInput
         w={{xs:362,lg:702}}
          h={"100%"}
          p={12}
          placeholder="Start searching for a product"
          radius={40}
          rightSection={
            <Box bg={"#0034EC"} px={8} pb={4} pt={8} style={{borderRadius:"100%"}} >
                <IconSearch size={18} color="#fff" />
            </Box>
          }
          rightSectionWidth={42}
        />
      </Flex>
      <Flex align={"center"} w={{sm:"100%",lg:790}} wrap={"wrap"} justify={"center"} gap={12} mt={32}>
        {searchOptions.map((item) => {
          return (
            <Flex
              key={item.id}
              p={12}
              direction={"column"}
              justify={"center"}
              align={"center"}
              w={160}
              component={Link}
              href={"/category"}
              style={{textDecoration:"none"}}
            >
              <Image src={item.img} alt="sadf" w={32} h={32} />
              <Text ta={"center"} c={"#000"}  fw={500}>{item.name}</Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex mt={121} gap={54} wrap={"wrap"} justify={"center"}>
        {weOffer.map((items) => {
          return (
            <Flex key={items.id} gap={16} component={Link} href={"/category"} 
            style={{textDecoration:"none"}} c={"#000"}
            >
              <Image src={items.logo} alt="sadf" w={32} h={32} />
              <Box>{items.title}</Box>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default LandingPage;
