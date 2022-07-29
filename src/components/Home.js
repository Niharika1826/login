import {Link} from 'react-router-dom';
const Home = ()=>{

    return(

        <section>
         <h1>Home</h1>
         <br/>
         
         <Link to ="register">Register</Link>
         <Link to ="login">Login</Link>

        </section>
    )
}

export default Home;