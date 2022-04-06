// utilities or sth
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link as PropLink } from "react-router-dom";
import User from "../services/user";

// Components
import {
  Button,
  Center,
  Heading,
  HStack,
  Link,
  Spacer,
} from "@chakra-ui/react";

import { MdLogin } from "react-icons/md";

export default function BaseLayout({ children }) {
  document.title = "Recogram";

  const user_service = new User();
  const { data } = useQuery("profile", user_service.get_profile);

  return (
    <>
      <HStack as="header" px="8" py="4" boxShadow="md">
        <Link
          as={PropLink}
          to="/"
          _hover={{
            border: "none",
          }}
          _focus={{
            border: "none",
          }}
        >
          {" "}
          <Heading color="blue.600">Recogram</Heading>
        </Link>
        <Spacer />
        <Button
          as={PropLink}
          to="login"
          // to={data.data.username ? "/logout" : "/login"}
          colorScheme="blue"
          rightIcon={<MdLogin />}
        >
          {/* {data.data.username ? "Logout" : "Login"} */}
        </Button>
      </HStack>
      {children}
      <Center as="footer" color="blue.900">
        Recogram &copy;2022
      </Center>
    </>
  );
}
