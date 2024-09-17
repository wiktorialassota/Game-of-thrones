import { useNavigate } from 'react-router-dom';
import './../styles/characterCard.scss';

type CharacterCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  house: string;
};

const CharacterCard = ({ id, name, imageUrl, house }: CharacterCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${id}`);
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{house}</p>
    </div>
  );
};

export default CharacterCard;