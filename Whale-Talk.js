//  Whale Talk (Whale Translator)
const input = "Greetings, this is Jeff";

//  Whales only speak with the vowels
const vowels = ["a", "e", "i", "o", "u"];

//  a place to store the vowels of input variable
let resultArray = [];

//  This loop will iterate through each letter of the input
const myLoop = (input) => {
  for(let x = 0; x<input.length; x++) {
    for(let i = 0; i<vowels.length; i++) {
      if(input[x] == vowels[i])
      {
        //  Check if it is e or u and double it if it is.
        if(input[x] == 'e' || input[x] == 'u')
        {
          resultArray.push(input[x]);
          resultArray.push(input[x]);
        }
        else 
        {
         resultArray.push(input[x]);
        }
      }
    }
  }
}

myLoop(input.toLowerCase());
console.log(resultArray.join("").toUpperCase());