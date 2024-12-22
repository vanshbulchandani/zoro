import { Box } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";

const MovieBannerSkeleton = () => {
  return (
    <Box h="80vh" w="full">
      <Skeleton h={"full"} />
    </Box>
  );
};

export default MovieBannerSkeleton;
