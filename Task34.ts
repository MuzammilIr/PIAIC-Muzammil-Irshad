function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Call the function with at least three city-country pairs
  const cityCountry1 = city_country('Karachi', 'Pakistan');
  const cityCountry2 = city_country('London', 'England');
  const cityCountry3 = city_country('Tokyo', 'Japan');
  
  // Print the value that's returned
  console.log(cityCountry1);
  console.log(cityCountry2);
  console.log(cityCountry3);
  