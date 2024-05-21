"use client"
import { Box,Tabs, rem } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Prices from './Prices'
import Reviews from './Reviews'
import Overview from './Overview'
import Specifications from './Specifications'

const TabsSections = () => {
  const [stickyTab, setStickyTab] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
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
  return (
    <Box mt={44}
    
    >
         <Tabs defaultValue="prices">
      <Tabs.List
      pos={{xs:stickyTab ? "fixed" : "static",lg:"static"}}
      top={68}
      py={10}
      bg={"#fff"}
      >
        <Tabs.Tab value="prices" >
        Prices
        </Tabs.Tab>
        <Tabs.Tab value="reviews" >
        Reviews
        </Tabs.Tab>
        <Tabs.Tab value="overview">
        Product Overview
        </Tabs.Tab>
        <Tabs.Tab value="specifications" >
        Specifications
        </Tabs.Tab>
        
      </Tabs.List>

      <Tabs.Panel className='hide-scrollbar' w={"100%"} style={{overflow:"scroll"}} value="prices">
        <Prices />
      </Tabs.Panel>

      <Tabs.Panel value="reviews">
        <Reviews />
      </Tabs.Panel>

      <Tabs.Panel value="overview">
        <Overview />
      </Tabs.Panel>
      <Tabs.Panel value="specifications">
        <Specifications />
      </Tabs.Panel>
    </Tabs>
    </Box>
  )
}

export default TabsSections