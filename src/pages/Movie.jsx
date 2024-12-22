import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import {
  Box,
  HStack,
  Skeleton,
  SkeletonText,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import MovieDetailSkeleton from "../components/skeleton/MovieDetailSkeleton";
import MovieDetail from "../components/MovieDetail";
import Navbar from "../components/Navbar";
import MovieDetailBanner from "../components/MovieDetailBanner";
import SimilarMovies from "../components/SimilarMovies";
import MovieListSkeleton from "../components/skeleton/MovieListSkeleton";

function Movie() {
  const param = useParams();
  let movieId = param.movieId;
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  const { isLoading, isError, data } = useQuery(
    ["movie", movieId],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
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

      return data;
    }
  );

  useEffect(() => {
    if (data) {
      document.title = `${data.original_title} - Zoro`;
    }
  }, [data]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isError) {
    return <Box>Error</Box>;
  }
  return (
    <VStack>
      {isMobile ? (
        <>
          {isLoading && (
            <>
              <Box width={"full"} height={"50vh"}>
                <Skeleton width={"full"} height={"full"} />
              </Box>
              <VStack alignItems={"flex-start"} px={8} w={"full"}>
                <Box flexGrow={1}>
                  <MovieDetailSkeleton />
                </Box>
                <Box w={"100%"}>
                  <SkeletonText
                    mb={5}
                    skeletonHeight={10}
                    w={200}
                    noOfLines={1}
                  />
                  <MovieListSkeleton
                    numBoxes={9}
                    height="175px"
                    minimumWidth={"100px"}
                  />
                </Box>
              </VStack>
            </>
          )}
          {!isLoading && (
            <VStack>
              <Box mt={2} w="full">
                <Navbar />
              </Box>
              <MovieDetailBanner backdrop={data.backdrop_path} />
              <VStack my={"-60vh"} alignItems={"flex-start"} px={8} w={"full"}>
                <Box w="100%">{!isLoading && <MovieDetail movie={data} />}</Box>

                <Box w={"full"} gap={2}>
                  <SimilarMovies movieId={movieId} />
                </Box>
              </VStack>
            </VStack>
          )}
        </>
      ) : (
        <>
          {isLoading && (
            <>
              <Box width={"full"} height={"50vh"}>
                <Skeleton width={"full"} height={"full"} />
              </Box>
              <HStack
                pt={10}
                px={20}
                alignItems={"flex-start"}
                gap={10}
                w={"full"}
              >
                <Box flexGrow={1}>
                  <MovieDetailSkeleton />
                </Box>
                <Box w={"30%"}>
                  <SkeletonText
                    mb={5}
                    skeletonHeight={10}
                    w={200}
                    noOfLines={1}
                  />
                  <MovieListSkeleton
                    numBoxes={9}
                    height="175px"
                    minimumWidth={"100px"}
                  />
                </Box>
              </HStack>
            </>
          )}
          {!isLoading && (
            <VStack>
              <Box mt={2} w="full">
                <Navbar />
              </Box>
              <MovieDetailBanner backdrop={data.backdrop_path} />
              <HStack
                my={"-25vh"}
                pt={10}
                px={20}
                alignItems={"flex-start"}
                gap={10}
                w={"full"}
              >
                <VStack>
                  <Box flexGrow={1}>
                    {!isLoading && <MovieDetail movie={data} />}
                  </Box>
                </VStack>

                <Box flexShrink={0} gap={2} w={"30%"}>
                  <SimilarMovies movieId={movieId} />
                </Box>
              </HStack>
            </VStack>
          )}
        </>
      )}
    </VStack>
  );
}

export default Movie;
