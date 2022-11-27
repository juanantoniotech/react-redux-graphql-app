import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/slices/chars";
import { AppDispatch } from "../../store/store";
import { IRootState } from "../../store/store";
import { Box, Grid } from "@mui/material";
import CharCard from "./components/char-card/char-card";

export type Props = {};

const CharsPage: React.FC<Props> = (props) => {
  const dispatch: AppDispatch = useDispatch();
  const { results: characters } = useSelector(
    (state: IRootState) => state.chars
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2, mt: { xs: 8, md: 9 } }}>
      <Grid container spacing={2}>
        {characters.map((el: any, index: number) => (
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
    </Box>
  );
};

export default CharsPage;