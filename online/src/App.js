import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './components/Course/Course';
import Data from './fakeData/Data';



function App() {
  const [courses,setCourses]=useState([]);


  //useEffect (()=>{
  //  fetch('')
  //},[])

  return (
    <div className="App">
     
      <Course></Course>
      
      
       
      <header className="App-header">
        

       
       
      </header>
    </div>
  );
}

export default App;
