import React from 'react'
import AppTitle from './AppTitle'
const generateArray = (n) =>(Array.from(Array(n),(v,k)=>k+1));
const generateRandomArray = (n) =>(Array.from(Array(n), () => Math.ceil(Math.random() * 25)));
const arrayEx4 = [2, 56, 23, 88, 17, 4];
const arrayEx5 = [2, 5, 8, 10];
const squareRoot = (arr) => (arr.map(x=>Math.sqrt(x)));
const App = () => (
  <body>
  <h1>Minimal React jiangg</h1>  
    <p>Bundle size: 57 bytes, Load time of the bundle: 55 ms, Last commit SHA1: 9302091f064dc4892b63f19626014c9d54326514</p>
  <AppTitle/> 
  <p>Display numbers bigger than 15 from [2, 56, 23, 88, 17, 4]:</p>
  {arrayEx4.filter(element=>element>15).toString()}
  <p>Display square root of [2, 5, 8, 10]:</p>
  {squareRoot(arrayEx5).toString()}

 </body>
)

export default App