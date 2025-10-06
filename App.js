import React from 'react'; // it is used to create react element
import ReactDOM from 'react-dom/client'; // it is used to render react element on screen

//React.createElement = reactelement(object) = HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"}, "Hello World from React");

//JSX React - is not html in js , it is html like syntax .
// jsx (trnspiled) before going to browser it is converted into react element by babel
// babel is a js compiler it converts jsx to react element
// babel is used in parcel by default we don't need to install it
const jsxheading = <h1 id="heading">Hello World from JSX</h1> // it is also a react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading); // it will render the react element on screen