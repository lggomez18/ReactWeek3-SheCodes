import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import Baltic from "./Baltic";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let countries = ["France", "USA", "Australia", "Japan"];
root.render(
  <StrictMode>
    <div className="App">
      <h1>React Loops</h1>

      <h3>Challenge 1</h3>
      <p>
        Create a new Component called BalticCountries and list the 3 baltic
        countries (Estonia, Latvia, Lithuania) without using loops or variables.
        Include the component below.
      </p>

      <Baltic />

      <h3>Challenge 2</h3>
      <p>
        Include a component called Countries below and send the variable
        countries (created above) as a property. Create a new component called
        Countries and list all countries from the Countries component using a
        loop.
      </p>

      <h3>Challenge 3</h3>
      <p>
        Modify the countries variable in the code above so it includes the
        country name but also the capital city of each country. Display each
        country and capital city in the Countries component
      </p>
    </div>
  </StrictMode>,
);
