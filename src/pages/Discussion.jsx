import React from "react";
// components
import { Button, Center, chakra, Input, Text, VStack } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";

// layout
import BaseLayout from "../layouts/BaseLayout";

export default function Discussion() {
  // dummy data for discussion
  const discussion = {
    postTitle: "lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut architecto excepturi repudiandae, asperiores ipsam veniam perferendis ratione cum corrupti quod!",
    reply: [
      {
        id: 1,
        comment: "lorem ipsum dolr sit amet, consectetur adipisicing elit",
      },
      {
        id: 2,
        comment: "lorem ipsum dolr sit amet, consectetur adipisicing elit",
      },
      {
        id: 3,
        comment: "lorem ipsum dolr sit amet, consectetur adipisicing elit",
      },
    ],
  };

  return (
    <BaseLayout>
      <Center>
        <VStack
          spacing="2"
          justifyContent="justify-start"
          placeItems="start"
          border="1px solid #999"
          borderRadius="lg"
          px="6"
          py="4"
          my="10"
          maxW="30rem"
        >
          {/* post title */}
          <Text fontWeight="semibold" fontSize="xl">
            {discussion.postTitle}
          </Text>
          {/* post body */}
          <Text>{discussion.content}</Text>
          {/* replies section */}
          <VStack
            as="ul"
            spacing="2"
            justifyContent="justify-start"
            placeItems="start"
            border="1px solid #999"
            borderRadius="lg"
            px="6"
            pb="2"
            my="10"
          >
            {/* section title */}
            <Text fontWeight={"semibold"}>Replies:</Text>

            {/* comment list */}
            {discussion.reply.map((replies) => (
              <Text as="li" key={replies.id}>
                {replies.comment}
              </Text>
            ))}

            {/* adding a new comment */}
            <chakra.form
              display="flex"
              justifyContent="justify-between"
              w="full"
            >
              <Input placeholder="Comment Your Reply" mr="4" />
              <Button colorScheme="blue" rightIcon={<MdSend />}>
                Reply
              </Button>
            </chakra.form>
          </VStack>
        </VStack>
      </Center>
    </BaseLayout>
  );
}
