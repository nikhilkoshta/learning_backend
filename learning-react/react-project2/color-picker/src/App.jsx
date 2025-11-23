import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ff0000ff");

  return (
    <div style={{ backgroundColor: color, height: "100vh", textAlign: "center" }}>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorPicker;
