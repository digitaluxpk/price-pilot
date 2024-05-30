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
  Group,
  Divider,
} from "@mantine/core";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const handleOpenSubmenu = (menu) => {
    setSubmenu(menu);
  };

  const handleCloseSubmenu = () => {
    setSubmenu(null);
  };
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box>
      <Flex
        align={"center"}
        w={"100%"}
        direction={"row"}
        display={{ lg: "flex", xs: "none" }}
        justify={"space-between"}
        py={24}
        px={32}
        bg={"#1D1D1D0D"}
        style={{
          boxShadow: "0px 2px 5px 0px rgba(29, 29, 29, 0.05)",
        }}
      >
        <Flex align={"center"}>
          {pathname !== "/" && (
            <Box component={Link} href={"/"}>
              <Image src={"/images/logo.png"} w={192} h={33} />
            </Box>
          )}
          {pathname !== "/" && (
            <Flex align={"center"}>
              <Menu withinPortal position="bottom-end">
                <Menu.Target>
                  <Button variant="transparent" c={"#000"} ml={53}>
                    Shop <IconChevronDown size={14} />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    <Text fw={600} fz={14} ml={16}>
                      Smart Home
                    </Text>
                  </Menu.Item>
                  <Menu.Item  component={Link} href="/category">
                    <Menu
                    className="menu-item"
                      trigger="hover"
                    
                      position="right"
                      openDelay={100}
                      closeDelay={400}
                    >
                      <Menu.Target>
                        <Menu.Item
                          rightSection={<IconChevronRight  size={14} />}
                        >
                          <Group position="apart">
                            <Text size="sm">Smart Speakers & Displays</Text>
                          </Group>
                        </Menu.Item>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item>Speakers</Menu.Item>
                        <Menu.Item>Displays</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Menu.Item>
                  <Menu.Item component={Link} href="/category">
                    <Menu
                      trigger="hover"
                      position="right"
                      openDelay={100}
                      closeDelay={400}
                      className="menu-item"
                    >
                      <Menu.Target>
                        <Menu.Item
                          rightSection={<IconChevronRight size={14} />}
                        >
                          <Group position="apart">
                            <Text size="sm">Smart Lighting</Text>
                          </Group>
                        </Menu.Item>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item>Smart Light Bulbs</Menu.Item>
                        <Menu.Item>LED Light Strips</Menu.Item>
                        <Menu.Item>Smart Light Panels</Menu.Item>
                        <Menu.Item>Smart Light Bars</Menu.Item>
                        <Menu.Item>Smart Lighting Kits</Menu.Item>
                        <Menu.Item>Smart Light Switches & Dimmers</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Menu.Item>
                  <Menu.Item component={Link} href="/category">
                    <Group position="apart">
                      <Text fz={14} ml={12}>
                        {" "}
                        Smart & Wi-fi Thermostats{" "}
                      </Text>{" "}
                    </Group>
                  </Menu.Item>
                  <Menu.Item component={Link} href="/category">
                    <Menu className="menu-item" position="right" trigger="hover" openDelay={100} closeDelay={400}>
                      <Menu.Target>
                        <Menu.Item
                          rightSection={<IconChevronRight size={14} />}
                        >
                          <Group position="apart">
                            <Text size="sm">Smart Plugs & Outlets</Text>
                          </Group>
                        </Menu.Item>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item>Smart Plugs</Menu.Item>
                        <Menu.Item>Smart Outlets</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Menu.Item>
                  <Menu.Item component={Link} href="/category">
                    <Menu className="menu-item" position="right" trigger="hover" openDelay={100} closeDelay={400}>
                      <Menu.Target>
                        <Menu.Item
                          rightSection={<IconChevronRight size={14} />}
                        >
                          <Group position="apart">
                            <Text size="sm">Wifi & Networking</Text>
                          </Group>
                        </Menu.Item>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item>Routers</Menu.Item>
                        <Menu.Item>Range Extenders</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Menu.Item>
                
                </Menu.Dropdown>
              </Menu>
              <Flex ml={24} w={546}>
                <TextInput
                  w={"100%"}
                  p={4}
                  placeholder="Start searching for a product"
                  size="md"
                  radius={40}
                  rightSection={
                    <Box
                      bg={"#0034EC"}
                      px={8}
                      pb={3}
                      pt={4}
                      style={{ borderRadius: "100%" }}
                    >
                      <IconSearch size={14} color="#fff" />
                    </Box>
                  }
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
          display={{ xs: "flex", lg: "none" }}
          justify="space-between"
          align="center"
          py={"md"}
          p={16}
          // mx={12}
          style={{
            position: stickyNavbar ? "fixed" : "static",
            width: "100%",
            top: 0,
            paddingTop: 24,
            zIndex: 1000,
            backgroundColor: "#FAFBFD",
            boxShadow: "0px 2px 5px 0px rgba(29, 29, 29, 0.05)",
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
              <Flex
                onClick={handleSearchBar.open}
                bg={"#0034EC"}
                h={36}
                w={36}
                align={"center"}
                justify={"center"}
                style={{ borderRadius: "100%" }}
              >
                <IconSearch size={16} color="#fff" />
              </Flex>
            </>
          )}
        </Flex>

        <Drawer opened={opened} 
        title={
          <Image src={"/images/mobile-submenu-logo.png"} />
        }
        onClose={close} padding="xl" size="md">
        {!submenu ? (
          <>
          {
            pathname != "/" &&
            <Box>
            <Group position="apart" mb="md">
              <Text fw={600}>Smart Home</Text>
            </Group>
            <Divider mb="sm" />
            <Flex  gap={12} direction="column" spacing="xs" grow>
              <Flex w={"100%"} justify={"space-between"} align={"center"}  onClick={() => handleOpenSubmenu('Smart Lighting')}>
                <Text fz={14} fw={500}>Smart Speakers & Displays</Text>
                <IconChevronRight  color="#0034EC" size={18} />
              </Flex>
              <Flex w={"100%"} justify={"space-between"} align={"center"} onClick={() => handleOpenSubmenu('Smart Lighting')}>
                <Text fz={14} fw={500}>Smart Lighting</Text>
                <IconChevronRight color="#0034EC" size={18} />
                </Flex>
              <Flex w={"100%"} justify={"space-between"} align={"center"} onClick={() => handleOpenSubmenu('Smart Plugs & Outlets')}>
                <Text fz={14} fw={500}>Smart Plugs & Outlets</Text>
                <IconChevronRight color="#0034EC" size={18} />
                </Flex>
              <Flex w={"100%"} justify={"space-between"} align={"center"} onClick={() => handleOpenSubmenu('Smart & Wi-fi Thermostats')}>
                <Text fz={14} fw={500}>Smart & Wi-fi Thermostats</Text>
                <IconChevronRight color="#0034EC" size={18} />
                </Flex>
              <Flex w={"100%"} justify={"space-between"} align={"center"} onClick={() => handleOpenSubmenu('Home Security & Monitoring')}>
                <Text fz={14} fw={500}>Home Security & Monitoring</Text>
                <IconChevronRight color="#0034EC" size={18} />
                </Flex>
              <Flex w={"100%"} justify={"space-between"} align={"center"} onClick={() => handleOpenSubmenu('Wifi & Networking')}>
                <Text fz={14} fw={500}>Wifi & Networking</Text>
                <IconChevronRight color="#0034EC" size={18} />
                </Flex>
            </Flex>
            <Divider my="md" />
            <Flex direction="column" gap={12}>
              <Text  fw={500}>About Us</Text>
              <Text  fw={500}>Blog</Text>
            </Flex>
          </Box>

          }
          </>
        ) : (
          <>
          {
            pathname != "/" &&
          <Box>
            <Flex c={"#0034EC"} align={"center"}>
              <Text fz={14} onClick={handleCloseSubmenu} style={{ cursor: 'pointer' }}>
                <IconChevronLeft size={18} /> Back
              </Text>
            </Flex>
            <Divider mb="sm" />
            <Text mb={12} fw={600}>
            Smart Lighting
            </Text>
            {submenu === 'Smart Lighting' && (
              <Flex direction="column" gap={16}>
                <Text fz={14}>Smart Light Bulbs</Text>
                <Text fz={14}>LED Light Strips</Text>
                <Text fz={14}>Smart Light Panels</Text>
                <Text fz={14}>Smart Light Bars</Text>
                <Text fz={14}>Smart Lighting Kits</Text>
                <Text fz={14}>Smart Light Switches & Dimmers</Text>
              </Flex>
            )}
            {/* Add more submenu items here as needed */}
          </Box>}
          </>
        )}
          {
            pathname == "/" &&
            <Flex direction="column" gap={12}>
              <Text  fw={500}>About Us</Text>
              <Text  fw={500}>Blog</Text>
            </Flex>
          }
        </Drawer>
        <Drawer
          opened={openedSearchBar}
          onClose={handleSearchBar.close}
          title={
            <TextInput
              w={{ xs: 290, lg: 702 }}
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
