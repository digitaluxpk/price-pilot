"use client";
import {
  TextInput,
  Box,
  Burger,
  Text,
  Image,
  Flex,
  Button,
  Menu,
  Drawer,
} from "@mantine/core";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [stickyNavbar, setStickyNavbar] = useState(false);
  //   const toggleMenu = () => {
  //     setOpened((o) => !o);
  //   };

  //   const openSearch = () => {
  //     setSearchOpened(true);
  //   };

  //   const closeSearch = () => {
  //     setSearchOpened(false);
  //     setSearchQuery("");
  //   };
  const [opened, { toggle, close }] = useDisclosure();
  const [openedSearchBar, handleSearchBar] = useDisclosure();
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box>
      <Flex
        align={"center"}
        w={"100%"}
        direction={"row"}
        display={{ md: "flex", xs: "none" }}
        justify={"space-between"}
        py={24}
        px={32}
      >
        <Flex align={"center"}>
          <Box component={Link} href={"/"}>
            <Image src={"/images/logo.png"} w={192} h={33} />
          </Box>
          {pathname !== "/" && (
            <Flex align={"center"}>
              <Menu withinPortal position="bottom-end">
                <Menu.Target>
                  <Button variant="transparent" c={"#000"} ml={53}>
                    Shop <IconChevronDown />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component={Link} href="/category">
                    Category 1
                  </Menu.Item>
                  <Menu.Item component={Link} href="/category">
                    Category 2
                  </Menu.Item>
                  <Menu.Item component={Link} href="/category">
                    Category 3
                  </Menu.Item>
                  <Menu.Item component={Link} href="/category">
                    Category 4
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Flex ml={24} w={546}>
                <TextInput
                  w={"100%"}
                  p={12}
                  placeholder="Start searching for a product"
                  radius={40}
                  rightSection={
                    <Box
                      bg={"#0034EC"}
                      px={8}
                      pb={4}
                      pt={8}
                      style={{ borderRadius: "100%" }}
                    >
                      <IconSearch size={18} color="#fff" />
                    </Box>
                  }
                  rightSectionWidth={42}
                />
              </Flex>
            </Flex>
          )}
        </Flex>
        <Flex gap={24}>
          <Text href={"#"} component={Link}>
            Blog
          </Text>
          <Text href={"#"} component={Link}>
            About Us
          </Text>
        </Flex>
      </Flex>

      {/* for mobile */}
      <>
        <Flex
          display={{ xs: "flex", md: "none" }}
          justify="space-between"
          align="center"
          p="md"
          style={{
            position: stickyNavbar ? "fixed" : "static",
            width:"100%",
            top: 0,
            zIndex: 1000,
            backgroundColor: "white",
          }}
        >
          <Flex
            sx={{
              "@media (min-width: 768px)": {
                display: "none",
              },
            }}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </Flex>
          {pathname !== "/" && (
            <>
              <Box component={Link} href={"/"}>
                <Image src={"/images/logo.png"} w={192} h={33} />
              </Box>
              <Box
                onClick={handleSearchBar.open}
                bg={"#0034EC"}
                px={8}
                pb={4}
                pt={8}
                style={{ borderRadius: "100%" }}
              >
                <IconSearch size={18} color="#fff" />
              </Box>
            </>
          )}
        </Flex>

        <Drawer opened={opened} onClose={close} padding="xl" size="md">
          <Flex gap={8} direction={"column"} align={"center"}>
            <Text href={"#"} component={Link}>
              Blog
            </Text>
            <Text href={"#"} component={Link}>
              About Us
            </Text>
          </Flex>
        </Drawer>
        <Drawer
          opened={openedSearchBar}
          onClose={handleSearchBar.close}
          title={
            <TextInput
              w={{ xs: 302, lg: 702 }}
              h={"100%"}
              p={12}
              placeholder="Start searching for a product"
              radius={40}
              rightSection={
                <Box
                  bg={"#0034EC"}
                  px={8}
                  pb={4}
                  pt={8}
                  style={{ borderRadius: "100%" }}
                >
                  <IconSearch size={18} color="#fff" />
                </Box>
              }
              rightSectionWidth={42}
            />
          }
          padding="xl"
          size="md"
        ></Drawer>
      </>
    </Box>
  );
}

export default Navbar;
