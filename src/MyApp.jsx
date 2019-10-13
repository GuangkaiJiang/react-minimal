import React from 'react'
import AppTitle from './AppTitle'
const generateArray = (n) =>(Array.from(Array(n),(v,k)=>k+1));
const generateRandomArray = (n) =>(Array.from(Array(n), () => Math.ceil(Math.random() * 25)));
const arrayEx4 = [2, 56, 23, 88, 17, 4];
const arrayEx5 = [2, 5, 8, 10];
const squareRoot = (arr) => (arr.map(x=>Math.sqrt(x)));
function allStudents()
{
 var stu=[];
data.forEach(x=>x.students.forEach(x=>stu.push(x.name)));
document.getElementById('studentList').innerHTML = stu.toString();
}
function sortedStudents()
{
 var stu=[];
 data.forEach(x=>x.students.forEach(x=>{ stu.push(x.name)}));
stu.sort();
document.getElementById('studentList').innerHTML = stu.toString();
}
function oldStudents()
{
  var stu=[];
data.forEach(x=>{if(x.active) x.students.forEach(x=>{if(x.age>20) stu.push(x.name)})});
document.getElementById('studentList').innerHTML = stu.toString();
}
const data=
[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]


const App = () => (
  <body>
  <h1>Minimal React jiangg</h1>  
    <p>Bundle size: 57 bytes, Load time of the bundle: 55 ms, Last commit SHA1: 9302091f064dc4892b63f19626014c9d54326514</p>
  <AppTitle/> 
  <p>Display numbers bigger than 15 from [2, 56, 23, 88, 17, 4]:</p>
  {arrayEx4.filter(element=>element>15).toString()}
  <p>Display square root of [2, 5, 8, 10]:</p>
  {squareRoot(arrayEx5).toString()}
 <main>
 <button onClick={allStudents}> All students</button>
 <button onClick={sortedStudents}> Sorted students</button>
 <button onClick={oldStudents}> Old students</button>
 </main>
 <ul id="studentList"></ul>



 </body>
)

export default App