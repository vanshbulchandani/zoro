import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Box, Text, Image } from "@chakra-ui/react";
import MovieTrailer from "./MovieTrailer";
import MovieCast from "./MovieCast";
import MovieReview from "./MovieReview";

const MovieTabs = ({ movie }) => {
  return (
    <Tabs variant={"enclosed"} mt={5}>
      <TabList>
        <Tab>Trailer</Tab>
        <Tab>Cast</Tab>
        <Tab>Review</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box mt={3} h={"50vh"}>
            <MovieTrailer movieId={movie.id} />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box mt={3}>
            <MovieCast movie={movie} />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box mt={3}>
            <MovieReview movieId={movie.id} />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MovieTabs;
