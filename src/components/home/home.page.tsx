import React, { useState, useEffect } from "react";
import Card from "../card/card.component";
import styles from "./home.module.css";
import axios from "axios";
import { Container } from "@mui/material";

import { Typography } from "@mui/material";

let URL = "https://rickandmortyapi.com/api";

export default function Home() {
  let [chars, setChars] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  function nextChar() {
    chars.shift();
    if (!chars.length) {
      //get more characters
    }
    setChars([...chars]);
  }

  function renderCharacter() {
    let char = chars[0];
    return <Card leftClick={nextChar} {...char} />;
  }

  function getCharacters() {
    return axios.get(`${URL}/character`).then((res) => {
      setChars(res.data.results);
    });
  }

  return (
    <Container sx={{ mt: 3 }}>
      <Typography>Personajes</Typography>
      <div>{renderCharacter()}</div>
    </Container>
  );
}
