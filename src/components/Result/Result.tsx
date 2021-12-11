import { Box, Grid, SimpleGrid, Wrap } from "@chakra-ui/react";
import React from "react";
import { MovieResult } from "../../../pages";
import ResultItem from "./ResultItem";

interface Props {
  movieResults: MovieResult[];
}

const Result = ({ movieResults }: Props) => {
  return (
    <Grid
      as="ul"
      w="90%"
      mx="auto"
      mt={4}
      templateColumns={["1fr", null, "repeat(3,1fr)"]}
      gap={8}
    >
      {movieResults.map((result) => {
        return (
          <ResultItem
            key={result.title}
            poster_path={result.poster_path}
            backdrop_path={result.backdrop_path}
            overview={result.overview}
            title={result.title}
            original_title={result.original_title}
            vote_count={result.vote_count}
            release_date={result.release_date}
          />
        );
      })}
    </Grid>
  );
};

export default Result;
