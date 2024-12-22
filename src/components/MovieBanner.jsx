import {
  Box,
  VStack,
  Text,
  Heading,
  Tooltip,
  Button,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import MovieBannerSkeleton from "./skeleton/MovieBannerSkeleton";
import truncate from "../utils/turnicate";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import {
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  LinkedinIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

function MovieBanner({ movie }) {
  if (movie === undefined) {
    return <MovieBannerSkeleton />;
  }

  const [isMobile] = useMediaQuery("(max-width: 62em)");

  return (
    <Box
      backgroundPosition="center"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundImage={`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}
      h={{ md: "80vh", base: "60vh" }}
      w="full"
      pos={"relative"}
    >
      <Box top={2} width={"full"} pos={"absolute"} zIndex={100}>
        <Navbar />
      </Box>

      <VStack
        transform={"translateY(-50%)"}
        alignItems={"flex-start"}
        w={{ md: "500px", base: "full" }}
        zIndex={10}
        pos="absolute"
        top={{md: "50%",base:"80%"}}
        px={{ md: 0, base: "5" }}
        left={{ md: "20", base: "0" }}
      >
        <Heading fontWeight={"bold"} size={{ md: "xl", base: "lg" }}>
          {movie.original_title}
        </Heading>
        <Tooltip outline={""}>
          <Text fontSize={"sm"} w="100%" color="grey">
            {truncate(movie.overview, isMobile ? 100 : 170)}
          </Text>
        </Tooltip>
        <Button mt={"5"} fontSize={"sm"} fontWeight={"sm"}>
          <Link to={`/movie/${movie.id}`}>Watch Now</Link>
        </Button>
      </VStack>
      <Box
        background="linear-gradient(180deg,rgba(17,17,17,0 ) 0, rgba(26, 32, 44,1)  100%)"
        pos={"absolute"}
        width={"full"}
        height={"100% "}
        bottom={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(180deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"full"}
        height={"20% "}
        top={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(90deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"50%"}
        height={"full"}
        top={0}
        left={0}
        zIndex={1}
      />
      <Box
        background="linear-gradient(270deg, rgba(26, 32, 44, 1) 0, rgba(17, 17, 17, 0) 100%)"
        pos={"absolute"}
        width={"20%"}
        height={"full"}
        top={0}
        right={0}
        zIndex={1}
      />

      <HStack
        pos={"absolute"}
        width={"full"}
        pl={{md:0,base:40}}
        bottom={{md:"2rem",base:"0rem"}}
        zIndex={10}
        justifyContent={"center"}
        gap={5}
      >
        <WhatsappShareButton
          title="Hey Checkout this awesome website, where you can watch movies for free."
          url={"https://zoro-psi.vercel.app/"}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <LinkedinShareButton
          title="Hey Checkout this awesome website, where you can watch movies for free."
          url={"https://zoro-psi.vercel.app/"}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
        <TwitterShareButton
          title="Hey Checkout this awesome website, where you can watch movies for free."
          url={"https://zoro-psi.vercel.app/"}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </HStack>
    </Box>
  );
}

export default MovieBanner;
