import React from "react";
import TopLights from "../components/Top-Lights";
import MainScreen from "../components/MainScreen";


function LeftPanel(props){
    return(
        <div id="leftPanel">
            <TopLights/>
            <MainScreen/>
        </div>
    )
}

export default LeftPanel;