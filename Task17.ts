// Create lists of mountains, rivers, countries, cities, and languages.
const mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
const rivers: string[] = ["Amazon River", "Nile River", "Yangtze River", "Mississippi River", "Yellow River"];
const countries: string[] = ["United States", "China", "India", "Brazil", "Russia"];
const cities: string[] = ["New York City", "London", "Tokyo", "Shanghai", "Beijing"];
const languages: string[] = ["English", "Chinese", "Spanish", "Hindi", "Arabic"];

// Combine all of the lists into a single list.
const allItems: string[] = mountains.concat(rivers, countries, cities, languages);

// Print the list.
console.log(allItems);
