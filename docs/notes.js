const obj = {
  a: 1,
  b: 2,
  "2026-09-11...": 4
}

obj.c = 3

let myKey = "d"

// obj.myKey = 4
obj[myKey] = 4 // you must use [] if the key is in a variable
obj[new Date().toString()] = 6

console.log("OBJECT:", obj)
console.log("STRINGIFIED OBJECT:", JSON.stringify(obj))


// don't do this on the frontend. it freezes the tab
// function wait_v2(milliseconds) {
  // Date.now() returns the number of milliseconds since the 'epoch' (January 1, 1970)
//   const start = Date.now()
//   while (Date.now() - start < milliseconds) {}
// }

definition of Async function and promises - as used in my Memory Path Game:

A Promise represents a value that isn't ready yet. await pauses the function until that Promise settles, so asynchronous code can be written top-to-bottom like ordinary code. async marks a function as allowed to use await, and makes it return a Promise itself.