//Comparision Operators
// == (loose comparision: it only compares values and not the datatype)
if(5 == '5')  {console.log(true)}

// === (strict comparision: compares values and datatype)
if(5 === 5)  {console.log(true)} else {console.log(false)} 
if(5 === '5')  {console.log(true)} else {console.log(false)} 

// !=
if(5 != '5')  {console.log(true)} else {console.log(false)} 
// !==
if(5 !== 5)  {console.log(true)} else {console.log(false)}

// <
// <=
// >
// >=

// Logical Operators
// &&, ||, !

// Ternary Operator
// expression ? a(if true) : b(if false)
2 < 3 ? console.log(true) : console.log(false)