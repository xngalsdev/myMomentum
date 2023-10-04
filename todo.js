// 요소들을 변수에 저장
const todoForm = document.getElementById("frmTodo");
const todoinput = document.querySelector("#frmTodo input");
const todoList = document.getElementById("lstTodo");
// 로컬 스토리지에 저장하기 위한 키
const TODOS_KEY = "todos"
// 할 일 목록을 저장할 배열
let todos = [];
// 로컬 스토리지에 저장하는 함수
function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}
// 저장된 값을 삭제하는 함수
function deleteTodo(){
    const li = event.target.parentElement;
    const todoId = parseInt(li.id);
    todos = todos.filter((todo) => todo.id !== todoId);
    saveTodos();
    li.remove();
}
// 입력받은 할 일을 화면에 표시하는 함수
function displayTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    
}

// 할 일을 입력받는 함수
function handleSubmitTodo(event){
    event.preventDefault();
    const valueTodo = todoinput.value;
    todoinput.value = "";
    const newTodoObj = {
        text : valueTodo,
        id : Date.now(),
    };
    todos.push(newTodoObj);
    displayTodo(newTodoObj);
    saveTodos();
}



todoForm.addEventListener("submit", handleSubmitTodo);
// 입력받은 할 일을 화면에 표시
const savetd = localStorage.getItem(TODOS_KEY)

if (savetd !== null){
    const parseTodos = JSON.parse(savetd);
    todos = parseTodos;
    parseTodos.forEach(displayTodo);
}