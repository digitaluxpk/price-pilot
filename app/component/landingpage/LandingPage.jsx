"use client"
import { searchOptions, weOffer, weOfferMobile } from "@/Constants";
import { Box, Button, Flex, Image, Text, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";




const LandingPage = () => {
  const isBigResolution = useMediaQuery("(max-height: 900px) ")
  return (
    <Flex
      // mt={42}
      mx={12}
      c={"#000"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      h={isBigResolution == false && "85vh"}
      
    >
      {/* for mobiles */}
      <Flex className="mob-scroll"  w={375} px={14} mb={48}  display={{xs:"flex",lg:"none"}} style={{overflow:"scroll"}} gap={14} >
        {weOffer.map((items) => {
          return (
            <Flex key={items.id} gap={16} component={Link} href={"/category"} 
            style={{textDecoration:"none"}} c={"#000"}
            >
              <Image src={items.logo} alt="weoffer" w={32} h={32} />
              <Box>{items.title}</Box>
            </Flex>
          );
        })}
      </Flex>
      <Box>
        {/* <Image src="/images/hero.png" w={{xs:214,lg:320}} h={{xs:30,lg:54}} /> */}
        <Image src="/images/hero.png" w={{xs:214,lg:415}} h={{xs:30,lg:70}} />

      </Box>
      <Text c={"#303030"} fz={{xs:16,lg:20}} fw={{sm:500,lg:400} } mx={12} mt={22} ta={"center"}>
      Find the best prices on Smart Home products online with PricePilot
      </Text>
      <Flex ml={{md:32}}  w={{xs:340,lg:702}}>
        <TextInput
          mt={16}
          size="lg"
          radius={40}
          w={{xs:340,lg:702}}
          placeholder="Start searching for a product"
          style={{
            outline:"none",
            border:"none"
          }}
          rightSection={
            
            <Box bg={"#0034EC"} w={35} h={35} px={8} pt={8}  style={{borderRadius:"100%"}} >

                <IconSearch size={18} color="#fff" />
            </Box>
          }
        />
          {/* <TextInput h={"150%"} /> */}
      </Flex>
      <Flex align={"center"} w={{xs:"100%",lg:790}} wrap={"wrap"} justify={"center"} gap={12} mt={32}>
        {searchOptions.map((item) => {
          return (
            <Flex
              key={item.id}
              p={{xs:8,lg:12}}
              direction={"column"}
              justify={"center"}
              align={"center"}
              gap={8}
              w={{sm:140,lg:180}}
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
      <Flex display={{xs:"none",lg:"flex"}} mt={121} gap={54} wrap={"wrap"} justify={"center"}>
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
