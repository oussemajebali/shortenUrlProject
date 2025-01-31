import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ originalUrl, shortUrl, isOpen, onClose }) => {
    const protocol = originalUrl ? new URL(originalUrl).protocol : 'https:';
    const fullShortUrl = `${protocol}//shorturl.xyz/${shortUrl}`;

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Shortened URL Modal"
            className="modal"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            <h2>Shortened URL</h2>
            <p>
                <a href={originalUrl} target="_blank" rel="noopener noreferrer">
                    {fullShortUrl}
                </a>
            </p>
            <button onClick={onClose}>Close</button>
        </ReactModal>
    );
};

export default Modal;