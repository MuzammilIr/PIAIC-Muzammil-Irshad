const Magicians: string[] = ['David Copperfield', 'Penn & Teller', 'Criss Angel', 'Lance Burton'];

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `${magicians[i]} the Great`;
  }
}

function Show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Make the magicians great
make_great(Magicians);

// Print the modified array
show_magicians(Magicians);
