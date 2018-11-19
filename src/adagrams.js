const Adagrams = {

    // Implement this method for wave 1
  letterPool: [
  "A", "A", "A", "A", "A", "A", "A", "A", "A",
  "B", "B",
  "C", "C",
  "D", "D", "D", "D",
  "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
  "F", "F",
  "G", "G", "G",
  "H", "H",
  "I", "I", "I", "I", "I", "I", "I", "I", "I",
  "J", "K",
  "L", "L", "L", "L",
  "M", "M",
  "N", "N", "N", "N", "N", "N",
  "O", "O", "O", "O", "O", "O", "O", "O",
  "P", "P", "Q",
  "R", "R", "R", "R", "R", "R",
  "S", "S", "S", "S",
  "T", "T", "T", "T", "T", "T",
  "U", "U", "U", "U",
  "V", "V",
  "W", "W",
  "X", "Y", "Y", "Z"
  ],


  drawLetters() {
    let drawn = new Array;
    for (let i = 0; i<10; i++) {
      drawn.push( this.letterPool[ Math.floor( Math.random()* this.letterPool.length) ])}
    return drawn;
  }, //of drawLetters


  usesAvailableLetters(input, lettersInHand) {
    // const setWord = new Set(word);
    // const setDrawLetters = new Set(drawLetters);
    //
    // const intersection = [...setWord].filter(x=> setDrawLetters.has(x));
    // return intersection.sort == drawLetters.sort;

    let wordLetters = input.split("");
    let drawnLetters = [...lettersInHand];
    // let drawnLetters = new Set(drawLetters);

    for(let i = 0; i < input.length; i++) {
      if (drawnLetters.includes(wordLetters[i])) {
        let index = drawnLetters.indexOf(wordLetters[i]);
        drawnLetters.splice(index, 1);
      }
      else {
        return false;
      }
    }
    return true;
  },


  letterScores: {
   "A": 1,
   "E": 1,
   "I": 1,
   "O": 1,
   "U": 1,
   "L": 1,
   "N": 1,
   "R": 1,
   "S": 1,
   "T": 1,
   "D": 2,
   "G": 2,
   "B": 3,
   "C": 3,
   "M": 3,
   "P": 3,
   "F": 4,
   "H": 4,
   "V": 4,
   "W": 4,
   "Y": 4,
   "K": 5,
   "J": 8,
   "X": 8,
   "Q": 10,
   "Z": 10
  },

  scoreWord(word) {
    let wordScored = word.toUpperCase().split("");
    let score = 0;

    if (word.length > 1) {
      for (let letter of wordScored) {
        score += this.letterScores[letter];
      }
    }
    else if (word.length == 1) {
      score += this.letterScores[wordScored];
    }

    if (word.length >= 7) {
      score += 8;
    }

    return score;
  },


  highestScoreFrom(playedWords) {
    // let highestScorer = {word: undefined, score: 0};
    let highestScorer = {
      word: playedWords[0],
      score: this.scoreWord(playedWords[0])
    };

    for (let word of playedWords) {
      if (this.scoreWord(word) > highestScorer.score) {
        highestScorer.word = word;
        highestScorer.score = this.scoreWord(word);

      // none of tie logic works. missing logic in if else? replace "word" with other variable name for clarity/less bug poss?
      } else if (this.scoreWord(word) == highestScorer.score) {

        if (word.length == 10 && highestScorer.word.length != 10) {
          highestScorer.word = word;
          highestScorer.score = this.scoreWord(word);
        } else if (word.length != 10 && highestScorer.word.length != 10 && word.length < highestScorer.word.length) {
          highestScorer.word = word;
          highestScorer.score = this.scoreWord(word);
        }
        // } else if (word.length == highestScorer.word.length)
        // above code already will keep first appearing word as highest?
      }
    }

    return highestScorer
  },




};

// Do not remove this line or your tests will break!
export default Adagrams;
