const magicians: string[] = ['David Copperfield', 'Penn & Teller', 'Criss Angel', 'Lance Burton'];

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }
  return greatMagicians;
}

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Call make_great() with a copy of the array of magicians' names
const greatMagicians = make_great([...magicians]);

// Call show_magicians() with each array
show_magicians(magicians);
show_magicians(greatMagicians);
