
let userId=null;


function register(){

fetch("http://localhost:3000/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:document.getElementById("name").value
})

})
.then(r=>r.json())
.then(user=>{

userId=user.id;

document.getElementById("login").style.display="none";

document.getElementById("dashboard").style.display="block";

loadTasks();

});

}



function loadTasks(){

fetch("http://localhost:3000/tasks")
.then(r=>r.json())
.then(tasks=>{

let html="";

tasks.forEach(t=>{

html+=`

<div class="task">

<h3>${t.title}</h3>

<button onclick="unlock(${t.id})">

Unlock Steps (5 credits)

</button>

<div id="task${t.id}"></div>

</div>

`;

});

document.getElementById("tasks").innerHTML=html;

});
}



function unlock(taskId){

fetch("http://localhost:3000/unlock",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
userId,
taskId
})

})
.then(()=>showSteps(taskId));

}



function showSteps(taskId){

fetch("http://localhost:3000/tasks")
.then(r=>r.json())
.then(tasks=>{

let task=tasks.find(t=>t.id==taskId);

let html="<ul>";

task.steps.forEach(s=>{

html+=`<li>${s}</li>`;

});

html+="</ul>";

document.getElementById("task"+taskId).innerHTML=html;

});

}
