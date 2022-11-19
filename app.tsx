import React from "react";
import { render } from "react-dom";
import ContentContainer from "./Components/ContentContainer";
import ExampleItem from "./Components/ExampleItem";


let mainPage = (
    <ContentContainer>
        <ExampleItem Name="Item 1"/>
        <ExampleItem Name="Item 2"/>
        <ExampleItem Name="Item 3"/>
    </ContentContainer>
)

render(mainPage, document.getElementById("mainPage"));