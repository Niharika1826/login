import React , {useContext, useEffect, useState} from 'react'

export default function EditFeedbackForm(props){
     const [feedback,setFeedback] =useState(props.currentFeedback)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setFeedback({...feedback,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateFeedback(feedback.feedBackId,feedback);
    }


   

     return (
        <form onSubmit={submitHandler}>
         
<label>feedBackId</label>
<h1>{props.currentFeedback.feedBackId}</h1>

<label>driverRating</label>
<input 
type='number'
name='driverRating'
value={feedback.driverRating}
onChange={handleInputChange}/>

<label>serviceRating</label>
<input 
type='number'
name='serviceRating'
value={feedback.serviceRating}
onChange={handleInputChange}/>

<label>overallRating</label>
<input 
type='number'
name='overallRating'
value={feedback.overallRating}
onChange={handleInputChange}/>

<label>comments</label>
<input 
type='text'
name='comments'
value={feedback.comments}
onChange={handleInputChange}/>



<button>Update Feedback</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )




}