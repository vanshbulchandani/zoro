import { Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import truncate from "./turnicate";
import { useState } from "react";

const ExpandableText = ({ text, limit, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      {isOpen && (
        <Box>
          <Text {...rest} as={"span"}>
            {text}
          </Text>
          <Button
            as={"span"}
            display={"inline-block"}
            size={"xs"}
            py={1}
            onClick={() => setIsOpen(false)}
          >
            Show Less
          </Button>
        </Box>
      )}
      {!isOpen && (
        <Box>
          <Text {...rest} as={"span"}>
            {truncate(text, limit, false)}{" "}
          </Text>
          <Button
            as={"span"}
            display={"inline-block"}
            size={"xs"}
            py={1}
            onClick={() => setIsOpen(true)}
          >
            Show more
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ExpandableText;

//
