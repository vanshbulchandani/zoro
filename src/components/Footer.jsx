import { HStack, Text, Heading, VStack, Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box pos={"relative"}>
      <VStack alignItems={"flex-start"}>
        <HStack gap={20}>
          <Box pt={"30px"} ml={"80px"} w={"20%"}>
            <Heading>kaizoku oni ore wa naru</Heading>
          </Box>
          <VStack alignItems={"flex-start"}>
            <Text mb={"5px"} fontWeight={"bold"}>Contact Detail</Text>
            <Text>Phone : 8851165574</Text>
            <Text>Gmail : choudharyprashant155@gmail.com</Text>
          </VStack>
        </HStack>
        <Text ml={"80px"} fontSize={"2xs"} color={"grey"}>
          This site does not store any files on its server. All contents are
          provided by non-affiliated third parties.
        </Text>
      </VStack>
      <Box
         background="linear-gradient(270deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
         pos={"absolute"}
         width={"90%"}
         height={"full"}
         top={0}
         right={0}
         zIndex={1}
      />
      
    </Box>
  );
};

export default Footer;
