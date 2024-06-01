// Assignment 15

let guest : string[] = ["Aizal" , "Aiman" , "Masooma" , "Anabiya"];

 let unableToAttend = "Masooma";
 console.log(`${unableToAttend} can't make it to dinner.`);

// // Replace the guest
 let newGuest = "Alina";
 guest[guest.indexOf(unableToAttend)] = newGuest;

// // New invitations
 guest.forEach(guest => {
     console.log(`${guest}, Come over to my home for a dinner gathering!`);
 });