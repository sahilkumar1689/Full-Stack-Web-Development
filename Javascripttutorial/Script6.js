// 1. Prototype = Basically prototypes are the special objects which are already present in every object and the object inherits the methods and properties from the prototypes.
// e.g. The Array object uses the push() ,pop(),etc methods which are present in their prototype.

// 1. We can set prototype in the object or array:
let student = {
    name:"Sahil Kumar",
    rollno :5
}
console.log(student);
// You can check the prototype in the console.

// 2.You can also create your own prototype using "__proto__"
// It is used so that one object can inherit the properties and the methods of the other objects. 

// You clearly see from the below example you can also store the function in the object:
let studentdetails = {
    get_details(){
        console.log(this.name);
        console.log(this.rollno);
    }
}
studentdetails.__proto__ = student;
console.log(studentdetails.get_details());



// 3. Classes = Basically classes are the blueprint of the objects.It contains properties and methods which are used by one or more objects.It does'nt allocate space in the memory it allocate memory only when the object is created.
/*
Syntax:
class class_name{
    // code
}
*/
class std{

    // let name; // not possible
    constructor(nm,roll){
        this.name=nm;      // You can directly store the value.
        this.rollno=roll;
    }
    get_details(){
        console.log("Name is:",this.name);
        console.log("Rollno is:",this.rollno);
    }

    // We use static keyword with the methods or properties so that it no need any object to call it can call directly using the class name.
    static greet(){
        console.log("Not need any object to call.");
    }
}

// object creation:
let obj1 = new std("Sahil Kumar",5);
obj1.get_details();
std.greet();



// In javascript we have only two types of inheritance prototypical inheritance and the class inheritance:

// 1. Prototypical inheritance we can add functionality in the functions prototype in simple terms we treat function as a class and create object of that function using new keyword.
// e.g. :

// function student(name,rollno){
//     this.name = name;
//     this.rollno =rollno;
// };

// student.prototype.getStudentDetails = function(){
//     console.log(`Name is:${this.name} RollNo is:${this.rollno}`);
// }
// student.prototype.marks = (total,subject)=>{
//     this.total = total;
//     this.subject =subject;
//     this.percentage = total/subject;
// }
// student.prototype.getMarks = ()=>{
//     console.log(`percentage is ${this.percentage}`);
// }

// let std = new student("Sahil",5);
// std.getStudentDetails();
// std.marks(555,6);
// std.getMarks();



// 2. Class inheritance using the extends keyword is used to inherit the classes:
class std_marks extends std{
    constructor(nm,roll,marks){
        // Super() function is used to pass the constructor values to the parent class.
        super(nm,roll);
        this.marks=marks;
    }
    get_marks(){
        // In javascript we can'nt directly access the parent method.To access the parent method we need to use the super keyword.
        super.get_details();
        console.log(this.marks);
    }
}

let obj2 = new std_marks("Ram",2,101);
obj2.get_marks();
