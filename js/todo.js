const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", toDos)
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  
  span.innerText = newTodo;
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; 
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);