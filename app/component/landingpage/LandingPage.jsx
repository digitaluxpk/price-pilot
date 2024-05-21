import { searchOptions, weOffer } from "@/Constants";
import { Box, Button, Flex, Image, Text, TextInput } from "@mantine/core";
import { IconEyeSearch, IconSearch } from "@tabler/icons-react";
import React from "react";




const LandingPage = () => {
  return (
    <Flex
      mt={42}
      c={"#000"}
      justify={"center"}
      align={"center"}
      direction={"column"}
    >
      <Box>
        <Image src="/images/hero.png" w={320} h={54} />
      </Box>
      <Text c={"#303030"} fz={{sm:14,lg:20}} fw={500} mt={20} ta={"center"}>
        Find the best prices on Smart Home products <br />
        online with PricePilot
      </Text>
      <Flex ml={{md:32}} h={48} w={{sm:382,lg:702}}>
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
      <Flex w={{sm:"100%",lg:790}} wrap={"wrap"} justify={"center"} gap={12} mt={32}>
        {searchOptions.map((item) => {
          return (
            <Flex
              key={item.id}
              p={12}
              direction={"column"}
              justify={"center"}
              align={"center"}
            >
              <Image src={item.img} alt="sadf" w={24} h={24} />
              <Text fw={500}>{item.name}</Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex mt={121} gap={54} wrap={"wrap"} justify={"center"}>
        {weOffer.map((items) => {
          return (
            <Flex key={items.id} gap={16}>
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
