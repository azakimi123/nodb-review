//Functional components are components meant to return simple functionality or a simple display
//To build a functional component, do the following:
//1. import React from 'react;
//2. Create a function (pass in props as an argument if props need to be passed in)
//3. Return a JSX display
//4. Export the component
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>Gotta Catch em All!</h1>
        </div>
    )
}

export default Header;