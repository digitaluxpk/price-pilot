"use client";
import { Box, Button, Flex, Popover, Text } from "@mantine/core";
import CategoryCard from "../component/subcategory/ProductCard";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../component/BreadCrumbs";
import SideBar from "../component/subcategory/SideBar";
import { IconChevronDown, IconSortAscending2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import MobileFilter from "../component/subcategory/MobileFilters";
import MobileSubcategory from "../mobilesubcategory/page";
const SubCategory = () => {
  const [sortOption, setSortOption] = useState("Best Match");
  const [stickyFilter, setStickyFilter] = useState(false);
  const [opened, setOpened] = useState(false);
  const handleSortChange = (value) => {
    setSortOption(value);
    setOpened(false);
  };
  const [openedFilterModal, handleFilterModal] = useDisclosure();
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setStickyFilter(true);
    } else {
      setStickyFilter(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <Flex direction={"column"} w={"100%"}  >
      <BreadCrumb />
      <Text mt={34} fz={{sm:24,lg:32}} fw={600}>
        Smart Speakers & Displays
      </Text>
      <Flex w={"100%"} mt={40} gap={0} justify={"space-between"}>
        <SideBar />
        <Box w={"100%"}>
          <Flex
            pos={{xs:stickyFilter ? "fixed" : "static",lg:"static"}}
            top={68}
            py={10}
            mb={26}
            left={5}
            style={{
              zIndex:"10000",
              boxShadow: "0px 2px 5px 0px rgba(29, 29, 29, 0.05)"
            }}
            px={14}
            bg={"#fff"}
            justify={"space-between"}
            w={{xs:"100%",lg:"90%"}}
          >
            <Text fz={14} fw={600}>
              21,564 results
            </Text>
            
            <Button
              radius={4}
              style={{ border: "1px solid #E5E7EB" }}
              c={"#000"}
              variant="transparent"
              onClick={handleFilterModal.open}
              fw={400}
              fz={14}
              display={{ xs: "block", lg: "none" }}
            >
              <IconSortAscending2 /> 
              Sort & Filters
            </Button>
            <Popover
              display={{ xs: "none", lg: "block" }}
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
       
      </Flex>
      <MobileFilter
        opened={openedFilterModal}
        onClose={handleFilterModal.close}
      />
    </Flex>
    {/* <Box display={{ xs:"block",lg:"none"} }>
    <MobileSubcategory />
    </Box> */}

    </>
  );
};

export default SubCategory;
