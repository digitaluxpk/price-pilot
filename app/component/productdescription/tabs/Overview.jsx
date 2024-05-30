"use client"
import { Accordion, Box, List, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import React from "react";
const features = [
    {
      title: '4K Ultra HD (2160p resolution)',
      description: 'Enjoy breathtaking HDR10 4K movies and TV shows at 4 times the resolution of Full HD, and upscale your current content to Ultra HD-level picture quality.',
    },
    {
      title: 'High Dynamic Range',
      description: 'Provides a wide range of color details and sharper contrast, from the brightest whites to the deepest blacks.',
    },
    {
      title: 'Access thousands of shows with Fire TV',
      description: 'Watch over 1 million streaming movies and TV episodes with access to thousands of channels, apps, and Alexa skills, including Prime Video, Netflix, Hulu, HBO Max, YouTube, Apple TV+, Disney+, ESPN+, Sling TV, Paramount+, and other services right from this TV.',
    },
    {
      title: '4K Ultra HD (2160p resolution)',
      description: 'Enjoy breathtaking HDR10 4K movies and TV shows at 4 times the resolution of Full HD, and upscale your current content to Ultra HD-level picture quality.',
    },
  ];
const Overview = () => {
  return (
    <Accordion
    style={{
      scrollBehavior:"smooth"
    }}
    id='overview' mt={24} defaultValue="overview">
      <Accordion.Item value='overview'>
      <Accordion.Control >
      <Text fz={24} fw={700}>
        Product Overview
      </Text>
      </Accordion.Control>
      <Accordion.Panel>
    <Box mt={44} mb={8}>
      
      <Text>
        Take in every moment with breathtaking 4K Ultra HD on this 55-inch
        screen. Its equipped with DTS Studio Sound to create realistic and
        immersive audio. Access live over-the-air channels and streaming—and
        control it all with your voice. Ask Alexa to launch apps, search for
        titles and more. Experience the affordable, yet high-performing Insignia
        NS-55F301NA22 55 Class F30 Series LED 4K UHD Fire TV.
      </Text>
      <List mt={24}  fz={14}>
    <List.Item>Low Price Guarantee</List.Item>
    <List.Item>Returns free of charge for 30 days. </List.Item>
  
  </List>
  <List mt={24} spacing="md" icon={<ThemeIcon color="blue" size={24} radius="xl"><IconCheck size={16} /></ThemeIcon>}>
        {features.map((feature, index) => (
          <List.Item key={index}>
            <Text fz={20} fw={700}>{feature.title}</Text>
            <Text>{feature.description}</Text>
          </List.Item>
        ))}
      </List>
    </Box>
    </Accordion.Panel>

    </Accordion.Item>
    </Accordion>
  );
};

export default Overview;
