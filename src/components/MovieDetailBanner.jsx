import React from "react";
import { Box } from "@chakra-ui/react";
const MovieDetailBanner = ({ backdrop }) => {
  return (
    <Box
      backgroundPosition="center"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundImage={`url("https://image.tmdb.org/t/p/original/${backdrop}")`}
      h="60vh"
      w="full"
      pos={"relative"}
      zIndex={-1}
    >
      <Box
        background="linear-gradient(180deg,rgba(17,17,17,0 ) 0, rgba(26, 32, 44,1)  100%)"
        pos={"absolute"}
        width={"full"}
        height={"100% "}
        bottom={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(180deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"full"}
        height={"60% "}
        top={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(90deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"50%"}
        height={"full"}
        top={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(270deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"50%"}
        height={"full"}
        top={0}
        right={0}
        zIndex={1}
      />
    </Box>
  );
};

export default MovieDetailBanner;
