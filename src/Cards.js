import React from "react";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import GameCatagories from './game/CatagoryData'


export default function ImgMediaCard() {

    return (

        <Grid
            container
            spacing={2}
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
        {GameCatagories.map((item, index) => (
            <CardItem key={index} title={item.title} content={item.content}/>
        ))}

        </Grid>
    );
}
