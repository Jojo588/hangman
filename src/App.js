import './App.css';
import Hangman from './components/Hangman';
import Textarea from './components/Textarea';
import wordlist from './components/wordlist';
import Keyboard from './components/Keyboard';
import { useState, useEffect } from 'react';

function App() {
  const [wrongGuesses, setWrongGuesses] = useState(0);
  
  // Store the word in state so it doesn't change on every render
  const [randomWord,setRandomWord] = useState(wordlist[Math.floor(Math.random() * wordlist.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [displayWord, setDisplayWord] = useState("");

  // Update displayWord whenever guessedLetters changes
  useEffect(() => {
    const updatedDisplay = randomWord
      .split("")
      .map(letter => guessedLetters.includes(letter) ? letter : '_')
      .join(" ");

    setDisplayWord(updatedDisplay);

    // Check if the player has won
    if (randomWord.split("").every(letter => guessedLetters.includes(letter))) {
      setTimeout(() => alert("YAY🎉...You won!"), 100);
      setTimeout(() => resetGame(), 200);
    }

  }, [guessedLetters, randomWord]); // Removed `randomWord` from dependencies as it never changes



  
  const resetGame = () => {
    setRandomWord(wordlist[Math.floor(Math.random() * wordlist.length)]); // Set new random word
    setGuessedLetters([]); // Reset guessed letters
    setWrongGuesses(0); // Reset wrong guesses
};



  return (
    <div className='container'>
      <Hangman 
        wrongGuesses={wrongGuesses}
        setWrongGuesses={setWrongGuesses}
      />
      <Textarea word={displayWord} />
      <Keyboard 
        randomWord={randomWord}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters} 
        wrongGuesses={wrongGuesses}
        setWrongGuesses={setWrongGuesses}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;
