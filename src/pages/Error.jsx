import { Center, Box, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = "Page not found - Zoro";
  }, []);

  return (
    <Center w={"full"}>
      <VStack mt={"20vh"} w={"full"}>
        <Heading size={"4xl"} fontWeight={"bold"}>
          Oops!
        </Heading>
        <Text mt={"20px"}>404 - Page Not Found</Text>
        <Text textAlign={"center"}>
          The page you are looking for might have been removed
          <br />
          had its name changed or is temorarily unavailable
        </Text>
        <Box mt={"40px"}>
          <Link to="/">
            <Button size="md">Go to Homepage</Button>
          </Link>
        </Box>
      </VStack>
    </Center>
  );
};

export default Error;
