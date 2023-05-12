import React from "react";
import TopLights from "../components/Top-Lights";
import MainScreen from "../components/MainScreen";
import BottomContainer from "./bottomContainer";


function LeftPanel(){
    return(
        <div id="leftPanel">
            <TopLights/>
            <MainScreen/>
            <BottomContainer />
        </div>
    )
}

export default LeftPanel;