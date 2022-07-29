import { Route,Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Passenger from "./components/Passenger";
import PassengerLogin from "./components/PassengerLogin";
import './index.css';
import Home from "./components/Home";
import Register from "./components/Register";
import Admin from "./components/Admin";
import { useState,useEffect } from "react";
import apiClient from './api/http-common';
import EditRouteForm from './components/EditRouteForm';
import { BrowserRouter ,Link} from "react-router-dom";
import RouteList from './components/RouteList';
import AddRouteForm from './components/AddRouteForm';
import AdminController from "./components/AdminController";
import AdminLogin from "./components/AdminLogin";
import PassengerController from "./components/PassengerController";
import Login from "./components/Login";
import FeedbackList from "./components/FeedbackList";
import AddFeedbackForm from "./components/AddFeedbackForm";
import EditFeedbackForm from "./components/EditFeedbackForm";

const Roles = {
  'Passenger' :1,
  'Admin':2
}
function App(){

  const [routeData,setRoute]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/getAllRoutes').then((response)=>{
      setRoute(response.data);
    })},[])

    
const [editingRoute,setEditingRoute]=useState(false);

const routeInitialFormState = {
  routeId:0,
  busId:0,
  routeFrom:'',
  routeTo:'',
  distance:''

}
const [currentRoute,setCurrentRoute] 
     =useState(routeInitialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addRoute(route){
  try{
  const response=await apiClient.post('/addRoute',route);
    setRoute([...routeData,response.data]);
    console.log(routeData);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deleteRoute(routeId){
  await apiClient.delete(`/deleteRoute/${routeId}`);
    setRoute(routeData.filter((route)=>route.routeId !== routeId));
  }
  
  const editRoute=(route)=>{

    setEditingRoute(true);
      setCurrentRoute
      ({routeId:route.routeId,busId:route.busId,routeFrom:route.routeFrom,
        routeTo:route.routeTo,distance:route.distance})
     
  }
  
  const updateRoute = (routeId,updatedRoute)=>{
  
    setEditingRoute(false);
    apiClient.put(`/updateRoute/${routeId}`,updatedRoute).then((response)=>
    {
  
      console.log('route updated');
      setRoute(routeData.map((route)=>
    (route.routeId === routeId ? updatedRoute : route)));
    })

  }

  const [feedbacks,setFeedbacks]=useState([]);

    

    useEffect(()=>{apiClient.get('/viewAllFeedBacks').then((response)=>{
      setFeedbacks(response.data);
    })},[])
    
    

    
const [editingFeedBack,setEditingFeedBack]=useState(false);

const feedBackInitialFormState = {
  feedBackId:0,
  driverRating:0,
  serviceRating:0,
  overallRating:0,
  comments:'',
  user:{
    userLoginId:0
  },
  bus:{
    busId:0
  }


}
const [currentFeedback,setCurrentFeedback] 
     =useState(feedBackInitialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addFeedback(feedback){
  try{
  const response=await apiClient.post('/addFeedBack',feedback);
    setFeedbacks([...feedbacks,response.data]);
    console.log(feedbacks);
    
  }catch(err){
    console.log(err)
  }
  
}




/*async function deleteFeedback(feedBackId){
  await apiClient.delete(`/feedbacks/${feedBackId}`);
    setFeedbacks(feedbacks.filter((feedback)=>feedback.ifeedBackId !== feedBackId));
  }*/
  
  const editFeedback=(feedback)=>{

    setEditingFeedBack(true);
      setCurrentFeedback
      ({feedBackId:feedback.feedBackId,userLoginId:feedback.userLoginId,busId:feedback.busId,driverRating:feedback.driverRating,
        serviceRating:feedback.serviceRating,overallRating:feedback.overallRating,comments:feedback.comments,feedBackDate:feedback.feedBackDatae})
     
  }
  
  const updateFeedback = (feedBackId,updatedFeedback)=>{
  
    setEditingFeedBack(false);
    apiClient.put(`/updateFeedBack${feedBackId}`,updatedFeedback).then((response)=>
    {
  
      console.log('feedback updated');
      setFeedbacks(feedbacks.map((feedback)=>
    (feedback.feedBackId === feedBackId ? updatedFeedback : feedback)));
    })
    
  }

  const [reservations,setReservations]=useState([]);

  useEffect(()=>{apiClient.get("/viewAll").then((response)=>{
    setReservations(response.data);
  })},[])

  const [editing,setEditing]=useState(false);

  const initialFormState ={
    reservationId:'0',
    reservationType:'',
    source:'',
    destination:''

  }

  const [currentReservation,setCurrentReservation] 
     =useState(initialFormState);

     async function addReservation(reservation){
      try{
      const response=await apiClient.post('/addReservation',reservation);
        setReservations([...reservations,response.data]);
        console.log(reservations);
        
      }catch(err){
        console.log(err)
      }
      
    }

    async function deleteReservation(reservationId){
      await apiClient.delete(`/${reservationId}`);
        setReservations(reservations.filter((reservation)=>reservation.reservationId !== reservationId));
      }
      
      const editReservation=(reservation)=>{
    
        setEditing(true);
          setCurrentReservation
          ({reservationId:reservation.reservationId,reservationType:reservation.reservationType,
            source:reservation.source, destination:reservation.destination})
         
      }
      
      const updateReservation = (reservationId,updatedReservation)=>{
      
        setEditing(false);
        apiClient.put(`/${reservationId}`,updatedReservation).then((response)=>
        {
      
          console.log('reservation updated');
          setReservations(reservations.map((reservation)=>
        (reservation.reservationId === reservationId ? updateReservation : reservation)));
        })
        
      }

    const findByDate=(date,data)=>{
      setEditing(true);
      apiClient.post(`/${date}`,data).then((response)=>{
        console.log('reservation date updated')
        setReservations(reservations.map((reservation)=>
        (reservation.date===date ? findByDate :date)));
      })
      
    }
    
  
  
  

  return(

    <div>
    <div className='container'>
  
    <div className='flex-row'>
      <div className='flex-large'>
        {editingRoute ? (
        <div>
          <h2>Edit Route Form </h2>
          <EditRouteForm
           setEditing={setEditingRoute}
           currentRoute={currentRoute}
           updateRoute={updateRoute}
           />
           </div>):(

    <BrowserRouter>
    

      
    <Routes>
      
      <Route path = '/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path = "passenger"element={<Passenger/>}/>
      <Route path = "passengerlogin"element={<PassengerLogin/>}/>
      <Route path = "passengerController"element={<PassengerController/>}/>
      <Route path = "adminController"element={<AdminController/>}/>
      <Route path = "register"element={<Register/>}/>
      <Route path = "login"element={<Login/>}/>
      <Route path = "admin"element={<Admin/>}/>
      <Route path = "adminLogin"element={<AdminLogin/>}/>
      
      
          <Route  path="/addRoute" element={<AddRouteForm addRoute={addRoute}/>} />
         
         <Route path='/getAllRoutes' element={<RouteList 
    routeData={routeData} 
         editRoute={editRoute}
         deleteRoute={deleteRoute} />}>

         </Route>
         <Route path="/updateRoute/:id" element={<EditRouteForm /> }></Route>


        
          <Route exact path="/addFeedback" element={<AddFeedbackForm addFeedback={addFeedback}/>} />
         
         <Route path="/viewAllFeedBacks" element={<FeedbackList 
    feedbackData={feedbacks} 
         editFeedback={editFeedback}
         /*deleteFeedback={deleteFeedback}*/ />}>

         </Route>
         <Route path="/updateFeedBack/:feedBackId" element={<EditFeedbackForm /> }></Route>
         
          
         </Route>
        </Routes>
    
    
    </BrowserRouter>
           )
           
           
           }</div>
    </div></div></div>
  )
         }

         
         
  

export default App;