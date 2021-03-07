// CODE PLAN
// Create two classses, one to represent a person and one a dodgeball player
// transfer a person to being a dodgeball play then add te new player to an array of players. 
// allow users to select button to transfer that new dodgeball player to either red or blue team


const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

// empty arrays 
const listOfPlayers = []
const blueTeamArray = []
const redTeamArray = []

class Player {
  // declaring local attriblute of class 
  constructor(id, name) {
    this.id = id;
    this.name = name;
    // this.age = age;
    // this.skillSet = skillSet;
    // this.placeBorn = placeBorn;
  }
}

// BLUE TEAM //
// passing the color attribute into the Teammate class
class Teammate {
  constructor(color) { // declaring the local attribute color inside the class
    this.color = color

  }
}

// the blue team button is clicked if will run the below function
// the makeTeam function will loop throught two if statements blue and red team 
const makeTeam = (teamColor, id) => {
  
  const findId = (element) => element.id === id
  if (teamColor === "Blue Team") {
    console.log("blue team was clicked")
  // using the find index methods we are looking for a targed ID inside of listofPlayers and removing it (this is blueVarible)

    let blueVarible = listOfPlayers.splice(listOfPlayers.findIndex(findId), 1)
    //creating a new Player class called bluePlayer to show the listofplayers id and name
    let bluePlayer = new Player (blueVarible[0].id, blueVarible[0].name,)
    //we're adding the blueplay into the blueTeamArray empty bracket
    blueTeamArray.push(bluePlayer)
    console.log(blueTeamArray)
    // getting access to the element name blue found in the DOM
    blueTeamList = document.getElementById('blue')
   // setting the innerHTML to blank
    blueTeamList.innerHTML = "";
    // creating the list item and button elements to blueTeamArray
    blueTeamArray.forEach(player => {
      // each element will have a new li with player name 
      const blueLi = document.createElement("li")
      blueLi.appendChild(document.createTextNode(player.name))
      // adding the list to the blue team
      blueTeamList.append(blueLi)
    })
  }
  // RED TEAM
  if (teamColor === "Red Team") {

    console.log("Red team was clicked")

    let redVarible = listOfPlayers.splice(listOfPlayers.findIndex(findId), 1)
    let redPlayer = new Player(redVarible[0].id, redVarible[0].name,)
    redTeamArray.push(redPlayer)
    console.log(redTeamArray)
    redTeamList = document.getElementById('red')

    redTeamList.innerHTML = "";

    redTeamArray.forEach(player => {
      const redLi = document.createElement("li")
      redLi.appendChild(document.createTextNode(player.name))
      redTeamList.append(redLi)
    })
  }
  //  this will remove players after assigning the players to team
  const listPlayers = document.getElementById('players')
  listPlayers.innerHTML = "";

  listOfPlayers.forEach(player => {
    const playerLi = document.createElement('li')
    const newBlueButton = document.createElement('button')
    newBlueButton.innerHTML = "Blue Team"
    const newRedButton = document.createElement('button')
    newRedButton.innerHTML = "Red Team"
    playerLi.appendChild(newBlueButton)
    playerLi.appendChild(newRedButton)
    playerLi.appendChild(document.createTextNode(player.name))
    listPlayers.append(playerLi)

    newBlueButton.addEventListener('click', function () { makeTeam("Blue Team", player.id) })
    newRedButton.addEventListener('click', function () { makeTeam("Red Team", player.id) })
  })
}


// PEOPLE //
const listPeopleChoices = () => {
  // getting assess to the element with the id to list the ul that is going to show the people from the dom
  const listElement = document.getElementById('people')
  //creating new the array of people function to have a button 
  arrOfPeople.map(person => {
// creating the li and button elements to show up in the DOM
    const li = document.createElement("li")
    const button = document.createElement("button")
    // the button showing up in the DOM
    button.innerHTML = "Make Player"
    // adding an event listener that calls the  make player function on click
    button.addEventListener('click', function () { makePlayer(person.id) })
    // making the button and a list item of the persons name and their skill set to show up in the list 
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    //adding the li to the list
    listElement.append(li)
  })
  console.log(arrOfPeople)
}



// PLAYERS//
//make player function is removing list of people and adding the people object to the empty array of listOfPlayers
const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
  //passing the element parameter into findID function to equal to id
  const findId = (element) => element.id === id;
 // using the find index methods we are looking for a targed ID inside of arrofPeople and removing it (this is .splice index)
  const newVariable = arrOfPeople.splice(arrOfPeople.findIndex(findId), 1)
  //create a new Player class call add player to take in the id and name varible
  let addPlayer = new Player(newVariable[0].id, newVariable[0].name)
  // using the push method by adding the player varible into the listOfPlayers array. 
  listOfPlayers.push(addPlayer);

  // list of the dodgeball players
  const listPlayers = document.getElementById('players')
  // setting the innerHTML to blank
  listPlayers.innerHTML = "";
 //creating new the array of players function to have a button 
 //.each method is excuting the below funciton for each element in the list of player array 
  listOfPlayers.forEach(player => {
    // creating the lsit item and button elements to blue team and red team
    const playerLi = document.createElement('li')
    const newBlueButton = document.createElement('button')
    newBlueButton.innerHTML = "Blue Team"
    const newRedButton = document.createElement('button')
    newRedButton.innerHTML = "Red Team"
    //listing the red and blue button with persons name and skill set in the ul 
    playerLi.appendChild(newBlueButton)
    playerLi.appendChild(newRedButton)
    playerLi.appendChild(document.createTextNode(player.name))
    listPlayers.append(playerLi)

    // once a button is clicked run the  makeTeam function 
    newBlueButton.addEventListener('click', function () { makeTeam("Blue Team", player.id) })
    newRedButton.addEventListener('click', function () { makeTeam("Red Team", player.id) })
  })
}

// Detailed Test Plan 
// Prove a person becomes a player and a player become a teammate 
// when user click on the button 'list People' the list of peope will displlay 
// when user click on buttom 'Make Player' the player will be added to the Dodgeball players list 
// after the people are added the players list, each players will have red and blue team button
// user can click on either blue or red team buttom to assign dodgeball players to either red or blue team 
// once the players are in the correct team. the dodgeball players ul will be removed 