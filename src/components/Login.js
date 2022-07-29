import { Dropdown } from "react-bootstrap";


function Login (){

  return(
        <Dropdown>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
           User Role
          </Dropdown.Toggle>

          <Dropdown.Menu><br/>
            <br/><br/><Dropdown.Item href = "passengerLogin">Passenger</Dropdown.Item><br/><br/>
            <Dropdown.Item href = "adminLogin">Admin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  
    
  )

}

export default Login;