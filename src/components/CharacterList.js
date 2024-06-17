// src/components/CharacterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Lista de Personajes</h2>
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <div>
              <h3>{character.name}</h3>
              <p>Especie: {character.species}</p>
              <p>Estado: {character.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
