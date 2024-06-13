import React from "react";

export default function Countries(props) {
  return (
    <div className="Countries">
      <ul>
        {props.countries.map(function (country) {
          return (
            <li>
              The capital of {country.name} is {country.capital}.
            </li>
          );
        })}
      </ul>
    </div>
  );
}
