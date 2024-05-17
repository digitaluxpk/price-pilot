"use client";
import { Box, Button, Flex, Popover, Text } from "@mantine/core";
import CategoryCard from "../component/subcategory/ProductCard";
import React, { useState } from "react";
import BreadCrumb from "../component/BreadCrumbs";
import SideBar from "../component/subcategory/SideBar";
import { IconChevronDown, IconSortAscending2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import MobileFilter from "../component/subcategory/MobileFilters";
const SubCategory = () => {
  const [sortOption, setSortOption] = useState("Best Match");
  const [opened, setOpened] = useState(false);
  const handleSortChange = (value) => {
    setSortOption(value);
    setOpened(false);
  };
  const [openedFilterModal,handleFilterModal] = useDisclosure();
  return (
    <Flex direction={"column"}>
      <BreadCrumb />
      <Text mt={34} fz={24} fw={700}>
        Smart Speakers & Displays
      </Text>
      <Flex mt={40} gap={32} justify={"space-between"}>
        <SideBar />
        <Box>
          <Flex mb={26} justify={"space-between"} w={"100%"}>
            <Text fz={14} fw={600}>
              21,564 results
            </Text>
            <Button
              radius={4}
              style={{ border: "1px solid #E5E7EB" }}
              c={"#000"}
              variant="transparent"
              onClick={handleFilterModal.open}
            >
              <IconSortAscending2 /> Sort & Filters
            </Button>
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
          <CategoryCard />
        </Box>
        <Flex
          w={256}
          display={{ xs: "none", md: "block" }}
          h={"300px"}
          align={"center"}
          justify={"center"}
          bg={"#D9D9D9"}
        >
          <Text fw={700}>Ads</Text>
        </Flex>
      </Flex>
      <MobileFilter opened={openedFilterModal} onClose={handleFilterModal.close} />
    </Flex>
  );
};

export default SubCategory;
