import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, IRootState } from "../../store/store";
import { getCharacters } from "../../store/slices/chars";
import { Box, Grid, CircularProgress, Button } from "@mui/material";
import CharCard from "./components/char-card/char-card";

export type Props = {};

const CharsPage: React.FC<Props> = (props) => {
  const dispatch: AppDispatch = useDispatch();

  const {
    loading,
    nextPage,
    results: characters,
  } = useSelector((state: IRootState) => state.chars);

  const goToNextPage = () => {
    dispatch(getCharacters(nextPage));
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2, mt: { xs: 8, md: 9 } }}>
      {loading && (
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Box>
      )}
      <Grid container spacing={2}>
        {!loading &&
          characters.map((el: any, index: number) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CharCard
                name={el.name}
                birth_day={el.birth_year}
                height={el.height}
                gender={el.gender}
                url={el.url}
              />
            </Grid>
          ))}
      </Grid>
      <Button onClick={goToNextPage}>Next Page</Button>
    </Box>
  );
};

export default CharsPage;
