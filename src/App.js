import './App.css';
import React, { useState } from 'react';

const colors = ['blue', 'black', 'red', 'green', 'yellow', 'white'];


function App() {

  const boxes = [];

  for (let i = 0; i <= 99; i++) {
    boxes.push({id: i, fondo: 'green', key: i, class: 'box'});
  }

  const [selectedColor, setSelectedColor] = useState ();

  const [box, setBox] = useState(boxes);

  const handleClick = (event) => {
    setSelectedColor(event.target.name);
  }

  const handleBoxes = (event) => {
    const updateBox = box.map((pbox) => {
      if (pbox.id === event.target.id) {
        pbox.background = selectedColor;
      }
      return pbox;
      }
    );
    setBox(updateBox);
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
          <button onClick={handleNewBoard}>New Board</button>
          <button onClick={handlePrint}>Print Drawing</button>
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
                {boxes.map(
                  (pbox) => {
                    return(
                      <div
                      key ={pbox.id}
                      id = {pbox.id}
                      className = {pbox.class}
                      background = {pbox.fondo}
                      onClick = {handleBoxes}
                      draggable = 'true'
                      onDragOver = {handleBoxes}
                      >
                      </div>
                    )
                  }
                )}
        </div>
        <div className="Grid">

        </div>
      </div>
    </div>
  );
}

export default App;
