"use client";
import { Box, Flex, Tabs, TabsPanel, Text, rem } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

const TabsSections = () => {
  const tabSectionRef = useRef(null);
  const [stickyTab, setStickyTab] = useState(false);
  const [stickyTabMob, setStickyTabMob] = useState(false);
  console.log("🚀 ~ TabsSections ~ stickyTabMob:", stickyTabMob)
 
  const handleScroll = () => {
      const offsetTop = tabSectionRef.current.getBoundingClientRect().top;

        if (window.scrollY >= 700) {
          setStickyTab(true);
        } else {
          setStickyTab(false);
        }
      
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollMob = () => {

        if (window.scrollY >= 700) {
          setStickyTabMob(true);
        } else {
          setStickyTabMob(false);
        }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScrollMob);

    return () => {
      window.removeEventListener("scroll", handleScrollMob);
    };
  }, []);
  const handleTabClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    // <></>
    <Box
      maw={1280}
      h={stickyTab ? 0 : 45}
      ref={tabSectionRef}
      mt={72}
      style={{
        zIndex: "100000",
        overflowX: "scroll",
        overflowY: "hidden",
      }}
      className="mob-scroll"
    >
    { stickyTab == false && <Tabs display={{xs:"none",lg:"block"}} defaultValue="prices">
      <Tabs.List
      bg={"#fff"}
      w={500}
      style={{
        overflowX:"scroll",
  
        overflowY:"hidden"
      }} 
      >
        <Tabs.Tab   value="prices" >
          <Text 
           onClick={() => handleTabClick('prices')}
          component={Link} href={"#price"} fz={14}>
            Prices
        </Text>
        </Tabs.Tab>
        <Tabs.Tab value="reviews" >
        <Text 
         onClick={() => handleTabClick('review')}
        component={Link} href={"#review"} fz={14}>
        Reviews
        </Text>
        </Tabs.Tab>
        <Tabs.Tab value="overview">
        <Text fz={14}>
        Product Overview
        </Text>
        </Tabs.Tab>
        <Tabs.Tab value="specifications" >
        <Text fz={14}>
        Specifications
        </Text>
        </Tabs.Tab>
      </Tabs.List>
      </Tabs>}
      {/* { stickyTabMob === false && 
      } */}
      { stickyTabMob ? 
      <Tabs h={{xs:"100%",lg:stickyTabMob ? 0:60}}
         display={{xs:"block",lg:"none"}}
         className='mob-scroll'
         style={{
          zIndex:"1000000",
         overflowX:"scroll",
         overflowY:"hidden"
    }} defaultValue="prices" w={{xs:500,lg:"20%"}}>
      <Box 
       maw={1280}
      className='mob-scroll'>
      <Tabs.List
      pos={stickyTabMob ? "fixed" : "static"}
      bg={"#fff"}
      top={65}
      maw={1280}
      py={10}
      w={350}
      h={60}
      className='mob-scroll'
      style={{
        overflowX:"scroll",
        zIndex:"2000000",
        boxShadow: "0px 2px 5px 0px rgba(29, 29, 29, 0.05)"
      }}
      >
        <Flex w={500} >
        <Tabs.Tab  value="prices" >
          <Text 
           onClick={() => handleTabClick('prices')}
          component={Link} href={"#price"} fz={14}>
            Prices
        </Text>
        </Tabs.Tab>
        <Tabs.Tab value="reviews" >
        <Text 
         onClick={() => handleTabClick('review')}
        component={Link} href={"#review"} fz={14}>
        Reviews
        </Text>
        </Tabs.Tab>
        <Tabs.Tab value="overview">
        <Text fz={14}>
        Product Overview
        </Text>
        </Tabs.Tab>
        <Tabs.Tab value="specifications" >
        <Text fz={14}>
        Specifications
        </Text>
        </Tabs.Tab>
        </Flex>
      </Tabs.List>
      </Box>
      
  
    </Tabs>:
    <Tabs display={{xs:"block",lg:"none"}} defaultValue="prices">
    <Tabs.List
    bg={"#fff"}
    w={500}
    style={{
      overflowX:"scroll",
      overflowY:"hidden"
    }} 
    >
      <Tabs.Tab   value="prices" >
        <Text 
         onClick={() => handleTabClick('prices')}
        component={Link} href={"#price"} fz={14}>
          Prices
      </Text>
      </Tabs.Tab>
      <Tabs.Tab value="reviews" >
      <Text 
       onClick={() => handleTabClick('review')}
      component={Link} href={"#review"} fz={14}>
      Reviews
      </Text>
      </Tabs.Tab>
      <Tabs.Tab value="overview">
      <Text fz={14}>
      Product Overview
      </Text>
      </Tabs.Tab>
      <Tabs.Tab value="specifications" >
      <Text fz={14}>
      Specifications
      </Text>
      </Tabs.Tab>
    </Tabs.List>
    </Tabs>
    }
      {stickyTab && <Tabs
      
      p={0}
      m={0}
        h={{ xs: "100%", lg: stickyTab ? 0 : 160 }}
        bg={"red"}
        display={{ xs: "none", lg: "block" }}
        className="mob-scroll"
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
        }}
        defaultValue="prices"
        w={{ xs: 500, lg: "100%" }}
      >
        <Box className="mob-scroll">
          <Tabs.List
            pos={stickyTab ? "fixed" : "static"}
            top={0}
            py={10}
            bg={"#fff"}
            w={"100%"}
            maw={1360}
            h={60}
            className="mob-scroll"
            style={{
              overflowX: "scroll",
              zIndex: "2000000",
              boxShadow: "0px 2px 5px 0px rgba(29, 29, 29, 0.05)",
            }}
          >
            <Flex w={500}>
              <Tabs.Tab value="prices">
                <Text
                  onClick={() => handleTabClick("prices")}
                  component={Link}
                  href={"#price"}
                  fz={14}
                >
                  Prices
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="reviews">
                <Text
                  onClick={() => handleTabClick("review")}
                  component={Link}
                  href={"#review"}
                  fz={14}
                >
                  Reviews
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="overview">
                <Text
                  onClick={() => handleTabClick("overview")}
                  component={Link}
                  href={"#overview"}
                  fz={14}
                >
                  Product Overview
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="specifications">
                <Text
                  onClick={() => handleTabClick("spec")}
                  component={Link}
                  href={"#spec"}
                  fz={14}
                >
                  Specifications
                </Text>
              </Tabs.Tab>
            </Flex>
          </Tabs.List>
        </Box>
        <TabsPanel value="price">
          wertsdgfdsg
        </TabsPanel>
      </Tabs> }
    </Box>

  );
};

export default TabsSections;
