import React from "react";
import { Typography, Grid, Button } from "@mui/material";

export type Props = {};

const LoginPage: React.FC<Props> = (props) => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="top"
      direction={"column"}
      sx={{ minHeight: "100vh", backgroundColor: "white", padding: 4 }}
    >
      <Typography sx={{ mb: 10 }} component={"h1"}>
        Login
      </Typography>

      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained">Ingresar</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
