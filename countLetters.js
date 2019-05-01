function countLetters(string){
  var letters = {};
  for(let i = 0; i < string.length; i++){
    let nextChar = string[i];
    if(letters[nextChar] === undefined){
      letters[nextChar] = 1;
    }else{
      letters[nextChar] = letters[nextChar] + 1;
    }
  }
  return {letters: letters, numberOfDiffChars : Object.keys(letters).length};
}

var string = process.argv[2];
console.log(countLetters(string));