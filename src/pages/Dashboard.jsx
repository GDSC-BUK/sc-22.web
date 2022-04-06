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

export default function Dashboard() {
  const forum_service = new Forum();
  const { data, isLoading } = useQuery(
    "discussions",
    forum_service.get_all_discussions
  );

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
              <Tab _focus={{ outline: "none" }}>Discussions</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {data?.data.map((discussion) =>
                  isLoading ? (
                    "discussions are loading"
                  ) : (
                    <>
                      <VStack
                        as={ALink}
                        to={`/discussion/${discussion.id}`}
                        key={discussion.id}
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
                    </>
                  )
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Box>
    </BaseLayout>
  );
}
