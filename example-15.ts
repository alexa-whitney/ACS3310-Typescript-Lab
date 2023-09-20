// This function returns a function that returns a string
// Add the types: 

function sayHello2(): () => string {
    return () => 'Hello!'
}
// This variable contains a function that returns a string
const hello2: () => string = sayHello()
// Calling the function returns the string
console.log( hello() ) // Hello!
console.log( hello() ) // Hello!
console.log( hello() ) // Hello!
console.log( hello() ) // Hello!

function mathematizer2(n: number): (x: number) => number {
    let sum: number = n
    return (x: number) => x * n
}

const m2: (x: number) => number = mathematizer(3)
console.log( m(3) )   // 9
console.log( m(2) )   // 6
console.log( m(10) )  // 30
console.log( m(111) ) // 333



