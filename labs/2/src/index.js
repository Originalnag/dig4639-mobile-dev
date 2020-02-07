import Card from "./Components/Card/index.js"
// That fixed the issue, wow that simple.
function runOnLoad(){
    // Create a container for us    
    let element = document.createElement("div");    
    element.id = "container";
     document.body.appendChild(element);
    var newCard = new Card({content:"Sample value provided"});
    element.appendChild(newCard.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);