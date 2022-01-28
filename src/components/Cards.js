import React from "react";
// import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import gameCatagories from '../game/GameCatagories';


export default function Cards() {
    console.log('gameCatagories: ', gameCatagories)


    return (

        <Grid
            container
            spacing={2}
            direction="row"
            justify="space-evenly"
            style={{alignItems: 'flex-start'}}
            alignItems="center"
        >
        {gameCatagories.map((item, index) => (
            <CardItem 
                item
                key={index}
                logo={item.logo} 
                title={item.title}
                editor={item.editor}
                content={item.content}
                path={item.path}
                questions={item.questions}
                id={item.id}
            />
        ))}
        </Grid>
    );
}
