import { useEffect, useState } from 'react';
import './../styles/randomQuote.scss';

const RandomQuote = () => {
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
        const data = await response.json();
        setQuote(data.sentence);
      } catch (error) {
        console.error('Error fetching random quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="random-quote">
      {quote ? `"${quote}"` : 'Loading random quote...'}
    </div>
  );
};

export default RandomQuote;