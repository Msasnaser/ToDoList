const formTasks = document.querySelector(".formTasks");
let allTasks=[];
formTasks.onsubmit = addTask;
 //  if(task==''){
//     alert("You must write something!");
// }
function addTask(e) {
    e.preventDefault();
    const input = document.querySelector(".inputText").value;
    if(input==''){
        alert("You must write something to do!");
    }
    let task = {};
   task.value=input;
   allTasks.push(task);
   addTasks(e);
 }
 function addTasks(e) {
    const result =  allTasks.map(function(e){
        return `
        <div class="yourTask">
        <input type="checkbox" name="task1" onchange="updateTaskStatus(this)">
        <span class="task1">${e.value}</span>
        </div>
        `;
}).join(" ");
document.querySelector(".YourTasks").innerHTML=result;
 }
 function updateTaskStatus(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
}
 
