 class Game {
     constructor(word) {
        this.word = word;
        this.hiddenWord = new Array(this.word.length).fill('_');
        // for (let i = 0; i < this.word.length-1; i++) {
        //     this.hiddenWord.push('_')
        // };
        this.attempted = [];
        this.remaining = Math.floor(this.word.length * 1.5)
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
         if (this.remaining === 0) {
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