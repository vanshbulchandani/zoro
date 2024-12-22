import { SimpleGrid } from "@chakra-ui/react";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieListSkeleton = ({ minimumWidth, height, numBoxes }) => {
  const emptyArray = Array.from({ length: numBoxes }, (_, index) => index + 1);

  return (
    <SimpleGrid
      mt={2}
      gridTemplateColumns={`repeat(auto-fill , minmax(${minimumWidth} , 1fr))`}
      spacing="20px"
    >
      {emptyArray.map((_, index) => (
        <MovieCardSkeleton key={index} height={height} />
      ))}
    </SimpleGrid>
  );
};

export default MovieListSkeleton;
