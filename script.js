
let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

// let newH3 = document.createElement("h3");
// newH3.innerText = "Hullo world";
// outputParagraph.appendChild(newH3);

var jsongDatabase = [
  {
    "title" : "Split Pees and Bumblebees",
    "year" : "2021",
    "audio_file" : "split_pees.mp3",
    "color" : "#EF597B"
  },
  {
    "title" : "Dog Water",
    "year" : "2021",
    "audio_file" : "dog_water.mp3",
    "color" : "#FF6D31"
  },
  {
    "title" : "Page 162",
    "year" : "2020",
    "audio_file" : "page_162.mp3",
    "color" : "#73B66B"
  },
  {
    "title" : "Peepee in the Pool",
    "year" : "2020",
    "audio_file" : "peepee_in_the_pool.mp3",
    "color" : "#FFCB18"
  },
  {
    "title" : "Pffft",
    "year" : "2020",
    "audio_file" : "pffft.mp3",
    "color" : "#29A2C6"
  }
];

function createElementProper(incomingJSONG) {
  //create content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSONG['color'];
  newContentElement.classList.add('contentItem');

  //create title h3, set class and content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSONG['title'];
  //add the title to the item
  newContentElement.appendChild(newContentHeading);

  //create h4 year, set class and content
  let newContentYear = document.createElement("H4");
  newContentYear.innerText = incomingJSONG['year'];
  newContentElement.appendChild(newContentYear);

  //create audio player
  let newContentAudio = document.createElement("audio");
  newContentAudio.id = "audio-player";
  newContentAudio.controls = "controls";
  newContentAudio.src = incomingJSONG["audio_file"];
  newContentAudio.type = "audio/mpeg";
  newContentElement.appendChild(newContentAudio);

  contentGridElement.appendChild(newContentElement);
}

for (i = 0; i < jsongDatabase.length; i++) {
  console.log("creating items, i = " + i);
  createElementProper(jsongDatabase[i]);
}
