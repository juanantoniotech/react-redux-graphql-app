import React from "react";
import styles from "./favs.module.css";
import Card from "../card/card.component";
import { Typography, Container } from "@mui/material";

export default function FavPage({ characters = [0] }) {
  function renderCharacter(char, i) {
    return <Card key={i} />;
  }
  return (
    <Container sx={{ mt: "100px" }}>
      <Typography component={"h2"}>Personajes</Typography>
      {characters.map(renderCharacter)}
      {!characters.length && <h3>No hay personajes agregados</h3>}
    </Container>
  );
}
