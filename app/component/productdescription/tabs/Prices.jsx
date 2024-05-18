"use client";
import { Box, Button, Flex, Image, List, Popover, Table, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";
const elements = [
  {
    position: <Image src={"/images/category.png"} w={117} h={68} />,
    mass: (
      <Text fz={32} fw={500}>
        123
      </Text>
    ),
    symbol: <Box fz={14}><Text c={"#626262"}>Free shipping as early as </Text><Text fw={500}>Mon, may 28</Text> </Box>,
    name: <List w={170} fz={14}>
    <List.Item>Low Price Guarantee</List.Item>
    <List.Item>Returns free of charge for 30 days. </List.Item>
  
  </List> ,
  btn:<Button px={24} size="md" py={14} c={"#0034EC"}
  style={{border:"1px solid #0034EC"}}
  variant="transparent" >Buy on Best Buy</Button>
  },
  {
    position: <Image src={"/images/category.png"} w={117} h={68} />,
    mass: (
      <Text fz={32} fw={500}>
        123
      </Text>
    ),
    symbol: <Box fz={14}><Text c={"#626262"}>Free shipping as early as </Text><Text fw={500}>Mon, may 28</Text> </Box>,
    name: <List w={170} fz={14}>
    <List.Item>Low Price Guarantee</List.Item>
    <List.Item>Returns free of charge for 30 days. </List.Item>
  
  </List> ,
  btn:<Button px={24} size="md" py={14} c={"#0034EC"}
  style={{border:"1px solid #0034EC"}}
  variant="transparent" >Buy on Best Buy</Button>
  },
];
const Prices = () => {
    const [opened, setOpened] = useState(false);
    const [sortOption, setSortOption] = useState("Sort by");
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.btn}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Box mt={44}>
        <Flex mb={44} w={"100%"} justify={"end"}>
        <Popover
              display={{ xs: "none", md: "block" }}
              width={300}
              trapFocus
              position="bottom"
              withArrow
              shadow="md"
              opened={opened}
              onChange={setOpened}
            >
              <Popover.Target>
                <Button
                  variant="transparent"
                  c={"#000"}
                  onClick={() => setOpened((o) => !o)}
                >
                  {sortOption} <IconChevronDown />
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Box w={200}>
                  <Box
                    onClick={() => handleSortChange("Best Match")}
                    style={{ cursor: "pointer", padding: "5px 0" }}
                  >
                    Best Match
                  </Box>
                  <Box
                    onClick={() => handleSortChange("Highest Rating")}
                    style={{ cursor: "pointer", padding: "5px 0" }}
                  >
                    Highest Rating
                  </Box>
                  <Box
                    onClick={() => handleSortChange("Lowest Price")}
                    style={{ cursor: "pointer", padding: "5px 0" }}
                  >
                    Lowest Price
                  </Box>
                  <Box
                    onClick={() => handleSortChange("Highest Price")}
                    style={{ cursor: "pointer", padding: "5px 0" }}
                  >
                    Highest Price
                  </Box>
                </Box>
              </Popover.Dropdown>
            </Popover>
        </Flex>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Sold by</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Delivery</Table.Th>
            <Table.Th>Additional details</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Box>
  );
};

export default Prices;