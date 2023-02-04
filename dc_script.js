// create an array to store the different rooms in the game
const rooms = [
  {
    description: "You are in a dark and damp cave. You see a faint light coming from the east.",
    obstacles: "none",
    choices: [
      "Move east",
      "Stay put",
      "Go back"
    ]
  },
  {
    description: "You come across a river. The water looks treacherous.",
    obstacles: "none",
    choices: [
      "Try to cross the river",
      "Look for a safer path",
      "Go back"
    ]
  },
  {
    description: "You reach a fork in the road. One path leads north and the other leads south.",
    obstacles: "none",
    choices: [
      "Go north",
      "Go south",
      "Go back"
    ]
  },
  {
    description: "You come across a dragon. It looks fierce and ready to attack.",
    obstacles: "Dragon",
    choices: [
      "Fight the dragon",
      "Try to sneak past it",
      "Go back"
    ]
  },
  {
    description: "You reach a door. It looks old and rusty.",
    obstacles: "none",
    choices: [
      "Open the door",
      "Look for another way",
      "Go back"
    ]
  },
  {
    description: "You have reached the end of the dungeon. You see a treasure chest.",
    obstacles: "none",
    choices: [
      "Open the treasure chest",
      "Leave the treasure and exit",
      "Go back"
    ]
  }
];

let player = {
  location: 0,
  progress: 0
};

const gameLoop = () => {
    // display the current room description and choices
    writeOptions();
  
    // get player input
    handleInput();
  };
  
  function writeOptions() {
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = rooms[player.location].description + "<br>";
    optionsDiv.innerHTML += "Choices: <br>";
    rooms[player.location].choices.forEach((choice, index) => {
        optionsDiv.innerHTML += `${index + 1}. ${choice} <br>`;
      });
    }

    function updateDisplay() {
        let descriptionDiv = document.getElementById("description");
        let optionsDiv = document.getElementById("options");
        descriptionDiv.innerHTML = rooms[player.location].description;
        optionsDiv.innerHTML = "Choices: <br>";
        rooms[player.location].choices.forEach((choice, index) => {
          optionsDiv.innerHTML += `${index + 1}. ${choice} <br>`;
        });
      }

    function handleInput() {
        let userInput = document.getElementById("user-input").value;
        switch (userInput) {
            case "1":
              switch (player.location) {
                case 0:
                  player.location = 1;
                  player.progress = 1;
                  updateDisplay();
                  $("#outcome").html("You move east.");
                  break;
                case 1:
                  player.location = 2;
                  player.progress = 2;
                  updateDisplay();
                  $("#outcome").html("You try to cross the river.");
                  break;
                case 2:
                  player.location = 3;
                  player.progress = 3;
                  updateDisplay();
                  $("#outcome").html("You go north.");
                  break;
                  case 3:
                    if (player.location === 3) {
                        let randomNumber = Math.floor(Math.random() * 5) + 1;
                        if (randomNumber < 4) {
                            updateDisplay();
                            $("#outcome").html("The dragon defeated you.");
                            player.location = 3;
                            player.progress = 3;
                        } else {
                            updateDisplay();
                            $("#outcome").html("You defeat the dragon!");
                            player.location = 4;
                            player.progress = 4;
                        }
                    }
                    break;
                case 4:
                  player.location = 5;
                  player.progress = 5;
                  updateDisplay();
                  $("#outcome").html("You open the door.");
                  break;
                 case 5: 
                  $("#outcome").html("Congratulations, Do you want to play again ? (yes/no)");
                  player.location = 6;
                  player.progress = 6;
                  updateDisplay();
                  break;
                default:
                  $("#outcome").html("Choose an Option");
                  break;
              }
              break;
            case "2":
              switch (player.location) {
                case 0:
                  $("#outcome").html("You decide to stay put. Nothing happens.");
                  break;
                case 1:
                  $("#outcome").html("You look for a safer path. You find a bridge and cross safely.");
                  player.location = 2;
                  player.progress = 2;
                  updateDisplay();
                  break;
                case 2:
                  $("#outcome").html("You decide to go back to the fork in the road.");
                  player.location = 1;
                  player.progress = 1;
                  updateDisplay();
                  break;
                case 3:
                  $("#outcome").html("You try to sneak past the dragon. You make it safely.");
                  player.location = 4;
                  player.progress = 4;
                  updateDisplay();
                  break
                case 4:
                  $("#outcome").html("You look for another way. You find a secret passage.");
                  player.location = 5;
                  player.progress = 5;
                  updateDisplay();
                  break;
                default:
                $("#outcome").html("Choose an Option");
                  updateDisplay();
                  break;
              }
              break;
            case "3":
              switch (player.location) {
                case 0:
                  $("#outcome").html("You decide to go back. You are now outside the cave.");
                  player.location = -1;
                  player.progress = -1;
                  updateDisplay();
                  break;
                case 1:
                  $("#outcome").html("You decide to go back. You are now in the dark and damp cave You are now in the dark and damp cave.");
                  player.location = 0;
                  player.progress = 0;
                  updateDisplay();
                  break;
                  case 2:
                  $("#outcome").html("You decide to go back. You are now at the fork in the road.");
                  player.location = 1;
                  player.progress = 1;
                  updateDisplay();
                  break;
                  case 3:
                  $("#outcome").html("You decide to go back. You are now at the fork in the road.");
                  player.location = 2;
                  player.progress = 2;
                  updateDisplay();
                  break;
                  case 4:
                  $("#outcome").html("You decide to go back. You are now past the dragon.");
                  player.location = 3;
                  player.progress = 3;
                  updateDisplay();
                  break;
                  case 5:
                  $("#outcome").html("You decide to go back. You are now at the door.");
                  player.location = 4;
                  player.progress = 4;
                  updateDisplay();
                  break;
                  default:
                  $("#outcome").html("Choose an Option");
                  break;
                  }
                  break;
                  default:
                  $("#outcome").html("Choose an Option");
                  break;
                  }
                  }
 {
        // display the current room description and choices
        writeOptions();
      
        // get player input
        handleInput();
        if(player.location === 5){
            $("#outcome").html("Congratulations! You have reached the end of the dungeon. You see a treasure chest.")
            updateDisplay();
            $("#outcome").html("Do you want to play again ? (yes/no)")
            updateDisplay();
            let playAgain = prompt("Do you want to play again ? (yes/no)")
            if (playAgain === 'yes'){
                player.location = 0
                player.progress = 0
                gameLoop()
            } else {
                 updateDisplay();
                $("#outcome").html("Thanks for playing!")
            }
        }
      };
