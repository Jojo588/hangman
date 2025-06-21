import React from 'react';

const Keyboard = ({ setGuessedLetters, setWrongGuesses, randomWord, wrongGuesses, guessedLetters, resetGame }) => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const maxGuesses = 6; // Define the max number of wrong guesses

    const handleKeyClick = (key) => {
        // Stop if the game is already lost
        if (wrongGuesses >= maxGuesses) {
            return;
        }

        if (randomWord.includes(key)) {
            setGuessedLetters((prevGuessedLetters) => [...prevGuessedLetters, key]);
        } else {
            setWrongGuesses((prevWrongGuesses) => prevWrongGuesses + 1);
        }

        // Show "You Lost" message if max wrong guesses are reached
        if (wrongGuesses + 1 >= maxGuesses) {
            setTimeout(() => alert(`Ooops💀...You Lost!!! \nThe word was ${randomWord}`), 100);
            setTimeout(resetGame, 200);
        }
    };

    return (
        <div className='keyBoard'>
            {alphabets.map((key) => (
                <button 
                    key={key} 
                    className='button' 
                    onClick={() => handleKeyClick(key)}
                    disabled={wrongGuesses >= maxGuesses || guessedLetters.includes(key)} // Disable if game is lost or letter is guessed
                >
                    {key}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
