import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import turnicate from "../utils/turnicate";
import { BiStar } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const MovieCard = ({ movieData, h = 250 }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Link to={`/movie/${movieData.id}`}>
      <Box
        pos={"relative"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          h={h}
          w="full"
          borderRadius={"md"}
          objectFit="cover"
          src={`https://image.tmdb.org/t/p/w185${movieData.poster_path}`}
        />
        {isHovering && (
          <Box
            zIndex={1}
            w={"full"}
            h={"full"}
            pos={"absolute"}
            top={0}
            left={0}
          >
            <HStack
              w="full"
              h={"full"}
              alignItems={"center"}
              justifyContent={"center"}
              background="rgba(0, 0, 0, 0.5)"
            >
              <Box>
                <BsFillPlayCircleFill fill="#00acc1" size={"55"} />
              </Box>
            </HStack>
          </Box>
        )}
      </Box>
      <VStack pt={2} alignItems="flex-start" gap={1}>
        <Text as="b" fontSize="sm">
          <Tooltip label={movieData.original_title}>
            {turnicate(movieData.original_title, 15)}
          </Tooltip>
        </Text>
        <HStack
          color={"grey"}
          fontSize="xs"
          w={"full"}
          justifyContent={"space-between"}
        >
          <Text>{movieData.release_date}</Text>
          <HStack gap={1}>
            <BiStar />
            <Text>{movieData.vote_average}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Link>
  );
};

export default MovieCard;
