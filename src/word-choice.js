import sixLetters from '../util/6-letter-words';
import sevenLetters from '../util/7-letter-words';
import eightLetters from '../util/8-letter-words';
import nineLetters from '../util/9-letter-words';
import tenLetters from '../util/10-letter-words';

class WordChoice {
    constructor(level) {
        this.level = level;
        this.sixLetters = sixLetters;
        this.sevenLetters = sevenLetters;
        this.eightLetters = eightLetters;
        this.nineLetters = nineLetters;
        this.tenLetters = tenLetters;
    }

    chooseWord() {
        let wordList;
        if (this.level >= 1 && this.level < 3) {
            wordList = this.sixLetters;
        } else if (this.level >= 3 && this.level < 5) {
            wordList = this.sevenLetters;
        } else if (this.level >= 5 && this.level < 7) {
            wordList = this.eightLetters;
        } else if (this.level >= 7 && this.level < 9) {
            wordList = this.nineLetters;
        } else if (this.level >= 9) {
            wordList = this.tenLetters;
        }

        const random = Math.floor(Math.random() * wordList.length)
        return wordList[random];
    }


}

export default WordChoice;