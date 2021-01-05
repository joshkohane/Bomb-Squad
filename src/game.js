 import Timer from './timer';
 
 class Game {
     constructor(word, level) {
        this.word = word;
        this.level = level;
        this.hiddenWord = new Array(this.word.length).fill('_');
        this.attempted = ['a', 'b', 'c'];
        this.remaining = Math.floor(this.word.length * 1.5);
        this.timer = new Timer(this.level);

        this.appendWord();
        this.appendLetter();
        this.appendGuesses();
     }

     appendGuesses() {
         const remainingContainer = document.getElementById("bomb-remaining-number");
         let p = document.createElement('p');
         p.textContent = this.remaining;
         remainingContainer.appendChild(p);
     }

     appendLetter() {
        const letterContainer = document.getElementById("bomb-attempted-letters");
        let p = document.createElement('p');
        let letters = this.attempted.map(char => char.toUpperCase());
        p.textContent = this.attempted.join('');
        letterContainer.appendChild(p);
     }

     appendWord() {
         const word = document.getElementById("word-container");
         let p = document.createElement('p');
         p.textContent = this.hiddenWord.join(' ');
         word.appendChild(p);
     }

     attempedLetter(char) {
         if (this.word.includes(char)) {
            this.word.split('').map(idx => {
                if (this.word[idx] === char) {
                    this.hiddenWord[idx] = char;
                }
            })
         } else {
             this.attempted.push(char);
             this.remaining = this.remaining - 1;
             // CALL ANOTHER METHOD THAT SHOWS A BIG RED X
         }
     }

     won() {
         let won = true;
         this.hiddenWord.forEach(char => {
             if (char === '_') {
                 won = false;
             }
         })
         return won;
     }

     lost() {
         let lost = false
         if (this.remaining === 0 || this.timer.timerOver()) {
             lost = true;
         }
         return lost;
     }

     gameOver() {
         if (this.won() || this.lost()) {
             return true;
         }
         return false;
     }
 }

 export default Game;