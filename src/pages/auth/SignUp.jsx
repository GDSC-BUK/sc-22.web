import { Link as PropLink } from "react-router-dom";

// chakra components
import {
  Button,
  Center,
  chakra,
  Heading,
  InputGroup,
  InputLeftAddon,
  Link,
  Input,
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

export default function SignUp() {
  const user_service = new User();

  const mutation = useMutation(user_service.register, {
    onSuccess: (res) => {
      alert(`Your username is ${res.data.username}`);
    },
  });

  const [username, set_username] = useState("");
  const [password, set_password] = useState("");

  return (
    <BaseLayout>
      <Center as="main" w="100vw" p="8" bg="gray.50">
        <VStack spacing="4">
          <Heading color="blue.600" textDecoration="underline">
            Register
          </Heading>
          <chakra.form>
            <InputGroup pb="6">
              <InputLeftAddon children={<FaUser />} />
              <Input
                type="text"
                placeholder="Username (Optional)"
                value={username}
                onChange={({ target: { value } }) => {
                  set_username(value);
                }}
              />
            </InputGroup>
            <InputGroup pb="6">
              <InputLeftAddon children={<MdLock />} />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={({ target: { value } }) => {
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
              Register
            </Button>
          </chakra.form>
          <Text fontSize="md" color="black">
            Already Have an Acccount?{" "}
            <Link as={PropLink} to="/login">
              Login
            </Link>
          </Text>
        </VStack>
      </Center>
    </BaseLayout>
  );
}
