const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let array = [];
    for (let i = 0; i < letters[0].length; i++) {
      array.push([letters[0][i]]);
    }
    for (let row = 0; row < letters.length; row++) {
      for (let column = 0; column < letters[row].length; column++) {
        array[column][row] = letters[row][column];
      }
    }
    const verticalJoin = array.map(ls => ls.join(''));
    for (const row of verticalJoin) {
        if (row.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch

const sampleLetters = [["a", "b", "o", "s", "t"], ["k", "o", "o", "e", "r"], ["b", "a", "g", "h", "p"], ["s", "t", "i", "w", "b"]]; 
const sampleWord = "boat";

console.log(wordSearch(sampleLetters, sampleWord))