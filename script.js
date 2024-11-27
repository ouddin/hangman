// List of words for the game
const wordList = [
    "apple", "banana", "grape", "orange", "strawberry", "kiwi", "mango", "blueberry", "pineapple"
];

// Initialize game variables
let selectedWord = "";
let guessedWord = "";
let attempts = 7;

function startGame() {
    // Choose a random word from the list
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    guessedWord = "_".repeat(selectedWord.length);
    attempts = 7;

    // Update the game display
    document.getElementById("word-display").textContent = guessedWord;
    document.getElementById("attempts-display").textContent = `Attempts left: ${attempts}`;
    document.getElementById("result").textContent = "";
    document.getElementById("guess-input").value = "";
    document.getElementById("restart-btn").style.display = "none";
}

// Function to handle a user's guess
function guessLetter() {
    const userInput = document.getElementById("guess-input").value.toLowerCase();
    if (userInput.length !== 1 || !/[a-z]/.test(userInput)) {
        alert("Please enter a valid letter.");
        return;
    }

    let correctGuess = false;
    let newGuessedWord = guessedWord.split('');

    // Check if the letter is in the word
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === userInput && guessedWord[i] === "_") {
            newGuessedWord[i] = userInput;
            correctGuess = true;
        }
    }

    guessedWord = newGuessedWord.join('');
    document.getElementById("word-display").textContent = guessedWord;

    if (!correctGuess) {
        attempts--;
        document.getElementById("attempts-display").textContent = `Attempts left: ${attempts}`;
    }

    // Check if the word is guessed or attempts are over
    if (guessedWord === selectedWord) {
        document.getElementById("result").textContent = `Congratulations! You guessed the word: ${selectedWord}`;
        document.getElementById("restart-btn").style.display = "block";
    } else if (attempts === 0) {
        document.getElementById("result").textContent = `Sorry, you lost! The word was: ${selectedWord}`;
        document.getElementById("restart-btn").style.display = "block";
    }
}

// Function to restart the game
function restartGame() {
    startGame();
}

// Start the game on page load
window.onload = startGame;
