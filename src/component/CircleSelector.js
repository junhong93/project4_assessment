import React from 'react';
import './CircleSelector.css';


function CircleSelector(props) {

    return(
        <div className="CircleSelector">
            <button className="selected" onClick={() => props.click_handler()}>
                SELECT CIRCLE 1
            </button>

            <button className="selected">
                SELECT CIRCLE 2
            </button>
            <button className="selected">
                SELECT CIRCLE 3
            </button>
            <button className="selected">
                SELECT CIRCLE 4
            </button>
        </div>
    )
}

export default CircleSelector;
