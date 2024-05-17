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
import { useSearchParams } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

export default function ResetPassword() {
  const { colorScheme } = useMantineColorScheme();
  const searchParam = useSearchParams();

  // Access the `access_token` from the URL
  const accessToken = searchParam.get('access_token');
  console.log("🚀 ~ ResetPassword ~ accessToken:", accessToken)
  const form = useForm({
    initialValues: {
        password: "",
      conpassword: "",
    },
    validate: {
        password: (value) => (value.trim() ? null : "Password is required"),
        conpassword: (value) => (value.trim() ? null : "Confirm password  is required"),
    },
  });
  const handleSubmit = async (values) => {
    if (form.validate().hasErrors) {
      return;
    };
    const { error } = await supabase().auth.updateUser(accessToken, {
      password: values.password,
    });

    if (error) {
      notifications.show({
        color: 'red',
        title: 'Error',
        message: error.message,
        autoClose: true,
        withCloseButton: true,
      });
    } else {
      notifications.show({
        color: 'green',
        title: 'Success',
        message: 'Your password has been reset.',
        autoClose: true,
        withCloseButton: true,
      });
      // router.push('/login');
    }
    
  };
  return (
    <Flex bg={"#fff"} h={"100%"} justify={"center"}>
      <Flex
        w={"50%"}
        h={"100vh"}
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
          New Password
        </Text>
        <Text c={colorScheme === "dark" ? "black.5" : "black.7"}>
        Enter a new password below to regain access to your Sheppard.io <br/> account.
        </Text>
        <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction={"column"} mt={40} gap={"lg"}>
            <TextInput
            style={useTextInputStyles(colorScheme).input}
            size="md"
              label="Password"
              variant="unstyled"
              placeholder="password"
              {...form.getInputProps("password")}
            />
            <TextInput
              style={useTextInputStyles(colorScheme).input}
              size="md"
              label="Confirm Password"
              variant="unstyled"
              placeholder="confirm password"
              {...form.getInputProps("conpassword")}
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
              Update Password
            </Button>
          
          </Flex>
        </form>
        <Flex fw={500} justify={"center"} mt={2}>
          <Text c={colorScheme === "dark" ? "#fff" : "#000"}>
            Back to {" "}
          </Text>
          <Text component={Link} href={"/login"} c={"#5A4FE3"}>
            {" "}
            &nbsp;  Login
          </Text>
        </Flex>
      </Flex>
      <Flex w={"50%"} visibleFrom="lg">
        <RightSide />
      </Flex>
    </Flex>
  );
}
