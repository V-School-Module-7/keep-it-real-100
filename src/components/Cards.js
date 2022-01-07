import React from "react";
// import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import GameCatagories from '../game/GameCatagories';


export default function Cards() {
    

    return (

        <Grid
            container
            spacing={2}
            direction="row"
            justify="space-evenly"
            style={{alignItems: 'flex-start'}}
            alignItems="center"
            
        >
        {GameCatagories.map((item, index) => (
            <CardItem 
                item
                key={index} 
                title={item.title}
                content={item.content}
                path={item.path}
                questions={item.questions}
                id={item.id}
            />
        ))}
        </Grid>
    );
}
