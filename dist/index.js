"use strict";
console.log("hi dorcas");
console.log("welcome dorcas ibrahim");
// type assertion allow us to inform a compilier that a variable of dpecific type  using (as)keyqord than it infer
// It's essential to be cautious with type assertions because you're essentially telling TypeScript, "Trust me, I know the type better than you do." If you're wrong, runtime errors can occur. Always make sure you're certain of the type before asserting it.
const myString = "my name is ayeola kehinde";
const numchar = myString.length;
console.log(numchar);
const button1 = document.getElementById("buttonClick");
const todos = document.getElementById("todoInput");
const todolist = document.querySelector("#todolist");
const newTodo = readTodos();
newTodo.forEach(createTodo);
function readTodos() {
    const todoJson = localStorage.getItem("todos");
    if (todoJson == null) {
        return [];
    }
    else {
        return JSON.parse(todoJson);
    }
}
const form = document.querySelector("#formInput");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodoList = {
        text: todos.value,
        completed: false
    };
    createTodo(newTodoList);
    let newpush = newTodo.push(newTodoList);
    console.log(newTodo);
    // console.log("submitted ooooo")
});
function createTodo(todo) {
    const newLi = document.createElement("Li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", () => {
        console.log("changed");
        todo.completed = checkBox.checked;
        localStorage.setItem("check", JSON.stringify(newTodo));
    });
    newLi.append(todo.text);
    todolist.append(newLi);
    newLi.append(checkBox);
    localStorage.setItem("todos", JSON.stringify(newTodo));
    // console.log(newvalue)
    todos.value = "";
}
