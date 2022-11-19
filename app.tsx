import { Button, Fab } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import ContentContainer from "./Components/ContentContainer";
import NavigationIcon from '@mui/icons-material/Navigation';
import { useState } from "react";
import CourseMenu from "./Components/CourseMenu";


let MainPage = () => {
    const [showMenu, setShowMenu] = useState(true);
    const toggleState = () => setShowMenu((val) => !val);
    return (
        <ContentContainer>
            <div style={{}}>
                <Fab variant="extended" onClick={toggleState}>
                    <NavigationIcon sx={{ mr: 1 }} />
                    {!showMenu ? "Show Menu" : "Hide Menu"}
                </Fab>
                {showMenu && <CourseMenu />}
            </div>
        </ContentContainer>
    )
};

render(<MainPage />, document.getElementById("mainPage"));