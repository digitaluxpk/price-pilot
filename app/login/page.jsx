"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Text,
  TextInput,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import RightSide from "../components/loginsignup/RightColumn";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import { useTextInputStyles } from "../components/input/style";
import { supabase } from "@/utils/supabaseClient";
import { useState } from "react";

export default function Login() {
  const { colorScheme } = useMantineColorScheme();
  const [buttonLoading,setButtonLoading] =useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email format",
      password: (value) => (value.trim() ? null : "Project slug is required"),
    },
  });
  const handleSubmit = async (values) => {
  
      if (form.validate().hasErrors) {
        return;
      }
      setButtonLoading(true);
      const { data , error } = await supabase().auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      console.log("🚀 ~ const{user,session,error}=awaitsupabase ~ user:", data)
      if (error) {
        notifications.show({
          color: 'red',
          message: error.message,
          autoClose: true,
          withCloseButton: true,
        });
        setButtonLoading(false);

      } else {
        notifications.show({
          color: 'green',
          message: 'Login successfully',
          autoClose: true,
          withCloseButton: true,
        });
        setButtonLoading(false);
      }
  };
  return (
    <Flex bg={"#fff"} h={"100%"} justify={"center"}>
      <Flex w={"50%"} h={"100%"} justify={"space-between"}  mt={90} px={64} direction={"column"}>
        <Box>
          <Image src={"/images/logo.png"} w={80} h={80} />
        </Box>
        <Text
          mt={15}
          c={colorScheme === "dark" ? "#fff" : "#000"}
          fz={48}
          fw={700}
        >
          Welcome Back
        </Text>
        <Text c={colorScheme === "dark" ? "black.5" : "black.7"}>
          Sheppard.io helps you start collecting, managing and sharing your
          <br />
          testimonials in minutes, not days.
        </Text>
        <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction={"column"} mt={40} gap={"lg"}>
            <TextInput
            style={useTextInputStyles(colorScheme).input}
             
              size="md"
              //   radius={8}
              label="Email"
              variant="unstyled"
              placeholder="ABC project"
              {...form.getInputProps("email")}
            />
            <TextInput
              style={useTextInputStyles(colorScheme).input}
              className=""
              size="md"
              //   radius={8}

              label="Password"
              variant="unstyled"
              placeholder="password"
              {...form.getInputProps("password")}
            />
            <Flex justify={"space-between"}>
              <Flex>
                <Checkbox />
                <Text ml={12} c={"#000"}>Remember me</Text>
              </Flex>
              <Text component={Link} href={"/forgotpassword"} c={"#000"}>
              Forget Password?
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              gap={"10px"}
            ></Flex>
            <Button
              fullWidth
              type="submit"
              gradient={ colorScheme === 'dark' ?  { from: "#5A4FE3", to: "#1587F5", deg: 90 } : { from: "#000", to: "#000", deg: 90 }}
              radius={8}
              variant="gradient"
              size="md"
            >
              Login
            </Button>
            <Button
              mt={8}
              fullWidth
              type="submit"
              radius={8}
              variant="transparent"
              size="md"
              c={colorScheme === "dark" ?"#fff":" #0E1314"}
              style={{
                border:`1px solid ${colorScheme === "dark" ?"#fff":" #0E1314"}`
            }}
            >
            <Box mr={8}><Image src={"/images/login-google.png"} />  </Box>  Login with Google
            </Button>
          </Flex>
        </form>
        <Flex fw={500} justify={"center"} mt={200}>
          <Text  c={colorScheme === "dark" ? "#fff" : "#000"}>
          Don&apos;t Have and Account? {" "}          </Text>
          <Text component={Link} href={"/signup"} c={"#5A4FE3"}> Sign up</Text>
        </Flex>
      </Flex>
      <Flex visibleFrom="lg" w={"50%"}>
        <RightSide />
      </Flex>
    </Flex>
  );
}
