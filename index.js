// Write your code in this file!
let currentUser = 'Stephen Talley';

//describe welcomeMassage to equal "" with interpolated currentUser
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// make toUpperCase current user
let upperCaseCurrentUser = currentUser.toUpperCase();
// essentially the same but everything toUpperCase
let excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`;



//make firstInitial and restOfName
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);

// describe shortGreeting to have string "welcome"
let shortGreeting = `Welcome, ${firstInitial}!`;

console.log(shortGreeting)