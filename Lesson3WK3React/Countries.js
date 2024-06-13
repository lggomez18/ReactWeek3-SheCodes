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
