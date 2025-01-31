import React, { useState } from 'react';
import axios from 'axios';
import Modal from './components/Modal';
import './App.css';

function App() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [originalUrl, setOriginalUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!longUrl) {
            setError('Please enter a URL');
            return;
        }

        try {
            const response = await axios.post('https://shortenbackend.onrender.com/api/shorten', { originalUrl: longUrl });
            setShortUrl(response.data.shortUrl);
            setOriginalUrl(longUrl);
            setIsModalOpen(true);
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to shorten the URL. Please try again.');
        }
    };

    return (
        <div className="App">
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="Enter a long URL"
                />
                <button type="submit">Shorten</button>
            </form>
            {error && <p className="error">{error}</p>}
            <Modal
                originalUrl={originalUrl}
                shortUrl={shortUrl}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

export default App;