import {useEffect,useState} from "react"
import axios from "axios"

function Tasks(){

const [tasks,setTasks]=useState([])

useEffect(()=>{

axios.get("http://localhost:5000/tasks")

.then(res=>setTasks(res.data))

},[])

return(

<div>

<h2>Tasks</h2>

{tasks.map(t=>

<div key={t.id}>

{t.title}

</div>

)}

</div>

)

}

export default Tasks
