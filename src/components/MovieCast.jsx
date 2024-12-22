import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import MovieListSkeleton from "./skeleton/MovieListSkeleton";
import truncate from "../utils/turnicate";

const MovieCast = ({ movie }) => {
  const { isLoading, isError, data } = useQuery(
    ["movieCredits", movie.id],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
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
      return data.cast;
    }
  );

  if (isLoading) {
    return (
      <MovieListSkeleton minimumWidth={"80px"} height={"120px"} numBoxes={15} />
    );
  }
  return (
    <SimpleGrid gap={5} minChildWidth={"80px"}>
      {data.map((cast,index) => {
        if(index >= 18){
            return null
        }
        if (cast.profile_path === null) {
          return null;
        }
        return (
          <VStack alignItems={"flex-start"}>
            <Image
              w={"100%"}
              //   h={"100px"}
              src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
            />
            <Text w="full" color={"grey"} fontSize={"xs"}>
              <Tooltip label={cast.original_name}>
                {truncate(cast.original_name, 8)}
              </Tooltip>
            </Text>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
};

export default MovieCast;
