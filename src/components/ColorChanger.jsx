import React, { useState } from "react";

export default function ColorChanger() {
  const [bgColor, setBgColor] = useState("green");

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
    </div>
  );
}
