// Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}
// Create a react component
const App = () => {
    // const buttonText = "click me";
    return ( 
        <div>
            <label className="label" htmlFor = "name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'black', color: 'white'}} >{getButtonText()}</button>
        </div>
    );
};


// Take the react component and show it on screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);