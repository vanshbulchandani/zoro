import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = ({ height }) => {
  return (
    <Box>
      <Skeleton height={height} />
      <SkeletonText mt={2} skeletonHeight={10} noOfLines={1} />
    </Box>
  );
};

export default MovieCardSkeleton;
