// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  const user = {
    username,
    email,
    isActive: true,
    loginCount: 0,
  };

  return user;
};

const user1 = createUser("coder123", "coder@example.com");
console.log(user1);

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  user.loginCount += 1;
};

incrementLogin(user1);
incrementLogin(user1);
console.log(user1.loginCount); // 2

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;
  return user;
};

deactivateUser(user1);
console.log(user1.isActive); // false
console.log(user1.email); // undefined

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  console.log(`username: ${user.username}`);
  console.log(`email: ${user.email}`);
  console.log(`isActive: ${user.isActive}`);
  console.log(`loginCount: ${user.loginCount}`);
};
printUserInfo(user1);

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  const userCopy = { ...user };
  return userCopy;
};

const user2 = createUser("newuser", "new@example.com");
const user2Copy = cloneUser(user2);
user2Copy.username = "changedname";
console.log(user2.username); // "newuser" (original unchanged)
console.log(user2Copy.username); // "changedname"

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
