"use client";
import { Box, Flex, Tabs, Text } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import Prices from "./Prices";
import Reviews from "./Reviews";
import Overview from "./Overview";
import Specifications from "./Specifications";

const TabsSections = () => {
  const tabSectionRef = useRef(null);
  const [stickyTab, setStickyTab] = useState(false);
  const [stickyTabMob, setStickyTabMob] = useState(false);
  // console.log("🚀 ~ TabsSections ~ stickyTabMob:", stickyTabMob);

  const headerHeight = 75; // Adjust this to match your header height



  const handleScroll = () => {
    const isMobile = window.innerWidth <= 768;

   
    if (isMobile) {
    
      if (window.scrollY >= 870) {
        setStickyTabMob(true);
      } else {
        setStickyTabMob(false);
      }
    } else {
      if (window.scrollY >= 710) {
        setStickyTab(true);
      } else {
        setStickyTab(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - headerHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <Box
      h={stickyTab ? 0 : 45}
      ref={tabSectionRef}
      mt={72}
      style={{
        zIndex: "100000",
        overflowX: "scroll",
        overflowY: "hidden",
        transition: "height 0.3s ease",
      }}
      className="mob-scroll"
    >
      <Tabs
        h={{ xs: "100%", lg: stickyTab ? 0 : 60 }}
        display={{ xs: "block", lg: "none" }}
        className="mob-scroll" variant="pills" radius="xs"
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
          border:'none',
          outline:'none'
        }}
        defaultValue="prices"
        w={{ xs: 500, lg: "100%" }}
      >
        <Box className="mob-scroll">
          <Tabs.List
            // pos={stickyTab ? "fixed" : "static"}
            pos={stickyTabMob ? "fixed" : "static"}
            // top={stickyTabMob ? 0 : undefined}
            top={53}
            py={10}
            bg={"#fff"}
            w={{xs:"100vw",lg:350}}
            h={55}
            className="mob-scroll"
            style={{
              overflowX: "scroll",
              zIndex: "2000000",
              boxShadow: "0px 2px 5px 0px rgba(29, 29, 29, 0.05)",
              transition: "top 0.3s ease, height 0.3s ease",
              left: '8px', // Ensures the tabs list stays aligned to the left
              right: 0,
              
            }}
          >
            <Flex w={500}>
              <Tabs.Tab value="prices">
                <Text onClick={() => handleTabClick("prices")} fz={14}>
                  Prices
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="reviews">
                <Text onClick={() => handleTabClick("reviews")} fz={14}>
                  Reviews
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="overview">
                <Text onClick={() => handleTabClick("overview")} fz={14}>
                  Product Overview
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="specifications">
                <Text onClick={() => handleTabClick("specifications")} fz={14}>
                  Specifications
                </Text>
              </Tabs.Tab>
            </Flex>
          </Tabs.List>
        </Box>
      </Tabs>

      <Tabs color="blue" 
        h={{ xs: "100%", lg: stickyTab ? 0 : 60 }}
        display={{ xs: "none", lg: "block" }}
        className="mob-scroll" variant="pills" radius="xs"
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
            h={stickyTab?64:46}
            className="mob-scroll"
            borderBottom={stickyTab?0:"2.7px solid #CFCFCF !important"}
            style={{
              overflowX: "scroll",
              zIndex: "2000000",
              boxShadow: "0px 2px 5px 0px rgba(29, 29, 29, 0.05)",
              transition: "top 0.3s ease, height 0.3s ease",
    borderBottom: "2.7px solid #CFCFCF !important"
            }}
          >
            <Flex w={500}>
              <Tabs.Tab value="prices">
                <Text onClick={() => handleTabClick("prices")} fz={14}>
                  Prices
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="reviews">
                <Text onClick={() => handleTabClick("reviews")} fz={14}>
                  Reviews
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="overview">
                <Text onClick={() => handleTabClick("overview")} fz={14}>
                  Product Overview
                </Text>
              </Tabs.Tab>
              <Tabs.Tab value="specifications">
                <Text onClick={() => handleTabClick("specifications")} fz={14}>
                  Specifications
                </Text>
              </Tabs.Tab>
            </Flex>
          </Tabs.List>
        </Box>
      </Tabs>

      <div id="prices" style={{ scrollMarginTop: `${headerHeight}px` }}>
        <Prices />
      </div>
      <div id="reviews" style={{ scrollMarginTop: `${headerHeight}px` }}>
        <Reviews />
      </div>
      <div id="overview" style={{ scrollMarginTop: `${headerHeight}px` }}>
        <Overview />
      </div>
      <div id="specifications" style={{ scrollMarginTop: `${headerHeight}px` }}>
        <Specifications />
      </div>
    </Box>
  );
};

export default TabsSections;

