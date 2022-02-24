import React from "react";
// import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import gameCatagories from '../game/GameCatagories';


export default function Cards() {
    console.log('gameCatagoriesQs: ', gameCatagories.questions)


    return (

        <Grid
            container
            spacing={4}
            // rowSpacing={4} 
            // columnSpacing={{ xs: 2}}
            direction="row"
            justify="space-evenly"
            style={{alignItems:'flex-start', padding:'40px'}}
            alignItems="center"
        >
            
        {gameCatagories.map((item, index) => (
            
            <Grid item >
                <CardItem 
                    item
                    xs={3}
                    key={index}
                    logo={item.logo} 
                    title={item.title}
                    editor={item.editor}
                    content={item.content}
                    path={item.path}
                    questions={item.questions}
                    id={item.id}
                />
            </Grid>
        ))}
        </Grid>
    );
}
