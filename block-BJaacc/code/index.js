// 1. Define a variable named `students` and assign a blank object to it.
let students = {};
// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.
students.studentName = "Smithan kumar R";
// 3. Using `console.log` log the value of `studentName` key from the `students` object
console.log(students.studentName);
// 4. Add a another key of the value of variable `batch` in the object with the value of 16.
students.batch = 16;
// 5. Using `console.log` log the value of `batch` key from the `students` object
console.log(students.batch);
// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`
students.isAdult = true 
// 7. Using `console.log` print the value of `isAdult` key from the `students` object
console.log(students.isAdult);
// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.
students[42] = "The life is gift given from someone to experience the moments to live happy";
// 9. Using `console.log` print the value of key `42` from the `students` object
console.log(students[42]);
// 10. Check the length of object named `students`.
 console.log(students.length);
// 11. Can you define a key of `let or var` in any object? Reason.
//yes we can define the key of `let or var` because these object treats it as the string type 
students["let"] = "company";
// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property
delete students.isAdult ;
// 13. Update the value of the key batch in the object `students` and print it using `console.log`
students.batch = 22 ;
console.log(students.batch);