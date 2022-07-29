import {Link} from 'react-router-dom';
const PassengerController=()=>{
  
    return(
<div className="navbar-nav mr-auto">
         

          <li className="nav-item">
            <Link to={"/viewAllFeedBacks"} className="nav-link">
              Get All FeedBacks
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/addFeedBack"} className="nav-link">
              Add FeedBack
            </Link>
          </li>
    
          
        </div>
    )
}

export default PassengerController;