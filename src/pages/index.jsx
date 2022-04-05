import { Center, Heading, Text } from "@chakra-ui/react";
import BaseLayout from "../layouts/BaseLayout";

function Index() {
  let user = "Struckchure";

  return (
    <BaseLayout>
      <Center px="8" py="4">
        <Heading as="p" textAlign="center">
          Hello{" "}
          <Text as="span" color="blue.600" textDecoration="underline">
            {user}
          </Text>
          , <br /> Welcome to Recogram
        </Heading>
      </Center>
    </BaseLayout>
  );
}

export default Index;
