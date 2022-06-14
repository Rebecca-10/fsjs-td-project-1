/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array - I added five of my favourite quotes as objects in the quotes array.
 ***/
const quotes = [{
    quote: 'You cant reach what is infront of you unless you let go of what is behind you',
    source: 'Amazon art'
  },
  {
    quote: 'Whatever you decide to do, make sure it makes you happy ',
    source: 'life'
  },
  {
    quote: 'Gratitude creates abundance',
    source: 'LEE hau'
  },
  {
    quote: 'One positive thought in the morning can change your day ',
    source: 'moi',
    year: 2022
  },
  {
    quote: 'I am a king',
    source: 'The movie',
    citation: 'lion king book'
  },
];
//console.log(quotes);


/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(array) {
  //I am getting a random number from 0 to 4. (to the length of the array)
  let quoteIndex = Math.floor(Math.random() * array.length);
  let randomQoute = array[quoteIndex];//pick a single random quote


  return randomQoute;
};

//console.log(result);


/***
 * `printQuote` function
 ***/
function printQuote() {
  const result = getRandomQuote(quotes);
  console.log(result.quote); 
  //adding quote to html dom to match the starter index.html 
  let message = "<p class ='quote'>" + result.quote + "</p>"

  message += "<p class='source'>" + result.source;
  //checking if these properties exist before builing the hmtl for them
  if (result.citation) {
    message += "<span class='citation'>" + result.citation + "</span>";
  };
  if (result.year) {
    message += "<span class='year'>" + result.year + "</span>";
  };

  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);