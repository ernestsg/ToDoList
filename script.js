//Selectors
const input = document.querySelector(".input");
const add = document.querySelector(".add");
const list = document.querySelector(".list");

//Event Listeners
add.addEventListener("click", addToDo);
list.addEventListener("click", _delete);
list.addEventListener("click", done)
//doneButton.addEventListener("click", doneDelete);
//deleteButton.addEventListener("click", doneDelete);


//Functions

function _delete(e){
    const item = e.target;
    if(item.classList[0] == "deleteButton"){
        item.parentElement.remove();
    }
}

function done(e){
    const item = e.target;
    if(item.classList[0] == "doneButton"){
        item.parentElement.classList.toggle("finished");
    }
}

function addToDo(event){
   event.preventDefault();
   
   // ToDo Div (taskDiv)

const taskDiv = document.createElement("div");
taskDiv.classList.add("taskDiv");

//Create Li
const task = document.createElement("li");
task.classList.add("task");
task.innerText = input.value;
taskDiv.appendChild(task);

//Create Buttons
const doneButton = document.createElement("button");
doneButton.classList.add("doneButton");
doneButton.innerHTML = "<i class='fas fa-check'></i>";
taskDiv.appendChild(doneButton);

const deleteButton = document.createElement("button");
deleteButton.classList.add("deleteButton");
deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
taskDiv.appendChild(deleteButton);

//Append to List if a message is written, else alert to input a task.

if(input.value == ""){
    alert("You can't leave this blank, input a task"); 
} else {
    list.appendChild(taskDiv);
}

// Clear input
input.value = "";
}

