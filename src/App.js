import './App.css';
import React, { useState } from 'react';
import lodash from 'lodash';

const colors = ['blue', 'black', 'red', 'green', 'yellow', 'white'];

const boxes = [];


//Imprime los div tipo box, para luego pintarlos utilizando la libreria lodash
lodash.times(100, (i) => {
  boxes.push(i);
});

function App() {
  const [selectedColor, setSelectedColor] = useState ();

  const handleClick = (event) => {
    setSelectedColor(event.target.name);
  }

  const handleBoxes = (event) => {
    console.log(event.target);
    event.target.style.background = selectedColor;
  }
  return (
    <div className="App">
      <div>
        <div className="Menu">
          <button>New Board</button>
          <button>Print Drawing</button>
          <p> Elige un color: </p>
          <ul className="ColorSelector">
              {colors.map((color) =>( 
                <li key={color} 
                  style={{
                    width: '50px',
                    height:'50px', 
                    border: color === selectedColor ? '2px solid black' : '1px solid black',
                    margin: '3px',
                    background: color
                }}>
                  <button
                    type="button"
                    onClick={handleClick}
                    name={color}
                  >
                    {color}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="Grid">
          {boxes.map(key => {
            return (
              <div id='box' key={key} onClick={handleBoxes}></div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
