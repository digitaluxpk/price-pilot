"use client";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import RightSide from "../components/loginsignup/RightColumn";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import { useTextInputStyles } from "../components/input/style";
import { supabase } from "@/utils/supabaseClient";

export default function Signup() {
  const { colorScheme } = useMantineColorScheme();
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
    const { email, password } = values;

    if (form.validate().hasErrors) {
      return;
    }

    const { user, error } = await supabase.auth.signUp({
      email,
      password
    });
    console.log("🚀 ~ handleSubmit ~ user:", user)

    if (error) {
      notifications.show({
        color: "red",
        message: error.message,
        autoClose: true,
        withCloseButton: true,
      });
    } else {
      notifications.show({
        color: "green",
        message: "Signup successfully. Check your email to verify!",
        autoClose: true,
        withCloseButton: true,
      });
      // Redirect or handle user logic here
    }
  };
  

  return (
    <Flex bg={"#fff"} h={"100%"} justify={"center"}>
      <Flex
        w={"50%"}
        h={"100%"}
        justify={"space-between"}
        mt={90}
        px={64}
        direction={"column"}
      >
        <Box>
          <Image src={"/images/logo.png"} w={80} h={80} />
        </Box>
        <Text
          mt={15}
          c={colorScheme === "dark" ? "#fff" : "#000"}
          fz={48}
          fw={700}
        >
          Sign Up
        </Text>
        <Text c={colorScheme === "dark" ? "black.5" : "black.7"}>
        Create your Sheppard.io account to revolutionize the way you <br /> manage feedback.
        </Text>
        <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction={"column"} mt={40} gap={"lg"}>
            <TextInput
            style={useTextInputStyles(colorScheme).input}
              label="Email"
              variant="unstyled"
              placeholder="abc@gmail.co,"
              {...form.getInputProps("email")}
            />
            <TextInput
              style={useTextInputStyles(colorScheme).input}
              size="md"
              label="Password"
              variant="unstyled"
              placeholder="password"
              {...form.getInputProps("password")}
            />

            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              gap={"10px"}
            ></Flex>
            <Button
              fullWidth
              type="submit"
              gradient={
                colorScheme === "dark"
                  ? { from: "#5A4FE3", to: "#1587F5", deg: 90 }
                  : { from: "#000", to: "#000", deg: 90 }
              }
              radius={8}
              variant="gradient"
              size="md"
            >
              Sign Up
            </Button>
            <Button
              fullWidth
              type="submit"
              radius={8}
              variant="transparent"
              size="md"
             
              c={colorScheme === "dark" ? "#fff" : " #0E1314"}
              style={{
                border: `1px solid ${
                  colorScheme === "dark" ? "#fff" : " #0E1314"
                }`,
              }}
            >
              <Box mr={8}>
                <Image src={"/images/login-google.png"} />{" "}
              </Box>{" "}
              Sign up with Google
            </Button>
          </Flex>
        </form>
        <Flex fw={500} justify={"center"} mt={200}>
          <Text c={colorScheme === "dark" ? "#fff" : "#000"}>
          Already have an Account?{" "}
          </Text>
          <Text component={Link} href={"/login"} c={"#5A4FE3"}>
            {" "}
            Login
          </Text>
        </Flex>
      </Flex>
      <Flex w={"50%"} visibleFrom="lg">
        <RightSide />
      </Flex>
    </Flex>
  );
}
