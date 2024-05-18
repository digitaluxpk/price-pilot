import { Box } from '@mantine/core'
import React from 'react'
import Hero from '../component/productdescription/Hero'
import TabsSections from '../component/productdescription/tabs/TabsSections'
import MostRelated from '../component/productdescription/MostRelated'
import CustomerViewed from '../component/productdescription/CustomerViewed'

const ProductDescription = () => {
  return (
    <Box>
        <Hero />
        <TabsSections />
        <MostRelated />
        <CustomerViewed />
    </Box>
  )
}

export default ProductDescription