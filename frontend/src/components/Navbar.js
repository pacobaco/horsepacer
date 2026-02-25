import {Link} from "react-router-dom"

function Navbar(){

return(

<div>

<Link to="/">Home</Link>

<Link to="/tasks">Tasks</Link>

<Link to="/dashboard">Dashboard</Link>

</div>

)

}

export default Navbar
