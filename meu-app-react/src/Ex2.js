import React, { useState } from 'react';

function TableGenerator() {
 const [n, setN] = useState(0);
 const [text, setText] = useState('');
 const [tableRows, setTableRows] = useState([]);

 const handleGenerate = () => {
    const rows = [];
    for (let i = 0; i < n; i++) {
      rows.push({ index: i, text });
    }
    setTableRows(rows);
 };

 return (
    <div>
      <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleGenerate}>Gerar Tabela</button>
      <table>
        <thead>
          <tr>
            <th>Índice</th>
            <th>Texto</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index}>
              <td>{row.index}</td>
              <td>{row.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default TableGenerator;