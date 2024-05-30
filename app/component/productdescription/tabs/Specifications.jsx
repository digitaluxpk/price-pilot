
"use client"
import { Accordion, Box, Flex, Text } from '@mantine/core'
import React from 'react'

const Specifications = () => {
  return (
    <Accordion  style={{
        scrollBehavior:"smooth"
      }} id='spec' defaultValue='spec' mt={24} defaultChecked>
      <Accordion.Item value='spec'>
      <Accordion.Control >
      <Text fz={24} fw={700}>
            Specifications
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
    <Box>
        
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
    </Accordion.Panel>
    </Accordion.Item>
    </ Accordion >
  )
}

export default Specifications