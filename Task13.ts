// Creating a list of invitees.
const Invitees: string[] = ["Alan Turing", "Marie Curie", "Stephen Hawking"];

// Removing one of the invitees from the list.
Invitees.splice(Invitees.indexOf("Stephen Hawking"), 1);

// Adding a new invitee to the list.
Invitees.push("Richard Feynman");

// Creating a message to each invitee.
const message: string = `Dear ${Invitees},
I would be honored if you would join me for dinner on [date] at [time] at [location].
I have always admired your work, and I would be thrilled to have the opportunity to learn more from you.
Please let me know if you are able to attend.
Sincerely,
Muzammil Irshad`;

// Sending the message to each invitee.
for (const invitee of Invitees) {
  console.log(message.replace("${invitee}", invitee));
}
