const currentUsers: string[] = ['admin', 'eric', 'alice', 'bob', 'carol'];
const newUsers: string[] = ['ADMIN', 'eve', 'john', 'BOB', 'dave'];

function isUsernameUnique(username: string): boolean {
  const lowercaseUsername = username.toLowerCase();
  return !currentUsers.includes(lowercaseUsername);
}

for (const newUser of newUsers) {
  if (!isUsernameUnique(newUser)) {
    console.log(`The username "${newUser}" is already taken. Please choose a new username.`);
  } else {
    console.log(`The username "${newUser}" is available.`);
  }
}
