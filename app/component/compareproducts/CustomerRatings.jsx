"use client"
import { Accordion, Box, Flex, Image, Progress, Rating, Text } from "@mantine/core";
import React from "react";

const CustomerRatings = () => {
  const reviews = [
    {
      id: 1,
      totalReviews: 1000,
      rating: 4,
      message: (
        <Text fz={14}>
          <span style={{ fontWeight: "700" }}>94%</span>would recommend to a
          friend
        </Text>
      ),
      oneStar: 90,
      twoStar: 80,
      threeStar: 40,
      fourStar: 70,
      fifthStar: 10,
      qualityRating: (
        <Text fz={16}>
          <span style={{ fontWeight: "700" }}>4.0</span>would recommend to a
          friend
        </Text>
      ),
    },
    {
        id: 2,
        totalReviews: 1000,
        rating: 3,
        message: (
          <Text fz={14}>
            <span style={{ fontWeight: "700" }}>94%</span>would recommend to a
            friend
          </Text>
        ),
        oneStar: 90,
        twoStar: 80,
        threeStar: 40,
        fourStar: 70,
        fifthStar: 10,
        qualityRating: (
          <Text fz={16}>
            <span style={{ fontWeight: "700" }}>4.0</span>would recommend to a
            friend
          </Text>
        ),
      },
      {
        id: 3,
        totalReviews: 1000,
        rating: 5,
        message: (
          <Text fz={14}>
            <span style={{ fontWeight: "700" }}>94%</span>would recommend to a
            friend
          </Text>
        ),
        oneStar: 90,
        twoStar: 80,
        threeStar: 40,
        fourStar: 70,
        fifthStar: 10,
        qualityRating: (
          <Text fz={16}>
            <span style={{ fontWeight: "700" }}>4.0</span>would recommend to a
            friend
          </Text>
        ),
      },
  ];
  return (
    <Box>
      
      <Accordion >
      <Accordion.Item value="print">
        <Accordion.Control>
          <Text fz={20} fw={700}>
        Customer Ratings
      </Text>
        </Accordion.Control>
        <Accordion.Panel>
        <Flex w={"100%"} justify={"center"} wrap={"wrap"}>
        {reviews.map((item) => {
          return (
            <Flex
              mt={40}
              direction={"column"}
              gap={8}
              py={20}
              px={40}
              style={{ border: "1px solid #D9D9D9" }}
            >
              <Box>
                <Flex align={"center"} gap={8}>
                  <Text fw={700} fz={24}>
                    {item.rating}.0
                  </Text>
                  <Rating size={18} defaultValue={item.rating} />
                </Flex>
                <Text fz={12}>
                  from{" "}
                  <span style={{ color: "#0034EC" }}>
                    ({item.totalReviews} reviews)
                  </span>
                </Text>
              </Box>
              <Box>{item.message}</Box>
              <Flex w={300} align={"center"} justify={"space-between"}>
                <Text>5</Text>
                <Image src={"/images/star.png"} />
                <Progress color="blue" w={250} value={item.fourStar} />
              </Flex>
              
              <Flex  w={300} align={"center"} justify={"space-between"}>
                <Text>4</Text>
                <Image src={"/images/star.png"} />
                <Progress color="blue" w={250} value={item.fourStar} />
              </Flex>
              <Flex w={300} align={"center"} justify={"space-between"}>
                <Text>3</Text>
                <Image src={"/images/star.png"} />
                <Progress color="blue" w={250} value={item.threeStar} />
              </Flex>
              <Flex w={300} align={"center"} justify={"space-between"}>
                <Text>2</Text>
                <Image src={"/images/star.png"} />
                <Progress color="blue" w={250} value={item.twoStar} />
              </Flex>
              <Flex w={300} align={"center"} justify={"space-between"}>
                <Text>1</Text>
                <Image src={"/images/star.png"} />
                <Progress  w={250} color="blue" value={item.oneStar} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
        </Accordion.Panel>
      </Accordion.Item>
        </Accordion>
      
    </Box>
  );
};

export default CustomerRatings;
