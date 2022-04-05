// components
import { Button, Center, chakra, Input, Textarea } from "@chakra-ui/react";

// layout
import BaseLayout from "../layouts/BaseLayout";

export default function createDiscussion() {
  return (
    <BaseLayout>
      <Center p="8">
        <chakra.form>
          <Input placeholder="Title of Discussion" />
          <Textarea mt="4" placeholder="What are you having problem with?" />
          <Button colorScheme="blue" w="full" mt="4">
            Create Discussion
          </Button>
        </chakra.form>
      </Center>
    </BaseLayout>
  );
}

// implementing socket on maps
