const todos = fetchtodos()
const filter = {
    searchtext : ""
}
rendertodos(todos,filter)

document.querySelector("#form1").addEventListener("submit",(e) =>{
    e.preventDefault()
    let id = uuidv4()
    todos.push({
        id : id,
        todo : e.target.elements.todo.value,
        completed : false,
        body : "description...."
    })

    savetodos(todos)
    e.target.elements.todo.value = ""
    rendertodos(todos, filter)

})

document.querySelector("#input1").addEventListener("input", (e) => {
   filter.searchtext =  e.target.value  
   rendertodos(todos, filter)
})