import React from 'react'
import AppTitle from './AppTitle'
const generateArray = (n) =>(Array.from(Array(n),(v,k)=>k+1));
const App = () => (
  <body>
  <h1>Minimal React jiangg</h1>  
    <p>Bundle size: 57 bytes, Load time of the bundle: 55 ms, Last commit SHA1: 9302091f064dc4892b63f19626014c9d54326514</p>
  <AppTitle/> 

 </body>
)

export default App