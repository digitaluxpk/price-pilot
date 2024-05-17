"use client"
import { Box, Flex, Image, Switch, Text, useMantineColorScheme } from "@mantine/core";
import { IconArrowLeft, IconArrowLeftToArc } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import DashBoardCart from "../components/dashboardLayout/DashBoardCart";
import PaymentPlan from "../components/paymentplan/PaymentPlan";
import { usePathname } from "next/navigation";

const Upgradepackage = () => {
    const pathname = usePathname()

    
  return (
    <Box bg={"#fff"}>
      {/* header */}
      <Flex py={32} px={64}>
        <Flex align={"center"}>
          <Link href={"/dashboard"}>
            {" "}
            <IconArrowLeft size="2rem" stroke={1.5} color="#000" />
          </Link>
          <Image src={"/images/headerLogo.png"} w={254} h={64} />
        </Flex>
      </Flex>

      {/* plans */}
      <PaymentPlan />

      {/* //messagecart */}
      <DashBoardCart />
    </Box>
  );
};

export default Upgradepackage;
