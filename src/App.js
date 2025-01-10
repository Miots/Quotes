import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('La vie est ce que vous en faites.');
  const [author, setAuthor] = useState('Eleanor Roosevelt');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Call fetchQuote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quote}</p>
        <p id="author">- {author}</p>
        <button id="new-quote" onClick={fetchQuote}>New Quote</button>
        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

export default App;