import { Button, Fab } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import ContentContainer from "./Components/ContentContainer";
import ExampleItem from "./Components/ExampleItem";
import NavigationIcon from '@mui/icons-material/Navigation';

let mainPage = (
    <ContentContainer>
        <ExampleItem Name="Item 1" />
        <ExampleItem Name="Item 2" />
        <ExampleItem Name="Item 3" />
        <div style={{width: 500}}>
        <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
        </Fab>
        <Button variant="contained">Example Button</Button>
        </div>
    </ContentContainer>
)

render(mainPage, document.getElementById("mainPage"));