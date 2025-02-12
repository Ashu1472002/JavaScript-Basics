//first hello world program in javascript
console.log('Hello World')

//Let's do some operation
console.log('4 + 4 =', 4+4)

//So now we know how to declare the variables
//to declare the variables we need to use some keywords 
//like var, const, let
//var is the older version of declaring a variable
//next see const, if we want declare any constant variable that has a value which is never change throughout the program then that time we use constant keyword for declaring a variable
const PI = 3.14
console.log(PI)

//next let, if we declare any variable and we know that in future in some cases the value of that variable will be changing then in that case we use let keyword to declare a variable
let no_of_words = 4
console.log(no_of_words)
no_of_words = 5
console.log(no_of_words)

//Data types which are used in js
//1. Number
3482739328409 

//2. String
'Hello World' 

//3. Boolean has two values such as true and false
true && false 

//4. Null which means of absence of value
null 

//5. Undefined which means defined with nothing

//6. Object which commonly known as a dictionary
//which is in the form of key-value pair
let persons = {                 
    james: 'is super cool',         
    ash: 'is so beautiful',
} 

console.log(persons)

//7. Array is the data type 
//which stores the same type of values.
//Js starts the indexing from the 0th index. 
//so, the first element stored on the 0th position/index
let example_array =[10,20,40,80]  
console.log(example_array)

//8. Function is a sub-type of object that can be invoked/called
function add(a,b){
    return a+b;
}
console.log(add(10,20))

//let's see what is in the console.log() function just for curiosity
/*function info(){
    console.log(console)
}*/
//info()


//Let's explore types of operators
//1.Assignment operator '='
//2.Arithmetic operators '+','-','*','/','%'
//3.Logical operators '==','===','!=','!==','<=','>='
//4.Coditional Operators '&&','||','!'
let condition1 = true
let condition2 = true
console.log(condition1 && condition2)
console.log(condition1 || condition2)
console.log(!condition1)
console.log(!'') //output of this is true

//To find out the data-type of variable we need to use typeof keyword
console.log(typeof condition1)

//Let's explore conditional statements
//If-elseif-else statement
if(condition1){
    console.log('Condition1 is true')
}else if(condition2){
    console.log('Condition2 is false')
}else{
    console.log('Condition is false')
}

//let's explore loops
//1.for loop
let arr1=[1,2,3,4,5,6,7,8,9]
console.log("for loop started")
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

//2.while loop
let i = 0
console.log("while loop started")
while(i<arr1.length){
    console.log(arr1[i])
    i++
}

//if you want to skip loop on a specific condition 
// there is one reserve keyword for that is 'continue' keyword

//if you want to kill the loop on a specific condition
// there is one reserve keyword for that is 'break' keyword

//for string concatenation
function concatStrings(str1,str2){
    console.log(str1+' '+str2)
}

concatStrings('Ashwini','Pawar')