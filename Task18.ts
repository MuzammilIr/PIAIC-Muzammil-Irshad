// Create an object to store the mountains.
const Mountains: { [name: string]: string } = {};
mountains["Mount Everest"] = "Nepal/China";
mountains["K2"] = "China/Pakistan";
mountains["Kangchenjunga"] = "India/Nepal";
mountains["Lhotse"] = "Nepal/China";
mountains["Makalu"] = "Nepal/China";

// Create an object to store the rivers.
const Rivers: { [name: string]: string } = {};
rivers["Amazon River"] = "South America";
rivers["Nile River"] = "Africa";
rivers["Yangtze River"] = "China";
rivers["Mississippi River"] = "United States";
rivers["Yellow River"] = "China";

// Create an object to store the countries.
const Countries: { [name: string]: string } = {};
countries["United States"] = "North America";
countries["China"] = "Asia";
countries["India"] = "Asia";
countries["Brazil"] = "South America";
countries["Russia"] = "Europe/Asia";

// Create an object to store the cities.
const Cities: { [name: string]: string } = {};
cities["New York City"] = "United States";
cities["London"] = "United Kingdom";
cities["Tokyo"] = "Japan";
cities["Shanghai"] = "China";
cities["Beijing"] = "China";

// Create an object to store the languages.
const Languages: { [name: string]: string } = {};
languages["English"] = "Global";
languages["Chinese"] = "China";
languages["Spanish"] = "Global";
languages["Hindi"] = "India";
languages["Arabic"] = "Middle East/North Africa";

// Combine all of the objects into a single object.
const AllItems: { [name: string]: any } = {};
allItems["mountains"] = mountains;
allItems["rivers"] = rivers;
allItems["countries"] = countries;
allItems["cities"] = cities;
allItems["languages"] = languages;

// Print the object.
console.log(allItems);
