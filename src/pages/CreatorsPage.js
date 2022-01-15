import { CssBaseline } from "@material-ui/core";
import React from "react";
import Social from "../components/Social";
import CreatorBio from "../components/CreatorBio";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function CreatorsPage() {
  return (
    <div>
      <CssBaseline />
      <Social />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="span"
          sx={{ mt: 5, typography: "h4", fontWeight: 700, textAlign: "center" }}
        >
          CREATORS
        </Box>
      </Grid>

      <CreatorBio
        personName={"Leslie"}
        proTitle={"Professional Title"}
        bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum."
      ></CreatorBio>

<CreatorBio
        personName={"Laney"}
        proTitle={"Professional Title"}
        bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum."
      ></CreatorBio>

<CreatorBio
        personName={"Person Name"}
        proTitle={"Professional Title"}
        bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum."
      ></CreatorBio>
    </div>
  );
}
