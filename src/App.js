import { useState } from 'react';
import "./App.css";

export default function App() {

  const [ peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularIMC(){
   const alt = altura / 100;
   const imc = peso / (alt * alt)

   const imcFix = imc.toFixed(2);

   if(imc < 18) {
    setMensagem("Você está a baixo do peso! Seu IMC: " + imcFix);
   } else if(imc >= 18.6 && imc < 24.9) {
     setMensagem("Peso ideal! Seu IMC: " + imcFix);
   } else if(imc >= 24.9 && imc < 34.9) {
     setMensagem("Você etsá levemente acima do peso! Seu IMC: " + imcFix);
   } else if(imc > 34.9 && imc < 40) {
     setMensagem("Cuidado, Obesidade! Seu IMC: " + imcFix)
   }
  
  }

  return (
      <div className="app">
        <h1>Calculadora IMC</h1>
        <span>Vamos calcular seu imc</span>

        <div className="area-input">
          <input 
            type="text" 
            placeholder="Peso em (kg) Ex: 90"
            value={peso}
            onChange={ (e) => setPeso(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Altura em (cm) Ex: 180"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />

          <button onClick={calcularIMC}>
            Calcular
          </button>

        </div>

        <h2>{mensagem}</h2>

      </div>
  );
}


