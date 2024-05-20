import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

const Specifications = () => {
  return (
    <Box>
        <Text fz={24} fw={700}>
            Specifications
        </Text>
        <Text mt={24} fw={700}>
        Header
        </Text>
        <Flex gap={24} mt={24}>
            <Box>
                <Text fz={14} fw={700}>Specification</Text>
            </Box>
            <Box>
                <Text fz={14} >Specification Value</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Specifications