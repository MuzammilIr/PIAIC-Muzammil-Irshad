// Create an array of places to visit, in no particular order.
const placesToVisit: string[] = ["New Zealand", "Japan", "Peru", "Iceland", "Costa Rica"];

// Print the array in its original order.
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list.
console.log("Alphabetical order (sorted without modifying the actual list):");
const sortedPlacesToVisit = placesToVisit.slice().sort();
console.log(sortedPlacesToVisit);

// Show that the original array is still in its original order by printing it.
console.log("Original order (again):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order (without modifying the actual list):");
const reversedPlacesToVisit = sortedPlacesToVisit.slice().reverse();
console.log(reversedPlacesToVisit);

// Show that the original array is still in its original order by printing it again.
console.log("Original order (again):");
console.log(placesToVisit);

// Reverse the order of the list.
placesToVisit.reverse();

// Print the array to show that its order has changed.
console.log("Order reversed:");
console.log(placesToVisit);

// Reverse the order of the list again.
placesToVisit.reverse();

// Print the list to show it’s back to its original order.
console.log("Order reversed again:");
console.log(placesToVisit);

// Sort the array so it’s stored in alphabetical order.
placesToVisit.sort();

// Print the array to show that its order has been changed.
console.log("Sorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array so it’s stored in reverse alphabetical order.
placesToVisit.reverse();

// Print the list to show that its order has changed.
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit);
