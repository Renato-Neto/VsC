import React, { useState } from 'react';

function Formulario() {
 const [nome, setNome] = useState('');
 const [email, setEmail] = useState('');
 const [endereco, setEndereco] = useState('');
 const [telefone, setTelefone] = useState('');

 const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nome') {
      setNome(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'endereco') {
      setEndereco(value);
    }
      else if (name === 'telefone') {
        setTelefone(value);
        
    }
 };

 const handleSubmit = (event) => {
    event.preventDefault(); 
    if (nome === '' || email === '' || endereco === '' || telefone === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    else alert(`Nome: ${nome}\nEmail: ${email}\nEndereço: ${endereco} \nTelefone: ${telefone}`);
 };

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome: 
        <input type="text" name="nome" value={nome} onChange={handleChange} />
      </label>
      <br></br>
      <label>
        Email: 
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>
      <br></br>
      <label>
        Endereço: 
        <input type="text" name="endereco" value={endereco} onChange={handleChange} />
      </label>
      <br></br>
      <label>
        Telefone: 
        <input type="text" name="telefone" value={telefone} onChange={handleChange} />
      </label>
      <br></br>
      <br></br>
      <input type="submit" value="Enviar" />
    </form>
 );
}

export default Formulario;
