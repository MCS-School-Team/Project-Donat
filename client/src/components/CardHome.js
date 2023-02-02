import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";



export default function CardHome({kind, text, buttonText, handleSetScreen}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <CardContent>
            <Typography sx={{ fontSize: 24 }}>{kind}</Typography>
            <Typography variant="body2">{text}</Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <CardActions>
            <Button size="small" onClick={() => handleSetScreen()}>{buttonText}</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
