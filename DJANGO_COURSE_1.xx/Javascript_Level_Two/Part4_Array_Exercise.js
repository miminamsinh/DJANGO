// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function add(){
    var name = prompt("Enter the name you want to add: ")
    roster.push(name)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

function remove(){
    var name = prompt("Enter the name you want to remove: ")
    index = roster.indexOf(name)
    roster.splice(index, 1)
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display(){
    console.log(roster)
}

// Start by asking if they want to use the web app

var use = prompt("Do you want to use the website? Enter y or n: ");
var request = "";

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

if (use === "y"){
    while (request !== "quit"){
        request = prompt("Type add, remove, display or quit: ")
        if (request === "add"){
            add();
        }
        if (request === "remove"){
            remove();
        }
        if (request === "display"){
            display()
        }
    }
    alert("You have chose to quit the app")
}