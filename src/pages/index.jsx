// utilities or sth
import { Link as ALink } from "react-router-dom";

// components
import { Center, Heading, Text } from "@chakra-ui/react";
import BaseLayout from "../layouts/BaseLayout";

function Index() {
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
            There
          </Text>
          , <br /> Welcome to Recogram
        </Heading>
      </Center>
    </BaseLayout>
  );
}

export default Index;
// jealousKitten7
