import { Link as ALink, useNavigate, useLocation } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import Forum from "../services/forum";
import User from "../services/user";
import { useState } from "react";
// components
import { Button, Center, chakra, Input, Text, VStack } from "@chakra-ui/react";
import { MdSend } from "react-icons/md";

// layout
import BaseLayout from "../layouts/BaseLayout";

export default function Discussion() {
  // get page url
  const location = useLocation();

  // get the current page id
  const current = location.pathname.slice(12);

  // pass it to react query to get discussion details
  const forum_service = new Forum();
  const { data, isLoading } = useQuery(["discussion", current], () =>
    forum_service.get_discussion(current)
  );

  // get user profile
  const user_service = new User();
  const query = useQuery("profile", user_service.get_profile);

  const navigate = useNavigate();

  const mutationDelete = useMutation(forum_service.delete_discussion, {
    onSuccess: () => {
      alert("Successful deleted post");
      navigate("/dashboard");
    },
    onError: (err) => {
      alert(err);
    },
  });

  const mutation = useMutation(forum_service.reply_to_discussion, {
    onSuccess: () => {
      alert("Successfuly replied");
      // navigate("/dashboard");
    },
    onError: (err) => {
      alert(err);
    },
  });

  const __reply_to_discussion = (discussion_id, reply_data) => {
    mutation.mutate(discussion_id, reply_data)
  }

  const [body, set_body] = useState("");

  return (
    <BaseLayout>
      <Center>
        <Button as={ALink} to="/dashboard">
          Go back
        </Button>
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
          {/* loading state */}
          {isLoading ? "" : "please wait while post is loading"}

          {/* post title */}
          {/* {discuss} */}
          <Text fontWeight="semibold" fontSize="xl">
            {data?.data.title}
          </Text>
          {/* post body */}
          <Text>{data?.data.body}</Text>
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
            {data?.data.replies.map((reply) => (
              <Text as="li" key={reply.id}>
                {reply.body}
              </Text>
            ))}

            {/* adding a new comment */}
            <chakra.form
              display="flex"
              justifyContent="justify-between"
              w="full"
            >
              <Input
                placeholder="Comment Your Reply"
                mr="4"
                value={body}
                onChange={({ target: { value } }) => {
                  set_body(value);
                }}
              />
              <Button
                colorScheme="blue"
                rightIcon={<MdSend />}
                onClick={(e) => {
                  e.preventDefault();

                  __reply_to_discussion(current, {
                    body,
                    user_id: query?.data.data.id,
                  });
                }}
              >
                Reply
              </Button>
            </chakra.form>
          </VStack>
          <Button
            colorScheme={"red"}
            onClick={() => {
              mutationDelete.mutate(current);
            }}
          >
            Delete Post
          </Button>
        </VStack>
      </Center>
    </BaseLayout>
  );
}
