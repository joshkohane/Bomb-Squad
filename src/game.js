import WordChoice from './word-choice';
 
 class Game {
    constructor() {
        this.level;
        this.wordChoice;
        this.interval;
        this.eyeInterval;
        this.word;
        this.hiddenWord;
        this.attempted;
        this.remaining;
        this.clockTick;
        this.timeLeft;

        this.start();

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
        this.setEyes();
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
        this.setEyes();
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
        console.log('reset')
        this.timeLeft = 20;
        clearInterval(this.clockTick);
        clearInterval(this.eyeInterval);
        this.attempted = [];
        // this.hiddenWord = new Array(this.word.length).fill('_');
    }

    setClock() {
        this.clockTick = setInterval(this.tick.bind(this), this.interval);
    }

    setEyes() {
        let random = Math.floor(Math.random() * 10)
        this.eyeInterval = setInterval(this.moveEyes.bind(this), 3400);
    }

    tick() {
        this.timeLeft -= 1;
        let time;
        if (this.timeLeft > 10) {
            time = '00:' + this.timeLeft;
        } else if (this.timeLeft === 10) {
            console.log('time is 10')
            time = '00:' + this.timeLeft;
            this.moveSweat();
        } else if (this.timeLeft >= 0) {
            time = '00:0' + this.timeLeft;
        } else {
            console.log('in the timer')
            this.lost();
        }
        this.appendTime(time);
    }

    moveEyes() {
        const eyes = document.querySelectorAll("#bomb-pupil");
        for (let i = 0; i < eyes.length; i++) {
            if (eyes[i].classList.contains("bomb-pupil")) {
                eyes[i].classList.add("bomb-pupil-right")
                eyes[i].classList.remove("bomb-pupil")
            } else {
                eyes[i].classList.add("bomb-pupil")
                eyes[i].classList.remove("bomb-pupil-right")
            }
        }
        // eyes.forEach(eye => {
        // })
    }

    moveSweat() {
        const sweat = document.getElementById("bomb-sweat-drop");
        sweat.classList.add("bomb-sweat-drop");
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
            const sweat = document.getElementById("bomb-sweat-drop");
            sweat.classList.remove("bomb-sweat-drop");
        }
    }

    lost() {
        console.log("lost")
        this.reset();
        this.appendLose();
        const gameLose = document.getElementById('game-lose-container');
        gameLose.classList.remove('hidden');
        const sweat = document.getElementById("bomb-sweat-drop");
        sweat.classList.remove("bomb-sweat-drop");
    }

    //  gameOver() {
    //      if (this.won() || this.lost()) {
    //          return true;
    //      }
    //      return false;
    //  }
}

export default Game;