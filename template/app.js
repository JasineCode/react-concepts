// import { some } from "./lib/some"

let name = "Amine 😅 !!"
// alert(`Hello ${name} and welcome`)

//declaratif function
function f1() {
    alert("hello Im declaratif func")
}

//arrow function
let f2 = (_, b) => alert("Hello expression func")

//Array functions 
    let students = [{ name: "yassine", isPresent: false }, { name: "amine", isPresent: true }]
    students.forEach((s)=>console.log(s.name))
    let StudentNames = students.map((s)=>s.name)
    let StudentIndexes = students.map((_,index)=>index)
    //delete  yassine
    let stuentsWithoutYasine = students.filter(s=>s.name!="yassine")
    // console.table(students)
    // console.table(StudentNames)
    // console.table(StudentIndexes)
    // console.table(stuentsWithoutYasine)

// call external function as a module 
// alert(some(1,2))

//destructuring object 
let ob = {nom:'yassin',pren:"pren"}

// let nom = ob.nom;
// let pren = ob.pren;
let {nom,pren} = ob

//spread op
let student = {...ob,age:23}
console.log(student);
