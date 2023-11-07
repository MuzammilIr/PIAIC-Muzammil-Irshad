const invitees: string[] = ["Alan Turing", "Marie Curie", "Stephen Hawking", "Richard Feynman", "Ada Lovelace", "Albert Einstein", "Grace Hopper"];

const notifyInvitee = (name: string) => {
  if (name !== undefined) {
    console.log(`Dear ${name}, I'm so sorry to inform you that I can only invite two guests to dinner. Thank you for your understanding.`);
  }
};

// Print a message saying that you can invite only two people for dinner.
console.log("I can only invite two people for dinner.");

// Remove guests from the list until only two names remain.
while (invitees.length > 2) {
  const guestToRemove= invitees.pop();
  notifyInvitee(guestToRemove);
}

// Print a message to each of the two people still on the list, letting them know they're still invited.
invitees.forEach((name) => {
  console.log(`Dear ${name}, you are still invited to dinner!`);
});

// Remove the last two names from the list, so you have an empty list.
invitees.splice(0, invitees.length);

// Print the list to make sure you actually have an empty list at the end of your program.
console.log(invitees);
