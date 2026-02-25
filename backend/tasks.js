const db=require("./database");

function getTasks(callback){

db.all("SELECT * FROM tasks",callback);

}

function getSteps(taskId,callback){

db.all(
"SELECT * FROM steps WHERE taskId=?",
[taskId],
callback
);

}

module.exports={
getTasks,
getSteps
};
