"use client"
import { Box,Tabs, rem } from '@mantine/core'
import React from 'react'
import Prices from './Prices'
import Reviews from './Reviews'
import Overview from './Overview'
import Specifications from './Specifications'

const TabsSections = () => {
  return (
    <Box mt={44}>
         <Tabs defaultValue="prices">
      <Tabs.List>
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

      <Tabs.Panel value="prices">
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