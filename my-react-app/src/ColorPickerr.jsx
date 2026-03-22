

import React,{ useState } from "react";

function ColorPickerr() {
  const [color, setColor] = useState("#cc3434");
  function handlecolor(event){
    setColor(event.target.value);

  }

  return (
    <div className="color-picker-element">
      <h1>Color Pickerd</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={handlecolor}></input>
    </div>
  );
}

export default ColorPickerr;