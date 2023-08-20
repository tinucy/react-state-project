import React, { useState } from "react";

export default function SliderExample() {
  const [SliderValue, setSliderValue] = useState(0);

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div>
      <h2>SliderExample</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={SliderValue}
        // onChange={(e) => setSliderValue(e.target.SliderValue)}
        // instead of the above line of code, we could declare a method in the const above and use as below.
        onChange={(e) => handleChange(e)}
      />
      <p>Slider Value: {SliderValue}</p>
    </div>
  );
}
