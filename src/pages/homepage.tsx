import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchBar';
import CharacterCard from '../components/characterCard';
import RandomQuote from '../components/randomQuote';
import '../styles/homepage.scss';

type Character = {
  id: number;
  fullName: string;
  imageUrl: string;
  family: string;
};

const HomePage = () => {
  const [characters, setCharacters] = useState<Character[]>([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedHouse, setSelectedHouse] = useState(''); 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();
        setCharacters(data); 
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters(); 
  }, []); 

 
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const handleHouseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHouse(event.target.value);
  };


  const filteredCharacters = characters.filter((character) => {
    const matchesSearchTerm =
      character.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.family.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesHouse = selectedHouse === '' || character.family === selectedHouse;

    return matchesSearchTerm && matchesHouse;
  });

  const uniqueHouses = [...new Set(characters.map((character) => character.family))];

  return (
    <div className="home-page">
      <div className="sidebar">
        
        <select className="house-dropdown" value={selectedHouse} onChange={handleHouseChange}>
          <option value="">All Houses</option>
          {uniqueHouses.map((house) => (
            <option key={house} value={house}>
              {house}
            </option>
          ))}
        </select>
      </div>

      <div className="content">
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <RandomQuote />
        <div className="character-grid">
          {filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.fullName}
              imageUrl={character.imageUrl}
              house={character.family}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;