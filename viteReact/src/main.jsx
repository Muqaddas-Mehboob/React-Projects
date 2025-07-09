import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


// This is how a JSX element is represented as a JavaScript object (virtual DOM)
// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit google.com"
// };

const anotherElement = "Me or react";  // evaluated expression

// Create a virtual DOM element using React.createElement
// Parameters: (type, props, children)
// This creates an <a> tag with href, target, and inner text
const reactElement = React.createElement(
  'a',  // Type of element to create (HTML tag)
  {
    href: "https://google.com",  // 'href' attribute for anchor tag
    target: "_blank"             // Opens the link in a new tab
  },
  "Click me to navigate to google",  // Text content inside the anchor tag
  anotherElement    // Injecting variable inside the element
);

// Select the DOM element with id "root" from the HTML
// Initialize a React root and render the virtual DOM element into it
createRoot(document.getElementById('root')).render(
  // Instead of using <App />, we are rendering our custom reactElement
  reactElement
);


// In React, the UI is built using JSX, which looks like HTML but is actually syntactic sugar for JavaScript.
// When JSX is compiled by tools like Babel, it gets converted into plain JavaScript objects using 
// `React.createElement`. These objects are known as **virtual DOM elements** — they represent what the UI 
// should look like. For example, a simple anchor tag written in JSX becomes a JavaScript object with 
// `type`, `props`, and `children`. React doesn't directly add this to the page. Instead, it uses the 
// `createRoot().render()` method (introduced in React 18) to take this virtual DOM object and convert it 
// into real HTML elements using the browser's native DOM API like `document.createElement` and 
// `setAttribute`. Finally, it places the real DOM elements inside a container like `<div id="root"></div>`, 
// making the content visible on the screen. This flow — from JSX to JavaScript to real DOM — is how React 
// builds and updates the user interface efficiently.
