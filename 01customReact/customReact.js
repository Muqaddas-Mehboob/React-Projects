// Function to render a virtual DOM element into the actual browser DOM
function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
        domElement.setAttribute('href', reactElement.props.href);
        domElement.setAttribute('target', reactElement.props.target);
    
        container.appendChild(domElement);
    
        */
    // Create a real DOM element based on the type (e.g., 'a', 'div', etc.)
    const domElement = document.createElement(reactElement.type);

    // Set the inner text or content of the element
    domElement.innerHTML = reactElement.children;

    // Loop through all props and set them as attributes on the DOM element
    for (const prop in reactElement.props) {
        // Skip the 'children' property if it's present in props
        if (prop === 'children') continue;

        // Set each attribute (e.g., href, target, class, etc.)
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append the created DOM element to the specified container (e.g., #root)
    container.appendChild(domElement);
}

// A sample virtual DOM element (similar to what JSX becomes under the hood)
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google.com"
};

// Select the root container from the HTML
const mainContainer = document.querySelector("#root");

// Render the virtual element into the real DOM
customRender(reactElement, mainContainer);
