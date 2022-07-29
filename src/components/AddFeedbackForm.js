import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addFeedback } from '../actions/feedbacks';

export default function AddFeedbackForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   feedBackId:0,
   driverRating:0,
   serviceRating:0,
   overallRating:0,
   comments:'',
   users:{
      userLoginId:0
   },
   bus:{
      busId:0
   }
}

const initialBusFormState={
   busId:0
}

const initialUserFormState={
   userLoginId:0
}

const [feedback,setFeedback]=useState(initialFormState);

const [bus,setBus]=useState(initialBusFormState);

const handleBusIdChange = (event)=>{
   const {name,value}=event.target;
   setBus({...bus,[name]:value});
   setFeedback({...feedback,...bus});
}

const [user,setUser]=useState(initialUserFormState);

const handleUserIdChange = (event)=>{
   const {name,value}=event.target;
   setUser({...user,[name]:value});
   setFeedback({...feedback,...user});
}

 

//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setFeedback({...feedback,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if( !feedback.driverRating || !feedback.serviceRating || 
    !feedback.overallRating || !feedback.comments ) return;
 console.log(feedback+'from addfeedbackform')
//props.addFeedback(feedback);
dispatch(addFeedback(feedback));
setFeedback(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>feedBackId</label><br/>
<input 
type='number'
name='feedBackId'
value={feedback.feedBackId}
onChange={handleInputChange}/>
<br/>

<label>driverRating</label><br/>
<input 
type='number'
name='driverRating'
value={feedback.driverRating}
onChange={handleInputChange}/>
<br/>

<label>serviceRating</label><br/>
<input 
type='number'
name='serviceRating'
value={feedback.serviceRating}
onChange={handleInputChange}/>
<br/>

<label>overallRating</label><br/>
<input 
type='number'
name='overallRating'
value={feedback.overallRating}
onChange={handleInputChange}/>
<br/>

<label>comments</label><br/>
<input 
type='text'
name='comments'
value={feedback.comments}
onChange={handleInputChange}/>
<br/>

<label>userLoginId</label><br/>
<input 
type='number'
name='userLoginId'
value={feedback.userLoginId}
onChange={handleUserIdChange}/>
<br/>

<label>busId</label><br/>
<input 
type='number'
name='busId'
value={feedback.busId}
onChange={handleBusIdChange}/>
<br/>







<button>Add New feedback</button>

</form>


</>
)


}