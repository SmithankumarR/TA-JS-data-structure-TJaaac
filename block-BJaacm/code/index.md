```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`
![name](memory.jpg);

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true , because refernce address are same
- `user === newUser;` // true, because reference address and datatype are same
- `user.name === newUser.name;` // true
- `user.name == newUser.name;`// true
- `user.sibling == newUser.sibling;` // true
- `user.sibling === newUser.sibling;` // true
- `user.sibling == allBrothers;` // false
- `user.sibling === allBrothers;` // false
- `brothersCopy === allBrothers;` // false
- `brothersCopy == allBrothers;` // false
- `brothersCopy == user.sibling;` // true
- `brothersCopy === user.sibling;` // true
- `brothersCopy[0] === user.sibling[0];` // true
- `brothersCopy[1] === user.sibling[1];` // true
- `user.sibling[1] === newUser.sibling[1];`// true

above all the conditions work on the opy by reference method  as you in these method  the variable stores the address hence while comparing the value it compare the address so it results true
