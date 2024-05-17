import ProductDescription from '@/app/pages/ProductDescription'
import { Box } from '@mantine/core'
import React from 'react'

const page = () => {
  return (
    <Box mx={{xs:10,lg:40}} mt={100}>
<ProductDescription />
    </Box>
  )
}

export default page