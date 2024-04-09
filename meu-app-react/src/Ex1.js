import React, { useState } from 'react';

const App = () => {
  const [strings, setStrings] = useState([]);

  const geraStrings = () => {
    const newStrings = [];
    for (let i = 0; i < 10; i++) {
      const randomSize = Math.floor(Math.random() * 20 + 10);
      const randomString = Math.random().toString(36).substring(7);
      newStrings.push({ size: randomSize, text: randomString });
    }
    setStrings(newStrings);
  };

  return (
    <div>
      <button onClick={geraStrings}>Generate Stringss</button>
      {strings.map((string, index) => (
        <p key={index} style={{ fontSize: string.size }}>
          {string.text}
        </p>
      ))}
    </div>
  );
};

export default App; 