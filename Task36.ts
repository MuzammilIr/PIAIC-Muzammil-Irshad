const magicians: string[] = ['David Copperfield', 'Penn & Teller', 'Criss Angel', 'Lance Burton'];

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Pass the array to the function
show_magicians(magicians);
