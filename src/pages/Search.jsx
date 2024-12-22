import React from "react";
import { useLocation, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import { Box, Text, SimpleGrid, SkeletonText } from "@chakra-ui/react";
import MovieListSkeleton from "../components/skeleton/MovieListSkeleton";
import MovieCard from "../components/MovieCard";
import { useState, useRef, useCallback, useEffect } from "react";

function Search() {
  const [pageNumber, setPageNumber] = useState(1);
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let searchMovie = searchParams.get("q");

  useEffect(() => {
    setMovies([]);
    document.title = `${searchMovie} - Zoro`;
  }, [searchMovie]);

  const { isLoading, isError, data } = useQuery(
    ["searchmovie", searchMovie, pageNumber],
    async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?page=${pageNumber}&query=${searchMovie}`,
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
      console.log(data.results);
      return data.results;
    },
    {
      onSuccess: (newData) => {
        setMovies((prevData) => [...prevData, ...newData]);
      },
    }
  );

  const observer = useRef();
  const lastMovieItemRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data.length != 0) {
          setPageNumber(pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, pageNumber]
  );

  if (isError) {
    return <Box>Error</Box>;
  }

  return (
    <Box>
      <Box mt={2} w="full">
        <Navbar />
      </Box>
      <Box w={{md: '100%',base: '90%'}} px={{md: 5,base: 0}} mx={{md: 0, base: 5}}>
        <Box mt={5} mb={5}>
          {isLoading && pageNumber == 1 ? (
            <SkeletonText skeletonHeight={10} w={150} noOfLines={1} />
          ) : (
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              Search results for "{searchMovie}"
            </Text>
          )}
        </Box>
        {((isLoading && pageNumber == 1) || movies.length === 0) && (
          <MovieListSkeleton numBoxes={20} height={250} minimumWidth="150px" />
        )}
        {
          <SimpleGrid
            gridTemplateColumns={`repeat(auto-fill , minmax(150px , 1fr))`}
            spacing="20px"
          >
            {movies.map((movie, index) => {
              return (
                <Box
                  maxW={"175px"}
                  key={index}
                  ref={index + 1 == movies.length ? lastMovieItemRef : null}
                >
                  <MovieCard movieData={movie} />
                </Box>
              );
            })}
          </SimpleGrid>
        }
        {isLoading && pageNumber != 1 && (
          <MovieListSkeleton numBoxes={20} height={250} minimumWidth="150px" />
        )}
      </Box>
    </Box>
  );
}

export default Search;
