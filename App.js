import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import Tasks from "./pages/Tasks"
import TaskPage from "./pages/TaskPage"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/tasks" element={<Tasks/>}/>

<Route path="/task/:id" element={<TaskPage/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/login" element={<Login/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
