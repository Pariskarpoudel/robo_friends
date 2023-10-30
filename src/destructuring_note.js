// ARRAY DESTRUCTURING OLD WAY

const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const firstName = profile[0];
const lastName = profile[1];
const website = profile[2];

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"

// WE USE destructuring to access/extract array values as variables

// ARRAY DESTRUCTURING NEW WAY
const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"



// OBJECT DESTRUCTURING OLD WAY
const profile = {
    firstName: "Oluwatobi", 
    lastName: "Sofela", 
    website: "codesweetly.com"
  };
  
  const firstName = profile.firstName;
  const lastName = profile.lastName;
  const website = profile.website;
  
  console.log(firstName); // "Oluwatobi"
  console.log(lastName); // "Sofela"
  console.log(website); // "codesweetly.com"

// we use destructuring to extract/access object values as variables rather than doing obj.key coz it makes clean code

// OBJECT DESTRUCTURING NEW WAY
const profile = {
    firstName: "Oluwatobi", 
    lastName: "Sofela", 
    website: "codesweetly.com"
  };
  
  const { firstName, lastName, website } = profile;
  
  console.log(firstName); // "Oluwatobi"
  console.log(lastName); // "Sofela"
  console.log(website); // "codesweetly.com"


