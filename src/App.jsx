import React from "react";

import LeftPanel from "./layout/leftPanel";
import RightPanel from "./layout/rightpanel";

function App() {
  return (
    <div id="pokedexWrapper">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
