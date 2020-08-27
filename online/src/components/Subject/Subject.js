import React from 'react';
import './Subject.css';

const Subject = (props) => {
  
    const{title,price}=props.subject;
    
    return (
        <div className='subject'>
             <div>

             </div>
             <div>
                  <h4 className="subject-name"></h4>
                  <br/>
                  <h3>Course Name:{title}</h3>
                  <p>${price}</p>
                  <button className="main-button"
                  onClick={()=>
                  props.handleAddSubject(props.subject)}>
                      Enroll Now
                      </button>
             </div>
             
            
             
        </div>
    );
};

export default Subject;