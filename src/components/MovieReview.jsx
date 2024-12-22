import React from "react";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import ExpandableText from "../utils/ExpandableText";
import { Spinner } from "@chakra-ui/react";
import { MdOutlineSmsFailed } from "react-icons/md";

const MovieReview = ({ movieId }) => {
  const { isLoading, isError, data } = useQuery(
    ["movieReviews", movieId],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg0NjAxOTM1YmZmMmE5MmUwNmVjN2ZmMjc5N2IzMyIsInN1YiI6IjY0OTIyNjBiZWRhNGI3MDBlYzRiNGE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxkjHIi3cqFyE-vt-MCUQBPJOTaVKa57_8iIZm-n_hU",
          },
        }
      );
      let data = await response.json();
      return data.results;
    }
  );

  if (isLoading) {
    return (
      <HStack w="full" justifyContent={"center"} mt={20}>
        <Spinner />
      </HStack>
    );
  }
  if (data.length == 0) {
    return (
      <VStack mt={10} justify={"center"} w="full">
        <MdOutlineSmsFailed fill="grey" size={"40"} />
        <Text color={"grey"} fontSize={"md"}>
          Nothing to show
        </Text>
      </VStack>
    );
  }
  return (
    <VStack alignItems={"flex-start"} gap={5}>
      {data.map((author,index) => {
       
        return (
          <VStack w={"full"} alignItems={"flex-start"} gap={2}>
            <Text>{author.author}</Text>
            <ExpandableText
              fontSize="xs"
              color="grey"
              text={author.content}
              limit={150}
            />
          </VStack>
        );
      })}
    </VStack>
  );
};

export default MovieReview;

// author , content
