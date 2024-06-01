import { Box } from '@mantine/core'
import React from 'react'
import Hero from '../component/productdescription/Hero'
import TabsSections from '../component/productdescription/tabs/TabsSections'
import MostRelated from '../component/productdescription/MostRelated'
import CustomerViewed from '../component/productdescription/CustomerViewed'
import Reviews from '../component/productdescription/tabs/Reviews'
import Prices from '../component/productdescription/tabs/Prices'
import Overview from '../component/productdescription/tabs/Overview'
import Specifications from '../component/productdescription/tabs/Specifications'

const ProductDescription = () => {
  return (
    <Box style={{
      overflow:"hidden",
      scrollBehavior: 'smooth '
    }}>
        <Hero />
        <TabsSections />
        <Prices />
        <Reviews />
        <Overview />
        <Specifications />
        {/* <MostRelated /> */}
        {/* <CustomerViewed /> */}
    </Box>
  )
}

export default ProductDescription