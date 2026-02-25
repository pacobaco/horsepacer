
let token="";

function register(){

fetch("http://localhost:3000/register",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name:name.value,
email:email.value

})

})
.then(r=>r.json())
.then(d=>{

token=d.token;

window.location="dashboard.html";

});

}


function loadTasks(){

fetch("http://localhost:3000/tasks")
.then(r=>r.json())
.then(tasks=>{

let html="";

tasks.forEach(t=>{

html+=`

<div>

${t.title}

<button onclick="loadSteps(${t.id})">

Learn

</button>

</div>

`;

});

tasksDiv.innerHTML=html;

});

}


function loadSteps(id){

fetch(
"http://localhost:3000/steps/"+id,

{
headers:{
Authorization:token
}
}

)
.then(r=>r.json())
.then(steps=>{

let html="<ul>";

steps.forEach(s=>{

html+=`<li>${s.content}</li>`;

});

html+="</ul>";

tasksDiv.innerHTML=html;

});

}

