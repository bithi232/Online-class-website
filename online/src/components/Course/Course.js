import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './course.css';
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';


const Course = (subject) => {
    const first15 = fakeData.slice(0,15);
    const [subjects,setSubjects] = useState(first15);
    const[cart, setCart] = useState([]);

    const handleAddSubject = (subject)=>{
       
        const newCart = [...cart,subject];
        setCart(newCart);
    }
    
    
    
    return (
        <div className="course-container">
           
          <div className="subject-container">
                
                   {
                    subjects.map(subjectData=><Subject 
                        handleAddSubject={handleAddSubject} 
                        subject={subjectData}></Subject>)
                   }
                 
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
            
      
            
        </div>
    );
};

export default Course;