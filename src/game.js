import WordChoice from './word-choice';
import Explosion from './explosion';
 
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
        this.explosion = new Explosion();
    }
    
    start() {
        this.explosion.remove();
        this.level = 1;
        this.wordChoice = new WordChoice(this.level);
        this.word = this.wordChoice.chooseWord();
        this.hiddenWord = new Array(this.word.length).fill('_');
        this.attempted = [];
        this.remaining = Math.floor(this.word.length * 1.5);
        this.interval = 1030 - (this.level * 30);
        this.timeLeft = 30;
        this.appendTime("00:" + this.timeLeft);
        this.setClock();
        this.setEyes();
        this.appendWord();
        this.appendLetter();
        this.appendGuesses();
        this.appendLevel();
        this.appendRotate();
        this.setLevel();
        const musicPlayer = document.getElementById('music-player');
        const volumeIcon = document.getElementById('volume-icon');
        if (volumeIcon.classList.contains("fa-volume-up")) {
            musicPlayer.play();
            musicPlayer.currentTime = 0;
        }
    }
    
    restart() {
        this.explosion.remove();
        this.level += 1;
        this.wordChoice = new WordChoice(this.level);
        this.word = this.wordChoice.chooseWord();
        this.hiddenWord = new Array(this.word.length).fill('_');
        this.attempted = [];
        this.remaining = Math.floor(this.word.length * 1.5);
        this.interval = 1030 - (this.level * 30);
        this.timeLeft = 30;
        this.appendTime("00:" + this.timeLeft);
        this.setClock();
        this.setEyes();
        this.appendWord();
        this.appendLetter();
        this.appendGuesses();
        this.appendLevel();
        this.appendRotate();
        this.setLevel();
        const musicPlayer = document.getElementById('music-player');
        const volumeIcon = document.getElementById('volume-icon');
        if (volumeIcon.classList.contains("fa-volume-up")) {
            musicPlayer.play();
            musicPlayer.currentTime = 0;
        }
    }

    reset() {
        this.timeLeft = 20;
        clearInterval(this.clockTick);
        clearInterval(this.eyeInterval);
        setTimeout(() => this.removeRotate(), 1500);
        this.attempted = [];
        const winBtn = document.getElementById("game-win-btn");
        if (winBtn.hasChildNodes()) {
            winBtn.childNodes.forEach(child => {
                winBtn.removeChild(child);
            })
        }
        const loseBtn = document.getElementById("game-lose-btn");
        if (loseBtn.hasChildNodes()) {
            loseBtn.childNodes.forEach(child => {
                loseBtn.removeChild(child);
            })
        }
    }

    setLevel() {
        let score;
        if (!!localStorage['high-score']) {
            score = localStorage['high-score'];
        } else {
            localStorage.setItem('high-score', '1');
            score = 1;
        }
        const highScore = document.getElementById("high-score-number");
        let p = document.createElement('p');
        p.textContent = score;
        if (highScore.hasChildNodes()) {
            highScore.childNodes.forEach(child => {
                highScore.removeChild(child);
            })
        }
        highScore.appendChild(p);
    }

    setClock() {
        this.clockTick = setInterval(this.tick.bind(this), this.interval);
    }

    setEyes() {
        this.eyeInterval = setInterval(this.moveEyes.bind(this), 3400);
    }

    tick() {
        this.timeLeft -= 1;
        let time;
        if (this.timeLeft > 10) {
            time = '00:' + this.timeLeft;
        } else if (this.timeLeft === 10) {
            time = '00:' + this.timeLeft;
            this.moveSweat();
        } else if (this.timeLeft >= 0) {
            time = '00:0' + this.timeLeft;
        } else {
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
        }
        document.getElementById('mobile-input').value = "";
    }

    appendRotate() {
        const container = document.getElementById("wick-container");
        if (container.classList.contains("rotate-container")) {
            container.classList.remove("rotate-container");
        }
        container.classList.add("rotate-container");
        const rotateContainer = document.getElementsByClassName("rotate-container")[0];
        rotateContainer.style.animation = `turn ${(this.interval * 30) + (this.interval * 13)}ms linear`;
    }

    appendBtn() {
        const loseBtn = document.getElementById("game-lose-btn");
        let button = document.createElement('button');
        button.textContent = "Try Again";
        button.classList.add("game-start-btn");
        if (loseBtn.hasChildNodes()) {
            loseBtn.childNodes.forEach(child => {
                loseBtn.removeChild(child);
            })
        }
        loseBtn.appendChild(button);
    }

    appendWinBtn() {
        const winBtn = document.getElementById("game-win-btn");
        let button = document.createElement('button');
        button.textContent = "Next Level";
        button.classList.add("game-start-btn");
        if (winBtn.hasChildNodes()) {
            winBtn.childNodes.forEach(child => {
                winBtn.removeChild(child);
            })
        }
        winBtn.appendChild(button);
    }

    removeRotate() {
        const rotateContainer = document.getElementsByClassName("rotate-container")[0];
        rotateContainer.style.removeProperty("animation");
        const container = document.getElementById("wick-container");
        container.classList.remove("rotate-container");
    }

    updateScore() {
        if (this.level >= parseInt(localStorage['high-score'])) {
            localStorage.setItem('high-score', (this.level + 1).toString())
        }
    }

    won() {
        let won = true;
        this.hiddenWord.forEach(char => {
            if (char === '_') {
                won = false;
            }
        })
        if (won) {
            this.reset();
            this.updateScore();
            const musicPlayer = document.getElementById('music-player');
            const volumeIcon = document.getElementById('volume-icon');
            musicPlayer.pause();
            const tadaSound = document.getElementById('tada-sound');
            if (volumeIcon.classList.contains("fa-volume-up")) {
                tadaSound.play();
                tadaSound.currentTime = 0;
            }
            setTimeout(() => { tadaSound.pause() }, 1700);
            const gameWin = document.getElementById('game-win-container');
            setTimeout(gameWin.classList.remove('hidden'), 500);
            setTimeout(() => { this.appendWinBtn() }, 2500);
            const sweat = document.getElementById("bomb-sweat-drop");
            sweat.classList.remove("bomb-sweat-drop");
        }
    }

    lost() {
        this.explosion.explode();
        this.reset();
        const musicPlayer = document.getElementById('music-player');
        const volumeIcon = document.getElementById('volume-icon');
        musicPlayer.pause();
        const bombSound = document.getElementById('bomb-sound');
        if (volumeIcon.classList.contains("fa-volume-up")) {
            bombSound.play();
            bombSound.currentTime = 0;
        }
        setTimeout(() => { bombSound.pause() }, 1750);
        this.appendLose();
        const gameLose = document.getElementById('game-lose-container');
        setTimeout(() => {gameLose.classList.remove('hidden'); }, 500);
        setTimeout(() => {this.appendBtn()}, 2500);
        const sweat = document.getElementById("bomb-sweat-drop");
        sweat.classList.remove("bomb-sweat-drop");
    }
}

export default Game;