import React, { useState } from "react";

export default function SliderExample() {
  const [SliderValue, setSliderValue] = useState("70");

  return (
    <div>
      <h2>SliderExample</h2>
      <input type="range" min="0" max="100" value={SliderValue} />
      <p>Slider Value: {SliderValue}</p>
    </div>
  );
}
