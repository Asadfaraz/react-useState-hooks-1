import "./App.css";
import React, { useState } from "react";
// importing hook

function App() {
  // Setting useState Hook
  const [title, setTitle] = useState("Learning React Hooks Lesson 1");

  // Button click and changing title function
  const changeTitleBtn = () => {
    if (title == "Learning React Hooks Lesson 1") {
      setTitle("Title Changed... Yesss!!!");
    } else {
      setTitle("Learning React Hooks Lesson 1");
    }
  };

  return (
    <React.Fragment className="App">
      <section>
        <h1>{title}</h1>

        {/* Button to change title */}
        <button type="button" onClick={changeTitleBtn}>
          Change Title
        </button>
      </section>
    </React.Fragment>
  );
}

export default App;
