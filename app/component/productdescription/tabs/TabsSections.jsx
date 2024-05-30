"use client"
import { Box,Flex,Tabs, Text, rem } from '@mantine/core'
import React, { useEffect, useRef, useState } from 'react'
import Prices from './Prices'
import Reviews from './Reviews'
import Overview from './Overview'
import Specifications from './Specifications'
import Link from 'next/link'

const TabsSections = () => {
  const tabSectionRef = useRef(null)
  const [stickyTab, setStickyTab] = useState(false);
  const handleScroll = () => {
    if (tabSectionRef.current) {  // Check if ref is attached
      const offsetTop = tabSectionRef.current.getBoundingClientRect().top;
      console.log("🚀 ~ handleScroll ~ offsetTop:", offsetTop)
      if (window.scrollY >= offsetTop) {
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
    console.log("🚀 ~ handleTabClick ~ section:", section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Box h={stickyTab ? 0:45} ref={tabSectionRef} mt={72}
    
    style={{
      zIndex:"100000",
      overflowX:"scroll",
      overflowY:"hidden",
    }}
    
    className='mob-scroll'
    >
         <Tabs h={{xs:"100%",lg:stickyTab ? 0:60}}
         
         display={{xs:"block",lg:"none"}}
         className='mob-scroll'
         style={{
      overflowX:"scroll",
      overflowY:"hidden"
    }} defaultValue="prices" w={{xs:500,lg:"100%"}}>
      <Box 
      
    className='mob-scroll'>
      
      <Tabs.List
      pos={stickyTab ? "fixed" : "static"}
      // top={{xs:28}}
      top={65}
      // bottom={1000}
      py={10}
      bg={"#fff"}
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
      
  
    </Tabs>
    <Tabs h={{xs:"100%",lg:stickyTab ? 0:60}}
         
         display={{xs:"none",lg:"block"}}
         className='mob-scroll'
         style={{
      overflowX:"scroll",
      overflowY:"hidden"
    }} defaultValue="prices" w={{xs:500,lg:"100%"}}>
      <Box       
    className='mob-scroll'>
      <Tabs.List
      pos={stickyTab ? "fixed" : "static"}
      top={0}
      py={10}
      bg={"#fff"}
      w={"100%"}
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
        <Text 
                 onClick={() => handleTabClick('overview')}
        component={Link} href={"#overview"} fz={14}>
        Product Overview
        </Text>
        </Tabs.Tab>
        <Tabs.Tab value="specifications" >
        <Text          onClick={() => handleTabClick('spec')}
 component={Link} href={"#spec"} fz={14}>
        Specifications
        </Text>
        </Tabs.Tab>
        </Flex>
      </Tabs.List>
      </Box>
      
  
    </Tabs>
    </Box>
  )
}

export default TabsSections