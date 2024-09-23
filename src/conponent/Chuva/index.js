import React from 'react';
import './Chuva.css';

const Chuva = () => {
    
const numDrops = 50;
const drops = [];

// gera as gotas com posições horizontais e velocidades aleatórias
for (let i = 0; i < numDrops; i++) {
  const speed = Math.random() * 2 + 1; // velocidade
  const delay = Math.random() * 2; // delay da animação
  drops.push(
    <div key={i} className="rain-drop" style={{ left: `${Math.random() * 100}%`, animationDelay: `${delay}s`, animationDuration: `${speed}s` }}></div>
  );
}

return (
  <div className="rain-container">
    {drops}
  </div>
  );
}

export default Chuva;
