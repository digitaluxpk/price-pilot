import { Box, Button, Card, Flex, Group, Image, Progress, Rating, Text } from '@mantine/core'
import React from 'react'
const reviews = [
    {
      rating: 4,
      title: 'A Solid Choice for the Budget-Conscious',
      reviewer: '{name}',
      date: '{date}',
      verified: true,
      content: `If you're in the market for an affordable TV that delivers decent performance, the Insignia 55" Class F30 Series LED 4K UHD Smart Fire TV might just be the one for you. While it's not the most premium option available, it has some standout features that make it a viable choice for those looking to save a few bucks without sacrificing too much on quality.`,
    },
    {
      rating: 4,
      title: 'A Solid Choice for the Budget-Conscious',
      reviewer: '{name}',
      date: '{date}',
      verified: true,
      content: `If you're in the market for an affordable TV that delivers decent performance, the Insignia 55" Class F30 Series LED 4K UHD Smart Fire TV might just be the one for you. While it's not the most premium option available, it has some standout features that make it a viable choice for those looking to save a few bucks without sacrificing too much on quality.`,
    },
  ];
  
const Reviews = () => {
  return (
    <Box mt={44}>
        <Box>
            <Text fz={24} fw={700}>Reviews</Text>
            <Text mt={8}>What other people think of this product</Text>
        </Box>
        <Box>
                <Flex align={"center"} gap={8}>
                  <Text fw={700} fz={24}>
                    4.0
                  </Text>
                  <Rating size={18} defaultValue={4} />
                </Flex>
                <Text fz={12}>
                  from{" "}
                  <span style={{ color: "#0034EC" }}>
                    (1000 reviews)
                  </span>
                </Text>
              </Box>
        <Flex gap={16} mt={24}>
            <Flex direction={"column"}>
                <Flex gap={16}>
                <Image w={16} h={16} src={"/images/star.png"} />
                    <Text fw={700}>4.0</Text>
                    <Text>reviews</Text>
                </Flex>
                <Flex gap={16}>
                <Image w={16} h={16} src={"/images/star.png"} />
                    <Text fw={700}>4.0</Text>
                    <Text>reviews</Text>
                </Flex>
                <Flex gap={16}>
                <Image w={16} h={16} src={"/images/star.png"} />
                    <Text fw={700}>4.0</Text>
                    <Text>reviews</Text>
                </Flex>
            </Flex>
            <Flex direction={"column"}>
            <Box><Text fz={14}>
          <span style={{ fontWeight: "700" }}>94%</span>would recommend to a
          friend
        </Text></Box>
              <Flex w={300} align={"center"} justify={"space-between"}>
                <Text>5</Text>
                <Image src={"/images/star.png"} />
                <Progress color="blue" w={250} value={1} />
              </Flex>
              
              <Flex  w={300} align={"center"} justify={"space-between"}>
                <Text>4</Text>
                <Image src={"/images/star.png"} />
                <Progress color="blue" w={250} value={2} />
              </Flex>
              <Flex w={300} align={"center"} justify={"space-between"}>
                <Text>3</Text>
                <Image src={"/images/star.png"} />
                <Progress color="blue" w={250} value={2} />
              </Flex>
              <Flex w={300} align={"center"} justify={"space-between"}>
                <Text>2</Text>
                <Image src={"/images/star.png"} />
                <Progress color="blue" w={250} value={3} />
              </Flex>
              <Flex w={300} align={"center"} justify={"space-between"}>
                <Text>1</Text>
                <Image src={"/images/star.png"} />
                <Progress  w={250} color="blue" value={5} />
              </Flex>
            </Flex>
        </Flex>
        <Box>
        {reviews.map((review, index) => (
        <Card key={index} shadow="sm" padding="lg" mb="lg" withBorder>
          <Group align="center">
            <Rating value={review.rating} readOnly />
          </Group>
          <Text weight={700} size="lg" mt="sm">{review.title}</Text>
          <Text size="sm" color="dimmed" mt="xs">
            Reviewed by {review.reviewer} on {review.date} {review.verified && '- Verified Purchase'}
          </Text>
          <Text mt="md">{review.content}</Text>
          <Text fz={14} mt={12} style={{textDecoration:"underline"}}>Read More</Text>
        </Card>
      ))}
        </Box>
        <Button variant='transparent' bg={"#0034EC"} p={16} radius={8} c={"#fff"}></Button>
    </Box>
  )
}

export default Reviews