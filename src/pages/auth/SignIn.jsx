import { Link as PropLink } from "react-router-dom";

// chakra components
import {
  Button,
  Center,
  chakra,
  Heading,
  InputGroup,
  InputLeftAddon,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

// font
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";

// layout
import BaseLayout from "../../layouts/BaseLayout";
import { useState } from "react";
import { useMutation } from "react-query";

import User from "../../services/user";

export default function SignIn() {
  // Mutations

  const user_service = new User();

  const mutation = useMutation(user_service.login, {
    onSuccess: () => {
      alert("Login successful");
    },
  });

  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  return (
    <BaseLayout>
      <Center as="main" w="100vw" p="8" bg="gray.50">
        <VStack spacing="4">
          <Heading color="blue.600" textDecoration="underline">
            Sign In
          </Heading>
          <chakra.form>
            <InputGroup pb="6">
              <InputLeftAddon children={<FaUser />} />
              <Input
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={({ value }) => {
                  set_username(value);
                }}
              />
            </InputGroup>
            <InputGroup pb="6">
              <InputLeftAddon children={<MdLock />} />
              <Input
                type="password"
                placeholder="Type your password"
                value={password}
                onChange={({ value }) => {
                  set_password(value);
                }}
              />
            </InputGroup>
            <Button
              w="full"
              colorScheme="blue"
              onClick={() => {
                mutation.mutate({
                  username,
                  password,
                });
              }}
            >
              Login
            </Button>
          </chakra.form>
          <Text fontSize="md" color="black">
            Don't have an account?{" "}
            <Link as={PropLink} to="/register">
              Register here
            </Link>
          </Text>
        </VStack>
      </Center>
    </BaseLayout>
  );
}
