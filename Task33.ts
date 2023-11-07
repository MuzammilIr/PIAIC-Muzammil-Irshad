function describe_city(city: string, country = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities, at least one of which is not in the default country
  describe_city('Karachi');
  describe_city('London', 'England');
  describe_city('Tokyo', 'Japan');
  