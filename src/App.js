import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function App(){
  
  const form = useRef();
  const [who, setWho] = useState('')
  const [content, setContent] = useState('')

  async function sendEmail(e){
    e.preventDefault();
    
    await emailjs.sendForm('gmailMessage', 'template_u6lz4uc', form.current, 'user_4aLlx0n2ziH8uqNDSxDHx')
      .then((result) => {
          alert('Email enviado com sucesso.')
      }, (error) => {
          alert('Não foi possível enviar o email')
      });

    clearInput()
  }

  function clearInput(){
    setWho('')
    setContent('')
  }
  
  return (
    <div className="App">
      <h1>Mande um email para mim</h1>

      <form className="input" ref={form} onSubmit={sendEmail} >
        <label htmlFor="email"/>
        <input 
          className="toWho"
          name="name"
          placeholder="Seu nome" 
          value={who}
          onChange={(e1) => {setWho(e1.target.value)}}
        />
 
        <label/>
        <textarea 
          className="content" 
          name="message"
          placeholder="Escreva algo.."
          value={content}
          onChange={(e2) => {setContent(e2.target.value)}}
        />
 
        <button
          className="send"
          onClick={() => {sendEmail()}}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
