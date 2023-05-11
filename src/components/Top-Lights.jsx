import React from "react";

function TopLights(){
    const mystyle = {
        fill: "none",
        stroke: "black",
        strokeWidth: 3
    } 
    return(
        <div className="left-top-container">
          <svg height="150" width="453" className="left-svg">
            <polyline
              points="0,75 190,75 210,38 565,38"
              style={mystyle}
            />
          </svg>
          <div className="lights-container">
            <div className="big-light-boarder">
              <div className="big-light blue">
                <div className="big-dot light-blue"></div>
              </div>
            </div>
            <div className="small-lights-container">
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
              <div className="small-light yellow">
                <div className="dot light-yellow"></div>
              </div>
              <div className="small-light green">
                <div className="dot light-green"></div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default TopLights;