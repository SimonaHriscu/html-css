const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);


function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
   
    //Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerText = '✓';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    completedButton.addEventListener("click", crossElem);
    //Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerText = "✗";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    trashButton.addEventListener("click", deleteElem)
    //append to the list
    todoList.appendChild(todoDiv);
    //clear to Input value
    
    todoInput.value = "";

    function crossElem(){
        newTodo.classList.toggle("checked");
    }
    function deleteElem(){
       // todoDiv.classList.add("deleted");
        todoDiv.classList.add("fall");
        todoDiv.addEventListener("transitionend", function(){
            todoDiv.classList.add("deleted")
        } )

    }

}