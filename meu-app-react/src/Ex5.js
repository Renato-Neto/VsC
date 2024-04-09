import React, { useState } from 'react';

function Fibonacci(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(1);
  return (
    <div>
      <p>{x}</p>
      <button onClick={() => [setX(x + y), setY(x)]}>Fibonacci</button>
    </div>
  );
}

export default Fibonacci;



