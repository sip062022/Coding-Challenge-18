// Task 1: Create New Component //

import React from 'react';  // import from react

function Greeting () { // function for greeting
  return ( // return text
    <div>
      <h2>Hello from the Greeting Component!</h2>  
      <p>This is your first custom component in React.</p>
    </div>
  );
};

export default Greeting;  // exports the greeting