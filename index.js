// Explain call(), apply() and, bind() methods.
 // These are just different ways of invoking or calling functions.
 
 let employee1= {
    name: "karan",
    age: 21,
    Gender : "Male"
}
let employee2= {
    name: "kusuma",
    age: 21,
    Gender : "Female"
}
let employee3= {
    name: "krishna",
    age: 21,
    Gender : "Female"
}

function showDetails (id , cls){
     console.log(this.name,this.age,this.Gender,id,cls);
}

showDetails.call(employee1,1,"A");
showDetails.call(employee2,2,"B");
showDetails.call(employee3,3,"c");

showDetails.apply(employee3,[1,"A"]);
showDetails.apply(employee3,[2,"B"]);
showDetails.apply(employee3,[3,"c"]);

let res1=showDetails.bind(employee3);
res1(1,"A")
let res2=showDetails.bind(employee3);
res2(2,"B");
let res3=showDetails.bind(employee3);
res3(3,"c");

//What is an event loop and call stack?

//call stack is a data structure that keeps track information of the functions being called and executed. Thus, if the user invokes a function for execution, the specified function gets the specified function gets pushed/added in the call stack, and when the user returns from a function, it means the function is popped out from the call stack. Thus, call stack is a normal stack data structure that follows the stack order principal, i.e., LIFO
//Event loop :An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

//What is prototype chain?
//Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

const studentPrototype = {
    calage(){
        console.log(2022-this.byear);
    },
    initialize(fname,lname,byear){
        this.fname=fname;
        this.lname=lname;
        this.byear=byear;
    }
}
let person = Object.create(studentPrototype);

console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__);

//What is the use of setTimeout?
//setTimeout is a web api . it will excecute after specified time in milliseconds.
setTimeout(() => {
    console.log("Hi");
}, 2000);
//it will print Hi after 2 sec.

//What is callback hell?
//callback hell is not like a normal functions it will not give output at a time it will give output after specified time.
//it creates a arrow shaped.

function print(){
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("0");
            setTimeout(() => {
                console.log("2");
                setTimeout(() => {
                    console.log("3");
                    setTimeout(() => {
                        console.log("4");
                    }, 4000);
                }, 3000);  
            }, 2000);   
        }, 0000);
    }, 1000);
}
print();

//What is creation phase and execution phase?
//execution context : execution context has two phases 1. creation phase 2. execution phase
//creation phase : In this phase intrepreter creates the memory for the variables and creates a function expression.
//Execution phase : In this phase interpreter will executes the code that currently running. it allocates the actual values to the variables by removing undefined.

//What are objects in javascript?
//objects :  Everything is an object in JavaScript. object has properties with key-value pair.this keyword refers to an object.
let student = {
    name : "kusuma krishna",
    class : "B.tech",
    college : "VEC",
}

//the object will look like student.

//What are callbacks?
//callbacks : function which pass as an argument to the another function is called callback function.

function sayHi(friend){
    console.log("Hi",friend);
}

function friend(name,callbackfn){
    callbackfn(name);
}
friend("mmm",sayHi);
//it prints Hi mmm

//Give an example of inheritance using function constructor?

function Employee(name,cls,college){
    this.name=name;
    this.cls=cls;
    this.college=college;
}
function Developer(name,cls,college, specialization) {
  
    Employee.call(this, name,cls,college);

    this.specialization = specialization;
}

let em1 = new Employee("kusuma","B.tech","VEC");
let em2 = new Developer("krishna","B.tech","VEC","fullstack developer");

em1.prototype.college="VITS";
console.log(em1);
console.log(em2);

//What are function constructors?
//The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically
function Employe(name,cls,college){
    this.name=name;
    this.cls=cls;
    this.college=college;
}
let emp = new Employe("kusuma","B.tech","VEC");
let empl = new Employe("kusuma","B.tech","VEC");
