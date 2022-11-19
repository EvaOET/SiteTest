import React from "react";
import { render } from "react-dom";
import ContentContainer from "./Components/ContentContainer";
import ExampleItem from "./Components/ExampleItem";


let mainPage = (
    <ContentContainer>
        <ExampleItem/>
        <ExampleItem/>
        <ExampleItem/>
    </ContentContainer>
)

render(mainPage, document.getElementById("mainPage"));