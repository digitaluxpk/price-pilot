import { Box } from '@mantine/core'
import React from 'react'
import Main from "../component/category/Main"
import Category from '../pages/Category'
const page = () => {
  return (
   <Box px={{xs:12,lg:40}}>
    <Category />
   </Box>
  )
}

export default page