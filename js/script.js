// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quoteObj = [
{
  quote : "Moral indignation is jealousy with a halo.",
  source : "H. G. Wells",
  citation : "The Wife of Sir Isaac Harman",
  year : "1914"
},
{
  quote : "Victory goes to the player who makes the next-to-last mistake.",
  source : "Chessmaster Savielly Grigorievitch Tartakower",
  year : "1924"
},
{
  quote : "You may not be interested in war, but war is interested in you.",
  source : "Leon Trotsky",
  year : "1919"
},
{
  quote : "We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.",
  source : "Richard Dawkins",
  year : "1966"
},
{
  quote : "This book fills a much-needed gap.",
  source : "Moses Hadas ",
  myear : "1934"
}
];

var repeated = [];

function getRandomQuote() {
  //check if all quotes are repeated
  if (repeated.length == quoteObj.length){
    repeated = [];
  }
  //get a random index
  var index = Math.floor((Math.random() * quoteObj.length) + 1) - 1;
  //check if the index is repeated
  while (repeated.indexOf(index) != -1){
    index ++;
    if (index > quoteObj.length - 1){
      index = 0;
    }
  }
  repeated.push(index);
  return quoteObj[index];
}

//change the background color of the body
function changeBackground() {
  document.getElementsByTagName('body')[0].style.background = "rgb(" + Math.floor((Math.random() * 255)) + ","+
  Math.floor((Math.random() * 255)) + "," + Math.floor((Math.random() * 255)) + ")";
}

function printQuote() {
  //get the quote object
  var quoteObject = getRandomQuote();
  //change background color
  changeBackground();
  //check if the quote has citation
  if (quoteObject.hasOwnProperty('citation')){
    //change innerHTML
    if (quoteObject.hasOwnProperty('year')){
      document.getElementById('quote-box').innerHTML = '<p class="quote">' +
        quoteObject.quote + '</p> <p class="source">' + quoteObject.source +
        '<span class="citation">' + quoteObject.citation + '</span> <span class="year">' +
        quoteObject.year + '</span> </p>';
    } else {
      document.getElementById('quote-box').innerHTML = '<p class="quote">' +
        quoteObject.quote + '</p> <p class="source">' + quoteObject.source +
        '<span class="citation">' + quoteObject.citation + '</span></p>';
    }
  } else {
    if (quoteObject.hasOwnProperty('year')){
      document.getElementById('quote-box').innerHTML = '<p class="quote">' +
        quoteObject.quote + '</p> <p class="source">' + quoteObject.source +
        '<span class="year">' + quoteObject.year + '</span> </p>';
    } else {
      document.getElementById('quote-box').innerHTML = '<p class="quote">' +
        quoteObject.quote + '</p> <p class="source">' + quoteObject.source +
        '</p>';
    }

  }
}
//change quotes every 30s
window.setInterval(printQuote,30000);
