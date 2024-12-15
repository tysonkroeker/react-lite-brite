import logo from './logo.svg';
import './App.css';
import Circle from './Circle';
import CircleRow from './CircleRow';
import React, {useState} from "react";
import { HexColorPicker } from "react-colorful";

// https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-light-bright-app

function App() {
  const [itemsPerRow, setItemsPerRow] = useState(50);

  let rows = [];
  for(let i=0; i< itemsPerRow; i++) {
      rows.push(CircleRow({'itemsPerRow':itemsPerRow}));
  }

  return (
    <div className="App">
      <header className="App-header">
        {rows}
      </header>
    </div>
  );
}

export default App;
