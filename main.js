let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.
let storyWords = story.split(' ');

//There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.
const betterWords = storyWords.filter((word) => {
  return !unnecessaryWords.includes(word);
});

console.log(betterWords.join(' '))
// There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;
let overUsedWordsTotal = veryCount + basicallyCount + veryCount;

for (word of betterWords) {
  if (word === 'really') {
     reallyCount += 1;
  } else if (word === 'very') {
     veryCount += 1;
  } else if (word === 'basically') {
     basicallyCount += 1;
  }
}

console.log(`The amount of times the word 'really' is present in the passage is: ${reallyCount}`)

console.log(`The amount of times the word 'basically' is present in the passage is: ${basicallyCount}`)

console.log(`The amount of times the word 'very' is present in the passage is: ${veryCount}`)

console.log(`The total number of times the 'Over Used Words' have been used is:`, reallyCount + basicallyCount + veryCount);

// Now, count how many sentences are in the paragraph. This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.

let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

console.log(`The number of sentences in the paragraph is: ${sentences}`)

// The number of words in the sentence
const storyWordsLength = betterWords.length;
console.log(`The number of words that are in the paragraph is: ${storyWordsLength}`)

/* Congratulations! You’ve improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

Here are some ideas:

    1. For the overused words, remove it every other time it appears.

    2. Write a function that finds the word that appears the greatest number of times.

    3. Replaced overused words with something else.

*/



