// utilities or sth
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link as PropLink, useNavigate } from "react-router-dom";
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

  // get token from localStorage
  const isAuthenticated = localStorage.getItem("token") ? true : false;

  const navigate = useNavigate();

  const userService = new User();
  const { data } = useQuery("profile", userService.get_profile);

  return (
    <>
      <HStack as="header" px="8" py="4">
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
          <Heading color="homepageColor.blue">Recogram</Heading>
        </Link>
        <Spacer />
        {isAuthenticated ? (
          <Button
            isloading
            colorScheme="blue"
            rightIcon={<MdLogin />}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Logout {data?.data.username}
          </Button>
        ) : (
          <Button
            as={PropLink}
            to="/login"
            colorScheme="blue"
            rightIcon={<MdLogin />}
          >
            Login
          </Button>
        )}
      </HStack>
      {children}
      <Center as="footer" color="blue.900">
        Recogram &copy;2022
      </Center>
    </>
  );
}
