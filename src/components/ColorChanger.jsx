import React, { useState } from "react";

export default function ColorChanger() {
  const [bgColor, setBgColor] = useState("green");

  const handleClick = () => {
    setBgColor(bgColor === "lightgreen" ? "lightblue" : "lightgreen");
  };

  //  const handleClick = () => {
  //    console.log("clicked!!!!"); no event here just lo log that there is a click
  //  };

  return (
    <div>
      <h2>ColorChanger</h2>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: bgColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Click Me!
      </div>
      {/* <button onClick={() => handleClick()}>Change my colour</button>  no event here */}

      <button onClick={() => handleClick()}>Change my colour</button>
    </div>
  );
}
