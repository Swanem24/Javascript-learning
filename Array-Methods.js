let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//  Pop removed the last item in the array
console.log(secretMessage.pop());

//  Adding 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');

//  Replace the word 'easily' to 'right'
secretMessage['easily'] = 'right';

//  Removing the first item in the array
secretMessage.shift();

//  Adding an item to the beginning of the array
secretMessage.unshift('Programming');

//  using Splice to remove multiple items and replace them
secretMessage.splice(6, 10, 'know,');

//  Joining the item to make it into a sentence
console.log(secretMessage.join(' '));
