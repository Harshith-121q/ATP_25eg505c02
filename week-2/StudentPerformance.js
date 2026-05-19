// assignment 2:
// StudentPerformanceDashboard:

const Data= [
    {id : 1, name:"Ravi",marks:78},
    {id : 2, name:"Anjali",marks:92},
    {id : 3, name:"Kiran",marks:35},
    {id : 4, name:"Sneha",marks:88},
    {id : 5, name:"Arjun",marks:40}
]
//  1. filter() students who passed (marks ≥ 40)
let StudentPassed = Data.filter(i=>i.marks>=40)
console.log("student Passed :",StudentPassed);
//  2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
let studentOfGrade = Data.map(e=> {
    let grade ;
    if (e.marks>=90) grade ="A";
    else if (e.marks>=75) grade ="B";
    else if (e.marks>=60) grade ="C";
    else grade ="D";
    return {...e,grade};
})
console.log("After adding Grade Field:",studentOfGrade)
// 3. reduce() to calculate average marks
let averageMarks = Data.reduce((acc,e)=>acc+e.marks,0 )/Data.length
console.log("Average marks of Students is :",averageMarks)
// 4. find() the student who scored 92
let findMarks = Data.find(e=>e.marks==92)
console.log(findMarks)
// 5. findIndex() of student "Kiran
let findIndexOfStudent = Data.findIndex(e=>e.name=="Kiran")
console.log("Index of Student Kiran is :",findIndexOfStudent)