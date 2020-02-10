import Task from "./components/Task/index.js" 
let element;
let input;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText")
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick,);
}

function onClick() {
    console.log("clicked!");
    if (input.value != "") {
        var newTask = new Task ({content:input.value,done:false}); 
        element.appendChild(newTask.render());
        }
    }
    
    window.addEventListener("DOMContentLoaded", runOnLoad);





    // let newTask = document.createElement("div");
    // let input = document.createElement("input");
    // input.type = "checkbox";
    // let span = document.createElement("span");
    // span.innerHTML = taskInput.value;
    // newTask.appendChild(input)
    // newTask.appendChild(span);
    // function onChange() {
    //     console.log(span.innerHTML);
    //     element.appendChild(newTask)
// ;    }
    // input.addEventListener("change", onChange);
    // newTask.innerHTML = `<input type='checkbox'></input<span>${taskInput.value}</span>`; 
 


// window.addEventListener("DOMContentLoaded", runOnLoad);