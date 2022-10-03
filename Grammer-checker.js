//  Grammer Checker
//   iterating over arrays to gather information and improve the quality of a paragraph

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// console.log(storyWords);

//  Counting up the words by using forEach 
let count = 0;
storyWords.forEach(word => {
  return count++;
});

//  Filter outs the word 'literally'
storyWords = storyWords.filter(word => {
  if(word !== unnecessaryWord) {
    return word;
  }
})

//  Replacing Words
storyWords = storyWords.map(word => {
  if(word === misspelledWord) {
    return 'beautiful';
  }
  else {
    return word;
  }
});

//  Finding bad words and removing it
let badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
})

storyWords[78] = 'really';

//  Finding out if every word in the story has less than 10 characters using .every()
let lengthCheck = storyWords.every(word => {
  return word.length < 10;
});

//  Finding the word which has more than 10 characters
let findWord = storyWords.forEach(word => {
  return word.length > 10 && console.log("This word has more than 10 characters " + word);
});

//  Join the words together so that that it becomes readable
console.log(storyWords.join(' '));