function make_album(artistName: string, albumTitle: string, numTracks?: number): { artistName: string; albumTitle: string; numTracks?: number } {
    return { artistName, albumTitle, numTracks };
  }
  
  // Make three objects representing different albums
  const album1 = make_album('Pink Floyd', 'The Dark Side of the Moon');
  const album2 = make_album('Radiohead', 'OK Computer', 12);
  const album3 = make_album('Beyoncé', 'Lemonade', 12);
  
  // Print each return value to show that objects are storing the album information correctly
  console.log(album1);
  console.log(album2);
  console.log(album3);
  