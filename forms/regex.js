
const regexPattern = new RegExp(pattern, Attributes)

const pattern = /to/g

const str = "Wecome to Js"

// const res = pattern.test(str)
// console.log(res);

const res1 = str.match(pattern)
console.log(res1);


const phnNum = "9150321123"

const phnPattern = /^[6,7,8,9][0-9]{9}$/

const res = phnNum.match(phnPattern)
console.log(res);


//////////////////////////////////////////////////////////////////

/* 
Regex Pattern

Brackets [] - which refers to our range

[a,b,c] - apart from the range, it does't take.
[a-z] - Occurs lowercase from a to z
[^a-z] - Except from a to z
[A-Z] - Occurs uppercase from A to Z
[8,9] - occurs only 8 or 9
[0-9] -occurs from 0 to 9
[a-zA-z] - occurs lowercase and uppercase
[a-zA-z0-9] - Except special character's

identifiers - Repeatations
[]? - 0 or 1 times
[]+ - 1 or moreTimes
[]* - 0 or moreTimes
[A-Z]{n} - ntimes
[a-z]{5,10} - 5 to 10
[a-z]{n, } - minimum n times maximum more than n times

modifiers - 
/g - global

\s - space
\$ - Only $

methods

\d [0-9]
\D [^0-9]

\w [A-Za-z]
\W [^A-Za-z]

*/