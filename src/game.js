import WordChoice from './word-choice';
 
 class Game {
    constructor() {
        this.level;
        this.wordChoice;
        this.interval;
        this.word;
        this.hiddenWord;
        this.attempted;
        this.remaining;
        this.clockTick;
        this.timeLeft;
    }
    
    start() {
        this.level = 1;
        this.wordChoice = new WordChoice(this.level);
        this.word = this.wordChoice.chooseWord();
        this.hiddenWord = new Array(this.word.length).fill('_');
        this.attempted = [];
        this.remaining = Math.floor(this.word.length * 1.5);
        this.interval = 1030 - (this.level * 30);
        this.timeLeft = 20;
        this.appendTime("00:" + this.timeLeft);
        this.setClock();
        this.appendWord();
        this.appendLetter();
        this.appendGuesses();
        this.appendLevel();
        console.log(this.word);
        console.log(this.level);
        console.log(this.interval);

        // this.timer.reset();
        // this.timer.start();
        // this.word = this.wordChoice.chooseWord();
    }
    
    restart() {
        this.level += 1;
        this.wordChoice = new WordChoice(this.level);
        this.word = this.wordChoice.chooseWord();
        this.hiddenWord = new Array(this.word.length).fill('_');
        this.attempted = [];
        this.remaining = Math.floor(this.word.length * 1.5);
        this.interval = 1030 - (this.level * 30);
        this.timeLeft = 20;
        this.appendTime("00:" + this.timeLeft);
        this.setClock();
        this.appendWord();
        this.appendLetter();
        this.appendGuesses();
        this.appendLevel();
        console.log(this.word);
        console.log(this.level);
        console.log(this.interval);

         // this.timer.reset();
         // this.timer.start();
         // this.word = this.wordChoice.chooseWord();
    }

    reset() {
        this.timeLeft = 20;
        clearInterval(this.clockTick);
        this.attempted = [];
        // this.hiddenWord = new Array(this.word.length).fill('_');
    }

    setClock() {
        this.clockTick = setInterval(this.tick.bind(this), this.interval);
    }

    tick() {
        this.timeLeft -= 1;
        let time;
        if (this.timeLeft >= 10) {
            time = '00:' + this.timeLeft;
        } else if (this.timeLeft >= 0) {
            time = '00:0' + this.timeLeft;
        } else {
            console.log('in the timer')
            this.lost();
        }
        this.appendTime(time);
    }

    appendTime(time) {
        const clock = document.getElementById("clock-container");
        let p = document.createElement('p');
        p.textContent = time;
        if (clock.hasChildNodes()) {
            clock.childNodes.forEach(child => {
                clock.removeChild(child);
            })
        }
        clock.appendChild(p);
    }

    appendGuesses() {
        const remainingContainer = document.getElementById("bomb-remaining-number");
        let p = document.createElement('p');
        p.textContent = this.remaining;
        if (remainingContainer.hasChildNodes()) {
            remainingContainer.childNodes.forEach(child => {
            remainingContainer.removeChild(child);
        })
        }
        remainingContainer.appendChild(p);
        if (this.remaining === 0) {
            this.lost();
        }
    }

    appendLetter() {
        const letterContainer = document.getElementById("bomb-attempted-letters");
        let p = document.createElement('p');
        let letters = this.attempted.map(char => char.toUpperCase());
        p.textContent = this.attempted.join('').toUpperCase();
        if (letterContainer.hasChildNodes()) {
            letterContainer.childNodes.forEach(child => {
                letterContainer.removeChild(child);
            })
        }
        letterContainer.appendChild(p);
        // if (this.remaining === 0) {
        //     console.log('CALLING LOST FROM APPENDLETTER')
        //     this.lost();
        // }
    }

    appendWord() {
        const word = document.getElementById("word-container");
        let p = document.createElement('p');
        p.textContent = this.hiddenWord.join('').toUpperCase();
        if (word.hasChildNodes()) {
            word.childNodes.forEach(child => {
                word.removeChild(child);
            })
        }
        word.appendChild(p);
    }

    appendLevel() {
        const levelNum = document.getElementById("level-number");
        let p = document.createElement('p');
        p.textContent = this.level;
        if (levelNum.hasChildNodes()) {
            levelNum.childNodes.forEach(child => {
                levelNum.removeChild(child);
            })
        }
        levelNum.appendChild(p);
    }

    appendLose() {
        const gameStart = document.getElementById("game-start");
        let p = document.createElement('p');
        p.textContent = this.word.toUpperCase();
        if (gameStart.hasChildNodes()) {
            gameStart.childNodes.forEach(child => {
                gameStart.removeChild(child);
            })
        }
        gameStart.appendChild(p);
    }

    attempedLetter(char) {
        if (this.word.includes(char)) {
            this.word.split('').map((letter, idx) => {
                if (letter === char) {
                    this.hiddenWord[idx] = char;
                    this.appendWord();
                }
            })
            this.won();
        } else {
            this.attempted.push(char);
            this.remaining -= 1;
            this.appendLetter();
            this.appendGuesses();
                // CALL ANOTHER METHOD THAT SHOWS A BIG RED X
        }
    }

    won() {
        console.log('won?')
        let won = true;
        this.hiddenWord.forEach(char => {
            if (char === '_') {
                won = false;
            }
        })
        if (won) {
            this.reset();
            const gameWin = document.getElementById('game-win-container');
            setTimeout(gameWin.classList.remove('hidden'), 5000)
        }
    }

    lost() {
        console.log("lost")
        this.reset();
        this.appendLose();
        const gameLose = document.getElementById('game-lose-container');
        gameLose.classList.remove('hidden')
    }

    //  gameOver() {
    //      if (this.won() || this.lost()) {
    //          return true;
    //      }
    //      return false;
    //  }
}

export default Game;