import React from "react";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";

const cardItems = [
  { title: "FOR THE LOVE OF JUSTICE", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "SOUL EXPRESSIONS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "RELATIONSHIPS (Self & Others)", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "RACE & CULTURE", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "OUR MENTAL HEALTH", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "RELIGION & SPIRITUALITY", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "FUN GROUP INTERACTIONS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "SEXUALITY & GENDER ROLES", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "ALL IN THE FAMILY", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "LOVE EXPLORATIONS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "ADDICTION ZONE", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "MUSICAL ENCOUNTERS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "WORDS FROM OUR ANCESTORS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
  { title: "AFFIRMATIONS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus nisi justo faucibus eu." },
];


export default function ImgMediaCard() {

    return (

        <Grid
            container
            spacing={2}
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
        {cardItems.map((item, index) => (
            <CardItem key={index} title={item.title} content={item.content}/>
        ))}

        </Grid>
  );
}
