import React, { useState, useEffect } from 'react';

const ColorGame = () => {
  const [colors, setColors] = useState([]);
  const [correctColor, setCorrectColor] = useState('');
  const [message, setMessage] = useState('');
  const [gameStarted, setGameStarted] = useState(false);


  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  };


  const startNewGame = () => {
    const newColors = [
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor()
    ];
    setColors(newColors);
    setCorrectColor(newColors[Math.floor(Math.random() * 3)]);
    setMessage('');
    setGameStarted(true);
  };


  const handleColorClick = (color) => {
    if (color === correctColor) {
      setMessage('Correct! 🎉');
    } else {
      setMessage('Incorrect 😢');
    }
  };


  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Color Guessing Game</h1>
      <p>Which color is <strong>{correctColor}</strong>?</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '30px 0' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              cursor: 'pointer',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
          />
        ))}
      </div>

      {message && (
        <p style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          color: message.includes('Correct') ? 'green' : 'red'
        }}>
          {message}
        </p>
      )}

      <button
        onClick={startNewGame}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default ColorGame;