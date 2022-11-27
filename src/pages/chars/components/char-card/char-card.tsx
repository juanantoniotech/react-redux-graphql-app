import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export type Props = {
  name: string;
  birth_day: string;
  height: string;
  gender: string;
  url: string;
};

const CharCard: React.FC<Props> = ({
  name,
  birth_day,
  height,
  gender,
  url,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {birth_day}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {height}
        </Typography>
        <Typography variant="body2">gender: {gender}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={url}>
          See details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharCard;
