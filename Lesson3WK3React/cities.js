import React from "react";

export default function Cities() {
  let city = ["Paris", "London", "Moscow", "Mexico"];

  return (
    <div className="Cities">
      <ul>
        <li>Paris</li>
        <li>London</li>
        <li>Moscow</li>
        <li>Mexico</li>
      </ul>
    </div>
  );
}

//Arrays are written inside []
//In order to loop, list the arre in <li>
