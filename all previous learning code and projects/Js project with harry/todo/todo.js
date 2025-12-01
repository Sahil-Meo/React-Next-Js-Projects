
const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-Input");
const todolistUl = document.getElementById("todo-list");
let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
      const todoObject = {
          text: todoText,
          completed: false
      }
    allTodos.push(todoObject );
    updateTodoList();
    saveTodos();
    todoInput.value = "";
  }
}

function updateTodoList() {
  todolistUl.innerHTML = "";
    allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItems(todo, todoIndex);
    todolistUl.append(todoItem);
  });
}

function createTodoItems(todo, todoIndex) {
  const todoid = "todo-"+todoIndex;
  const todoLi = document.createElement("li");
  const todoText = todo.text;
  todoLi.className = "todo";
  todoLi.innerHTML = `
                      <input type="checkbox" id="${todoid}" />
                      <label for="${todoid}" class="custom-checkbox">
                      <i class="fa-solid fa-check" style="color: hsl(0, 0%, 30%);"></i>
                      </label>
                      <label for="${todoid}" class="todo-text">${todoText} 
                          </label>
                      <button class="delete-button">
                      <i class="fa-solid fa-trash"></i></button>`;
      const deleteButton = todoLi.querySelector(".delete-button");
      deleteButton.addEventListener("click", ()=>{
          deleteTodoitem(todoIndex);
      })
      const checkbox = todoLi.querySelector("input");
      checkbox.addEventListener("change", ()=>{
          allTodos[todoIndex].completed = checkbox.checked;
          saveTodos(); 
      });
      checkbox.checked = todo.completed;
                      return todoLi;         
}

function deleteTodoitem(todoIndex){
  allTodos = allTodos.filter((_, i) => i !==todoIndex);
  saveTodos();
  updateTodoList();
}

function saveTodos(){
  const todoJson = JSON.stringify(allTodos);
  localStorage.setItem("todos", todoJson)
}

function getTodos(){
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}
