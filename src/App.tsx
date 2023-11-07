// import { useState } from "react";
import ThreeCanvas from "./Three/ThreeCanvas";

function App() {
  // const [values, setValues] = useState([0, 0, 0, 0, 0, 0]);

  // const handleChange = (index: number, value: string) => {
  //   setValues((prev) =>
  //     prev.map((localValue, localIndex) =>
  //       index === localIndex ? parseInt(value) : localValue
  //     )
  //   );
  // };

  return (
    <div className="app">
      <div className="main-body">
        <h1>Bender Instruments</h1>
        {/* <div className="controls-container">
          {values.map((value, index) => (
            <input
              key={`Range${index}`}
              type="range"
              aria-orientation="vertical"
              min={-125}
              max={25}
              value={value}
              onChange={(event) => handleChange(index, event.target.value)}
              className="slider"
            />
          ))}
        </div> */}
      </div>
      <ThreeCanvas />
    </div>
  );
}

export default App;
