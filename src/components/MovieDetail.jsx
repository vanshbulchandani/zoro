import React from "react";
import {
  Box,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import {
  AiFillStar,
  AiFillLike,
  AiFillDislike,
  AiOutlineFieldTime,
} from "react-icons/ai";

import { BiSolidTimeFive } from "react-icons/bi";
import MovieTabs from "./MovieTabs";
import { useMediaQuery } from "@chakra-ui/react";

const MovieDetail = ({ movie }) => {
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  return (
    <>
      {isMobile ? (
        <>
          <VStack>
            <HStack w={"100%"} h={"400px"}>
              <Box>
                <Image
                  pl={5}
                  
                  borderRadius={"md"}
                  objectFit="cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </Box>
              <Heading w='100%' size={"lg"}>{movie.original_title}</Heading>
            </HStack>
            <VStack mt={-2} alignItems={"flex-start"} flexGrow={1} w={"100%"}>
              <HStack w={"full"} gap={5}>
                <HStack gap={1}>
                  <AiFillStar />
                  <Box fontSize={"sm"}>{movie.vote_average}</Box>
                </HStack>

                <HStack gap={1}>
                  <BiSolidTimeFive />
                  <Box fontSize={"sm"}>{movie.runtime} min</Box>
                </HStack>
                <HStack ml={"auto"}>
                  <Button leftIcon={<AiFillLike />} size={"sm"}>
                    Like
                  </Button>
                </HStack>
              </HStack>
              <Text color={"grey"} mt={5} fontSize={"sm"}>
                {movie.overview}
              </Text>
              <Box w={"full"}>
                <MovieTabs movie={movie} />
              </Box>
            </VStack>
          </VStack>
        </>
      ) : (
        <>
          <HStack gap={5} alignItems={"flex-start"}>
            <Box w={"30%"} h={"400px"}>
              <Image
                w={"full"}
                borderRadius={"md"}
                objectFit="cover"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </Box>
            <VStack alignItems={"flex-start"} flexGrow={1} w={"60%"}>
              <Heading size={"lg"}>{movie.original_title}</Heading>
              <HStack gap={5} w={"full"}>
                <HStack gap={1}>
                  <AiFillStar />
                  <Box fontSize={"sm"}>{movie.vote_average}</Box>
                </HStack>

                <HStack gap={1}>
                  <BiSolidTimeFive />
                  <Box fontSize={"sm"}>{movie.runtime} min</Box>
                </HStack>
                <HStack ml={"auto"}>
                  <Button leftIcon={<AiFillLike />} size={"sm"}>
                    Like
                  </Button>
                  <Button leftIcon={<AiFillDislike />} size={"sm"}>
                    Dislike
                  </Button>
                </HStack>
              </HStack>
              <Text color={"grey"} mt={5} fontSize={"sm"}>
                {movie.overview}
              </Text>
              <Box w={"full"}>
                <MovieTabs movie={movie} />
              </Box>
            </VStack>
          </HStack>
        </>
      )}
    </>
  );
};

export default MovieDetail;
