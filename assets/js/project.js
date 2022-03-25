AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "File Cleaner",
    cardImage: "assets/images/project-page/debugcleaner.png",
    description: "A command line tool in C++ that removes unwanted lines from a file that you specify",
    Githublink: "https://github.com/jpope15/DebugCleaner",
  },
  {
    title: "Text Generator",
    cardImage: "assets/images/project-page/textgen.png",
    description: "Text Generator written in C++. Uses Markov-chains to generate text based on an input text.",
    Githublink: "https://github.com/jpope15",
  },
  {
    title: "Photo Encrypter",
    cardImage: "assets/images/project-page/lfsr.png",
    description: "Photo encryption program developed in C++ using the SFML library",
    Githublink: "https://github.com/jpope15",
  },
  {
    title: "Guitar Simulator",
    cardImage: "assets/images/project-page/guitar.png",
    description: "A guitar simulator developed in C++. Uses the Karplus-Strong algorithm to generate each sound.",
    Githublink: "https://github.com/jpope15",
  },
  {
    title: "Universe Simulator",
    cardImage: "assets/images/project-page/universe.png",
    description: "A planetary physics simulator developed in C++ using the SFML library",
    Githublink: "https://github.com/jpope15",
  },
  {
    title: "Triangle Fractal",
    cardImage: "assets/images/project-page/TFractal.png",
    description: "A modified version of the Sierpinski Triangle developed in C++ using the SFML library",
    Githublink: "https://github.com/jpope15",
  },
  {
    title: "Evil Hangman",
    cardImage: "assets/images/project-page/hangman.png",
    description: "Hangman game developed in C that cheats throughout the game to make you lose",
    Githublink: "https://github.com/jpope15",
  },
  {
    title: "Snake",
    cardImage: "assets/images/project-page/snake.png",
    description: "Single and Multiplayer Snake game developed in C++ using the SFML library",
    Githublink: "https://github.com/jpope15/Snake",
  }
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" onclick="location.href='${Githublink}';">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a>${title}</a></h1>
              </div>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
