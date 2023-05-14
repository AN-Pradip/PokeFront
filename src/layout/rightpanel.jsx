import React from "react";
import DescScreen from "../components/DescScreen"
import Buttons from "./buttons"

function RightPanel(){
    const polyStyle1 = {
        fill: "white",
        stroke: "none",
        strokeWidth: 3
    } 
    const polyStyle2 = {
        fill: "none",
        stroke: "black",
        strokeWidth: 3
    } 
    return(
        <div id="rightPanel">
            {/*Blank container*/}            
            <div className="empty-container">
                <svg height="100%" width="100%">
                    <polyline
                    points="0,0 0,41 250,41 290,75 1250,75 280,-100 0,0"
                    style={polyStyle1}
                    />
                    <polyline
                    points="0,41 250,41 290,75 1250,75"
                    style={polyStyle2}
                    />
                </svg>
            </div>
            <DescScreen/>
            <Buttons/>
        </div>
    )
}

export default RightPanel;