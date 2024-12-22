import {
  Box,
  HStack,
  SkeletonText,
  Skeleton,
  VStack,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const MovieDetailSkeleton = () => {
  const [isMobile] = useMediaQuery("(max-width: 62em)");
  return (
    <>
      {isMobile ? (
        <>
          <VStack gap={5} alignItems={"flex-start"}>
            <HStack w={"full"}>
              <Skeleton height={10} w={"50px"} />
              <Skeleton height={10} w={"50px"} />
              <HStack ml={"auto"}>
                <Skeleton borderRadius={100} height={10} w={"75px"} />
              </HStack>
            </HStack>
            <SkeletonText mb={5} skeletonHeight={10} w={"100%"} noOfLines={5} />
            <HStack w={"full"} mt={5}>
              <Skeleton height={10} w={"100px"} />
              <Skeleton height={10} w={"100px"} />
              <Skeleton height={10} w={"100px"} />
            </HStack>
            <Box mt={5} w={"full"}>
              <Skeleton height={300} w={"full"} />
            </Box>
          </VStack>
        </>
      ) : (
        <>
          <HStack gap={5} alignItems={"flex-start"}>
            <Skeleton w={"30%"} h={"400px"} />
            <VStack alignItems={"flex-start"} flexGrow={1} w={"60%"}>
              <SkeletonText
                mb={5}
                skeletonHeight={10}
                w={"60%"}
                noOfLines={1}
              />
              <HStack w={"full"}>
                <Skeleton height={10} w={"50px"} />
                <Skeleton height={10} w={"50px"} />
                <HStack ml={"auto"}>
                  <Skeleton borderRadius={100} height={10} w={"75px"} />
                  <Skeleton borderRadius={100} height={10} w={"75px"} />
                </HStack>
              </HStack>
              <SkeletonText
                mt={5}
                skeletonHeight={10}
                w={"100%"}
                noOfLines={2}
              />
              {/* <Skeleton mt={5} w={"100%"} h={"150px"} /> */}
              <HStack w={"full"} mt={5}>
                <Skeleton height={10} w={"100px"} />
                <Skeleton height={10} w={"100px"} />
                <Skeleton height={10} w={"100px"} />
              </HStack>
              <Box mt={5} w={"full"}>
                <Skeleton height={300} w={"full"} />
              </Box>
            </VStack>
          </HStack>
        </>
      )}
    </>
  );
};

export default MovieDetailSkeleton;
