let element = undefined;
let taskInput;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);

    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
    taskInput = document.getElementById("taskText");
}
function onClick() {
    console.log("clicked!");
    let newTask = document.createElement("div");
    let input = document.createElement("input");
    input.type = "checkbox";
    let span = document.createElement("span");
    span.innerHTML = taskInput.value;
    newTask.appendChild(input)
    newTask.appendChild(span);
    function onChange() {
        console.log(span.innerHTML);
    }
    input.addEventListener("change", onChange);
    // newTask.innerHTML = `<input type='checkbox'></input<span>${taskInput.value}</span>`; 

    element.appendChild(newTask); 
}

window.addEventListener("DOMContentLoaded", runOnLoad);