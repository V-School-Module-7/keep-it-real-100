import React from "react";
// import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import GameCatagories from './game/CatagoryData';


export default function Cards() {
    

    return (

        <Grid
            container
            spacing={2}
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
        {GameCatagories.map((item, index) => (
            <CardItem 
                key={index} 
                title={item.title}
                content={item.content}
                path={item.path}
                questions={item.questions}
                id={item.id}
            />
        ))}
    console.log(cardItem)
        </Grid>
    );
}
