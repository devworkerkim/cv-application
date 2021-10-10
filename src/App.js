import React from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>CV Project | The Odin Project</h1>
        <Info />
        <Education />
        <Experience />
      </div>
    )
  }
}

export default App;