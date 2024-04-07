console.log("hi dorcas")
console.log("welcome dorcas ibrahim")


// type assertion allow us to inform a compilier that a variable of dpecific type  using (as)keyqord than it infer

// It's essential to be cautious with type assertions because you're essentially telling TypeScript, "Trust me, I know the type better than you do." If you're wrong, runtime errors can occur. Always make sure you're certain of the type before asserting it.

const myString :unknown="my name is ayeola kehinde"
 const numchar =(myString as string).length
 console.log(numchar)
const button1 =document.getElementById("buttonClick")!
const todos =document.getElementById("todoInput")! as HTMLInputElement 

const todolist =document.querySelector("#todolist")!
// console.log(todo)


// button1.addEventListener("click",function (){
//     alert(todo.value)
//     todo.value=""
// })

// adding interface to it

interface Todo {
    text:string,
    completed:boolean
}
const newTodo:Todo[]=readTodos()
newTodo.forEach(createTodo)


function readTodos ():Todo[]{
    const todoJson=localStorage.getItem("todos")
    if(todoJson ==null){
        return []

    }else{
        return JSON.parse(todoJson)
    }

    
}
const form =document.querySelector("#formInput")!

form.addEventListener("submit",function(e){
    
    e.preventDefault()
    const newTodoList:Todo={
        text:todos.value,
        completed:false
    }   

    createTodo(newTodoList)
    let newpush  =newTodo.push(newTodoList)
    console.log(newTodo)
    // console.log("submitted ooooo")

})


function createTodo(todo:Todo){
    
    const newLi =document.createElement("Li")
    const checkBox =document.createElement("input")
    checkBox.type="checkbox"
    checkBox.checked =todo.completed
      checkBox.addEventListener("change",()=>{
        console.log("changed")
        
     todo.completed =checkBox.checked
        localStorage.setItem("check",JSON.stringify(newTodo))
      })
    newLi.append(todo.text)
    todolist.append(newLi)
    newLi.append(checkBox)
    localStorage.setItem("todos",JSON.stringify(newTodo))
    // console.log(newvalue)
      todos.value=""

}
