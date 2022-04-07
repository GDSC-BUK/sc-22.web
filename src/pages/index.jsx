// utilities or sth
import { useEffect } from "react";
import { Link as ALink, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import User from "../services/user";

// components
import { Center, Heading, Text } from "@chakra-ui/react";
import BaseLayout from "../layouts/BaseLayout";

function Index() {
  const user_service = new User();
  const { data, isError } = useQuery("profile", user_service.get_profile);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data?.data.username) {
      navigate("/login");
    }
  }, []);

  return (
    <BaseLayout>
      <Center px="8" py="4">
        <Heading as="p" textAlign="center">
          Hello{" "}
          <Text
            as={ALink}
            to="/dashboard"
            color="blue.600"
            textDecoration="underline"
          >
            {data?.data.username}
          </Text>
          , <br /> Welcome to Recogram
        </Heading>
      </Center>
    </BaseLayout>
  );
}

export default Index;
// jealousKitten7
