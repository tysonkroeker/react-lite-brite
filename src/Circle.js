import './Circle.css';
import React, {useState} from 'react';
import { HexColorPicker } from "react-colorful";

function Circle () {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#cccccc");

    function displayColorPicker() {
        setShowColorPicker(true);
    }

    function closeColorPicker() {
        setShowColorPicker(false);
    }

    function openBox(event) {
        if(!showColorPicker || (showColorPicker && event.ctrlKey)) {
            setShowColorPicker(!showColorPicker);
        }
    }


    return (
        <div className="circleBase" onClick={(event) => openBox(event)} style={{background: backgroundColor}}>
{showColorPicker && <HexColorPicker
            className='colorPicker'
                    color={backgroundColor} onChange={setBackgroundColor} />}
        </div>
      );
}

export default Circle;
