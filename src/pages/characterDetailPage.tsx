import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuoteCarousel from '../components/quoteCarousel';  
import './../styles/characterDetailPage.scss';

type CharacterDetail = {
  fullName: string;
  title: string;
  family: string;
  imageUrl: string;
  description: string;
};

const CharacterDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterDetail | null>(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  if (!character) {
    return <div>Loading character details...</div>;
  }

  return (
    <div className="character-detail">
      <img src={character.imageUrl} alt={character.fullName} />
      <h1>{character.fullName}</h1>
      <h2>{character.title}</h2>
      <p>{character.description}</p>
      <h3>House: {character.family}</h3>

      <h3>Quotes</h3>
      <QuoteCarousel characterName={character.fullName.toLowerCase()} />
    </div>
  );
};

export default CharacterDetailPage;