"use client";

import { Text, Group, Divider, Image, Box, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isBigResolution = useMediaQuery("(max-height: 900px) ")
  return (
    <>
      {pathname == "/" ? (
        <Flex pos={isBigResolution == false ? "absolute":"static"} w={isBigResolution == false && "80%"}
        bottom={isBigResolution == false && 0} justify={"center"} mb={30} ml={{ xs: 12, lg: 0 }} mt={{ xs: 16, lg: 104 }}>
          <Flex mt={12} fz={12} align={"center"} gap={16}>
            <Text fz={{ xs: 14, lg: 16 }} c={"#212427"}>
              &copy; 2024 PricePilot
            </Text>
            <Group>
              <Text c={"#0034EC"} fz={{ xs: 12, lg: 14 }}>
                Privacy Policy
              </Text>
              <Text c={"#0034EC"} fz={{ xs: 12, lg: 14 }}>
                Terms & Conditions
              </Text>
            </Group>
          </Flex>
        </Flex>
      ) : (
        <>
          <Flex
            display={{ xs: "none", lg: "flex" }}
            w={"100%"}
            direction={"column"}
            px={{ xs: 16, md: 40 }}          
            pt={{ xs: 40, md: 60 }}
            pb={{ xs: 40, md: 30 }}
            style={{ overflow: "hidden" }}
          >
            <Divider size="xs" my={24} />
            <Box w={"100%"} component={Link} href={"/"}>
              <Image
                src="/images/footer-logo.png"
                alt="PricePilot"
                h={{ xs: 30, lg: 51 }}
                w={{ xs: 214, md: 300 }}
              />
            </Box>
            <Flex
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 24, lg: 110 }}
              mb={{xs:8,lg:16}}
            >
              <Box w={{ xs: 300, md: 390 }}>
                <Text mt={24} fz={14}>
                  PricePilot helps you discover the best products, compare them,
                  and then find the best deals.
                </Text>
                <Text mt="xs" fz={14}>
                  We are entirely independent and free to use and are constantly
                  growing the assortment of products.
                </Text>
                
              </Box>
              <Flex gap={{ xs: 24, lg: 110 }}>
                <Box>
                  <Text fw={600} mb="xs">
                    Shop for
                  </Text>
                  <Flex direction={"column"} gap={14}>
                    <Text component={Link} href={"/category"} fz={14}>
                      Smart Speakers & Displays
                    </Text>
                    <Text component={Link} href={"/category"} fz={14}>
                      Smart Lighting
                    </Text>
                    <Text component={Link} href={"/category"} fz={14}>
                      Smart Plugs & Outlets
                    </Text>
                    <Text component={Link} href={"/category"} fz={14}>
                      Smart & Wi-fi Thermostats
                    </Text>
                    <Text component={Link} href={"/category"} fz={14}>
                      Smart Doorbells
                    </Text>
                    <Text component={Link} href={"/category"} fz={14}>
                      Smart Doorlocks
                    </Text>
                    <Text component={Link} href={"/category"} fz={14}>
                      Routers
                    </Text>
                  </Flex>
                </Box>
                <Box ml={54}>
                  <Text fw={600} mb="xs">
                    Company
                  </Text>
                  <Text fz={14}>Blog</Text>
                  <Text fz={14} mt={14}>
                    About Us
                  </Text>
                </Box>
              </Flex>
            </Flex>
            
            <Flex
              
              mt={12}
              fz={12}
              align={"center"}
              gap={16}
            >
              <Text c={"#212427"}>&copy; 2024 PricePilot</Text>
              <Group>
                <Text c={"#0034EC"} fz={14}>
                  Privacy Policy
                </Text>
                <Text c={"#0034EC"} fz={14}>
                  Terms & Conditions
                </Text>
              </Group>
            </Flex>
          </Flex>
          {/* for mobile */}
          <Flex mt={140} display={{ xs: "flex", lg: "none" }} direction={"column"} ml={12}>
            <Flex direction={"column"} gap={{ xs: 24, lg: 110 }}>
            
              <Box>
              <Divider size="xs" my={24} />
                <Text fw={600} mb="xs">
                  Shop for
                </Text>
                <Flex direction={"column"} gap={14}>
                  <Text component={Link} href={"/category"} fz={14}>
                    Smart Speakers & Displays
                  </Text>
                  <Text component={Link} href={"/category"} fz={14}>
                    Smart Lighting
                  </Text>
                  <Text component={Link} href={"/category"} fz={14}>
                    Smart Plugs & Outlets
                  </Text>
                  <Text component={Link} href={"/category"} fz={14}>
                    Smart & Wi-fi Thermostats
                  </Text>
                  <Text component={Link} href={"/category"} fz={14}>
                    Smart Doorbells
                  </Text>
                  <Text component={Link} href={"/category"} fz={14}>
                    Smart Doorlocks
                  </Text>
                  <Text component={Link} href={"/category"} fz={14}>
                    Routers
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text fw={600} mb="xs">
                  Company
                </Text>
                <Text fz={14}>Blog</Text>
                <Text fz={14} mt={14}>
                  About Us
                </Text>
              </Box>
            </Flex>
            <Box mt={48} w={"100%"} component={Link} href={"/"}>
              <Image
                src="/images/footer-logo.png"
                alt="PricePilot"
                h={{ xs: 30, lg: 51 }}
                w={{ xs: 214, md: 300 }}
              />
            </Box>
            <Box w={{ xs: 300, md: 390 }}>
              <Text mt={24} fz={14}>
                PricePilot is modernizing the online shopping with one seamless
                experience to easily find, compare, and get the best prices on
                the latest smart home technology.
              </Text>
              <Text mt="xs" fz={14}>
                We are entirely independent and free to use and are constantly
                growing the assortment of products.
              </Text>
              <Flex
              
              mt={24} fz={12} mb={24} direction={"column"} gap={8}>
                <Text fz={12} c={"#212427"}>
                  &copy; 2024 PricePilot
                </Text>
                <Group>
                  <Text c={"#0034EC"} fz={12}>
                    Privacy Policy
                  </Text>
                  <Text c={"#0034EC"} fz={12}>
                    Terms & Conditions
                  </Text>
                </Group>
              </Flex>
            </Box>
          </Flex>
        </>
      )}
    </>
  );
};

export default Footer;
