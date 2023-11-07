function make_shirt(size: string = 'large', message: string = 'I love TypeScript!'): void {
    console.log(`Creating a ${size} shirt with the message "${message}".`);
  }
  
  // Make a large shirt with the default message
  make_shirt();
  
  // Make a medium shirt with the default message
  make_shirt('medium');
  
  // Make a shirt of any size with a different message
  make_shirt('small', 'I love programming!');
  