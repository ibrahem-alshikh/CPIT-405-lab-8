import React, { useState } from 'react';

function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl === '' || shortCode === '') {
      alert('Please fill in both fields!');
      return;
    }
    setShortUrl('https://cpt405.co/' + shortCode);
  };

  return (
    <div className="container">
      <h1 className="main-title">Link Shrinker</h1>
      
      <form onSubmit={handleShorten} className="form-container">
        <label className="label">Long URL:</label>
        <input 
          type="text" 
          className="input-field" 
          placeholder="https://example.com/very/long/link"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />

        <label className="label">Enter short code:</label>
        <input 
          type="text" 
          className="input-field" 
          placeholder="example123"
          value={shortCode}
          onChange={(e) => setShortCode(e.target.value)}
        />

        <button type="submit" className="shorten-btn">Shorten</button>
      </form>

      {shortUrl !== '' && (
        <div className="result-section">
          <h3 className="label">Short URL</h3>
          <div className="result-box">
            <a href={longUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;