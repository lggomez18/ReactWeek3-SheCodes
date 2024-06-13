import React from "react";

export default function Countries(props) {
  return (
    <div className="Countries">
      <ul>
        {props.countries.map(function (country, index) {
          return (
            <li key={index}>
              The capital of {country.name} is {country.capital}.
            </li>
          );
        })}
      </ul>
    </div>
  );
}

//Add a key to certain variables to avoid bugs in the console log when developing programs in react.
