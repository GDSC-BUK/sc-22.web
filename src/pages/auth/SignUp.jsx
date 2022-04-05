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

export default function SignUp() {
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
              <Input type="text" placeholder="Username (Optional)" />
            </InputGroup>
            <InputGroup pb="6">
              <InputLeftAddon children={<MdLock />} />
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <Button w="full" colorScheme="blue">
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
