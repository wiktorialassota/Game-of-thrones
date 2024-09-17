import { useEffect, useState } from 'react';
import './../styles/quoteCarousel.scss';

type QuoteCarouselProps = {
  characterName: string; 
  numberOfQuotes?: number;
};

const QuoteCarousel = ({ characterName, numberOfQuotes = 10 }: QuoteCarouselProps) => {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const firstName = characterName.split(' ')[0].toLowerCase();

  useEffect(() => {
    const fetchQuotes = async () => {
      setError(null);

      try {
        const response = await fetch(`https://api.gameofthronesquotes.xyz/v1/author/${firstName}/${numberOfQuotes}`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (data.length === 0) {
          setError("No quotes found for this character");
        } else {
          setQuotes(data.map((quoteObj: { sentence: string }) => quoteObj.sentence));
        }
      } catch (error) {
        setError(`Error fetching quotes: No quotes available`);
      }
    };

    fetchQuotes();
  }, [firstName, numberOfQuotes]);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="quote-carousel">
      {error ? (
        <p>{error}</p>
      ) : quotes.length > 0 ? (
        <>
          <p>"{quotes[currentIndex]}"</p>
          <button onClick={prevQuote}>Previous</button>
          <button onClick={nextQuote}>Next</button>
        </>
      ) : (
        <p>Loading quotes...</p>
      )}
    </div>
  );
};

export default QuoteCarousel;
