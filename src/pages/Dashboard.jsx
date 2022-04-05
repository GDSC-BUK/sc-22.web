import { Link as ALink } from "react-router-dom";

// components
import {
  Box,
  Heading,
  Link,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  VStack,
} from "@chakra-ui/react";

// layouts
import BaseLayout from "../layouts/BaseLayout";
import { useQuery } from "react-query";
import Forum from "../services/forum";

let id = 12;

// discussion data
const discuss = [
  {
    id: 1,
    title: "I need funds",
    link: `/discussion/${id}`,
    descr:
      "I needs funds to get a new laptop and a new phone which is very urgent as my current laptop keeps and hanging and my phone camera is spoilt",
  },
  {
    id: 2,
    title: "I need Job",
    link: `/discussion/${id}`,
    descr:
      "I just feel like workking with people sha, if you see any job that is sha frontend , hala me, I know all frameworks you can think of, angular, svelte, react, vue, alpine, preact, ionic, blitz, next, gatsby, remix and so on sha",
  },
];

// replies data
const replies = [
  {
    id: 1,
    postTitle: "Mo needi changi",
    link: `/discussion/${id}`,
    reply:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officiis.",
  },
  {
    id: 2,
    postTitle: "Mo needi changi",
    link: `/discussion/${id}`,
    reply:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officiis.",
  },
  {
    id: 3,
    postTitle: "Mo needi changi",
    link: `/discussion/${id}`,
    reply:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officiis.",
  },
  {
    id: 4,
    postTitle: "Mo needi changi",
    link: `/discussion/${id}`,
    reply:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officiis.",
  },
];

export default function Dashboard() {
  const forum_service = new Forum();
  const query = useQuery("discussions", forum_service.get_all_discussions);

  return (
    <BaseLayout>
      <Box w="full">
        <VStack spacing="6" my="10">
          {/* page heading */}
          <Heading color="blue.600">Welcome to your Dashboard</Heading>
          {/* text */}
          <Text>
            <Link
              as={ALink}
              to="/create"
              fontWeight="semibold"
              color="blue.600"
            >
              Click Here
            </Link>{" "}
            to create a new discussion
          </Text>
          {/* tab to list discussion and replies */}
          <Tabs
            colorScheme="blue"
            boxShadow="md"
            isFitted
            variant="enclosed"
            w="96"
          >
            <TabList>
              <Tab _focus={{ outline: "none" }}>Discussion</Tab>
              <Tab _focus={{ outline: "none" }}>Replies</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {query.data?.data.map((discussion) => (
                  <VStack
<<<<<<< HEAD
                    key={discussion.id}
=======
                    as={ALink}
                    to={discussed.link}
                    key={discussed.id}
>>>>>>> discussions-page
                    spacing="2"
                    justifyContent="justify-start"
                    placeItems="start"
                    border="1px solid #999"
                    borderRadius="lg"
                    px="6"
                    py="4"
                    mb="2"
                  >
                    <Text fontWeight="semibold">{discussion.title}</Text>
                    <Text noOfLines={2}>{discussion.body}</Text>
                  </VStack>
                ))}
              </TabPanel>
              <TabPanel>
                {replies.map((reply) => (
                  <VStack
                    as={ALink}
                    to={reply.link}
                    key={reply.id}
                    spacing="2"
                    justifyContent="justify-start"
                    placeItems="start"
                    border="1px solid #999"
                    borderRadius="lg"
                    px="6"
                    py="4"
                    mb="2"
                  >
                    <Text fontWeight="semibold">{reply.postTitle}</Text>
                    <Text noOfLines={2}>{reply.reply}</Text>
                  </VStack>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Box>
    </BaseLayout>
  );
}
