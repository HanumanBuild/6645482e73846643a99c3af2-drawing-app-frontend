import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import axios from 'axios';

function Drawing() {
  const [canvas, setCanvas] = useState(null);

  const saveDrawing = async () => {
    if (canvas) {
      const drawing = canvas.getSaveData();
      try {
        await axios.post(`${process.env.DRAWING_APP_BACKEND_URL}/drawings`, { drawing });
        alert('Drawing saved!');
      } catch (error) {
        alert('Failed to save drawing!');
      }
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl">Drawing</h2>
      <CanvasDraw ref={canvasDraw => setCanvas(canvasDraw)} />
      <button onClick={saveDrawing}>Save Drawing</button>
    </div>
  );
}

export default Drawing;