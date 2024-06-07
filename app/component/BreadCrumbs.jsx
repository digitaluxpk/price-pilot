"use client";
import { Breadcrumbs, Anchor, Text, Box } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Breadcrumb() {
  const paths = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  var moveBreadcrumb;
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const pathNames = ["Home", ...paths.split("/").filter((path) => path)];
  const items = pathNames.map((item, index) => {
    const itemName = item.charAt(0).toUpperCase() + item.slice(1);
    const textStyle =
      index === pathNames.length - 1
        ? { color: "blue", textDecoration: "none" }
        : { color: "#626262", textDecoration: "none" };
    moveBreadcrumb = pathNames.includes("productdescription");
    return (
      <Box
        component={Link}
        style={{ textDecoration: "none" }}
        href={`/${item}`}
        key={index}
      >
        <Text fw={500} fz={14} style={textStyle}>
          {itemName}
        </Text>
      </Box>
    );
  });
  return (
    <>
      <Breadcrumbs
        separator={<IconChevronRight size={16} />}
        separatorMargin={{ xs: "sm", lg: "md" }} 
        mt="xs"
        mx={{ xs: "md", lg: "" }}
        style={{
          display: "flex",
          overflowX: isMobile ? "auto" : "hidden",
          whiteSpace: isMobile ? "nowrap" : "normal",
          // padding: isMobile ? "0 10px 12px 0" : "0",
          marginLeft: (moveBreadcrumb && isMobile)? "-60px" : "10px",
        }}
      >
        {items}
      </Breadcrumbs>
    </>
  );
}

