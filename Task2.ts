const PersonName: string = "Eric";
const lowercaseName: string = PersonName.toLowerCase();
const uppercaseName: string = PersonName.toUpperCase();
const titlecaseName: string = PersonName.charAt(0).toUpperCase() + PersonName.slice(1).toLowerCase();

console.log(`Lowercase name: ${lowercaseName}`);
console.log(`Uppercase name: ${uppercaseName}`);
console.log(`Titlecase name: ${titlecaseName}`);