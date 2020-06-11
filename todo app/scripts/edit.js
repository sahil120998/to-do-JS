const title = document.createElement("h2")
const body = document.querySelector("#body")
const remove = document.querySelector("#remove")
const save = document.querySelector("#save")

const noteid = location.hash.substring(1)
const todos = fetchtodos()

const todo = todos.find(function(todo){
    return todo.id === noteid
})

title.textContent = todo.todo
body.textContent = todo.body

remove.addEventListener("click",function(e){
    removetodos(noteid)
    savetodos(todos)
    location.assign("index.html")
})

save.addEventListener("click",function(e){
    todo.body = document.getElementById("body").value
    savetodos(todos)
    location.assign("index.html")
})
document.querySelector("#title").appendChild(title)

