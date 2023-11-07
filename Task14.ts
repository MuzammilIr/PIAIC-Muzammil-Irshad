// Create a list of invitees.
const the_invitees: string[] = ["Alan Turing", "Marie Curie", "Stephen Hawking", "Richard Feynman"];

// Add three more guests to the list.
the_invitees.push("Ada Lovelace", "Albert Einstein", "Grace Hopper");

// Create a message to each invitee.
const the_message: string = `Dear ${the_invitees},
I would be honored if you would join me for dinner on [date] at [time] at [location].
I have always admired your work, and I would be thrilled to have the opportunity to learn more from you.
Please let me know if you are able to attend.
Sincerely,
Muzammil Irshad`;

// Send the message to each invitee.
for (const invitee of the_invitees) {
  console.log(the_message.replace("${the_invitee}", invitee));
}
