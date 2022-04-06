// components
import { Button, Center, chakra, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

// layout
import BaseLayout from "../layouts/BaseLayout";
import User from "../services/user";
import Forum from "../services/forum";

export default function createDiscussion() {
  const navigate = useNavigate();

  const [title, set_title] = useState("");
  const [body, set_body] = useState("");

  const user_service = new User();
  const forum_service = new Forum();

  const query = useQuery("user", user_service.get_profile);

  const mutation = useMutation(forum_service.start_discussion, {
    onSuccess: (res) => {
      alert("Discussion added");
      navigate("/dashboard");
    },
    onError: (err) => {
      alert(err);
    },
  });

  const __create_discussion = (e) => {
    e.preventDefault();

    mutation.mutate({
      title,
      body,
      user_id: query.data.data.id,
    });
  };

  return (
    <BaseLayout>
      <Center p="8">
        <chakra.form>
          <Input
            placeholder="Title of Discussion"
            value={title}
            onChange={({ target: { value } }) => {
              set_title(value);
            }}
          />
          <Textarea
            mt="4"
            placeholder="What are you having problem with?"
            value={body}
            onChange={({ target: { value } }) => {
              set_body(value);
            }}
          />
          <Button
            type="submit"
            colorScheme="blue"
            w="full"
            mt="4"
            onClick={__create_discussion}
          >
            Create Discussion
          </Button>
        </chakra.form>
      </Center>
    </BaseLayout>
  );
}

// implementing socket on maps
