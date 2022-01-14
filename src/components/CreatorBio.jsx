
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boldBodyText: {
    fontWeight: "bolder",
    fontSize: "large",
    textAlign: "center",
  },
}));

export default function CreatorsPage({bio, proTitle, personName}) {
  const classes = useStyles();

  return (
    <div>

<Grid
        container
        direction="row"

      >
        <Box
          component="span"
          sx={{
            mb: 3,
            mt:5,
            ml:5,
            mr:5,
            p: 5,
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "#747EE8",
          }}
        >
          <Grid container columnSpacing={2}>
            <Grid item xs={12} md={4} lg={2} textAlign={"center"}>
              <Box
                sx={{
                  m: "auto",
                  mb: 2,
                  borderRadius: 20,
                  width: 150,
                  height: 150,
                  backgroundColor: "#ccc",
                }}
              ></Box>
              <Typography className={classes.boldBodyText}>
                {personName}
              </Typography>
              <Typography variant="subtitle">{proTitle}</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1">
                {bio}
              </Typography>
            </Grid>
            </Grid>
            </Box>
            </Grid>

    </div>
  );
}
