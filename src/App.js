// src/App.js
import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList'; // Asegúrate de que la ruta y el nombre del archivo sean correctos

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty API App</h1>
      </header>
      <main>
        <CharacterList />
      </main>
    </div>
  );
}

export default App;
