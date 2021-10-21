import './App.css';
import React, { useState } from 'react';
import lodash from 'lodash';

const colors = ['blue', 'black', 'red', 'green', 'yellow', 'white'];

let boxes = [];

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
    event.target.style.background = selectedColor;
  }

  const handleNewBoard = () => {
    window.location.reload();
  }

  const handlePrint = () => {
    
  }

  return (
    <div className="App">
      <div>
        <div className="Menu">
          <button className="Botones" onClick={handleNewBoard}>New Board</button>
          <button className="Botones" onClick={handlePrint}>Print Drawing</button>
          <p> Elige un color: </p>
          <ul className="ColorSelector">
              {colors.map((color) =>( 
                <li key={color} 
                  style={{
                    width: '50px',
                    height:'50px', 
                    border: color === selectedColor ? '3px solid black' : '1px solid black',
                    margin: '3px',
                    background: color,
                    textDecoration: 'none',
                    display: 'inline-block',
                }}>
                  <button 
                    className="ColorButton"
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
              <div draggable="True" className='box' id={key} key={key} onClick={handleBoxes} onDragOver={handleBoxes}></div>
            )
          })}
        </div>
        <div className="Grid">
        {boxes.map(key => {
            return (
              <div className='box2' id={key} key={key+100}></div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
