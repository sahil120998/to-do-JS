const savetodos =function(todos){
    localStorage.setItem("todos", JSON.stringify(todos))
}

const fetchtodos = function(){
    const todosJson = localStorage.getItem("todos")
    if(todosJson !== null){
        const todos = JSON.parse(todosJson)
        return todos
    }
    else{
        return []
    }

}
const toggletodo = function(id){
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if(todo !== undefined){
        todo.completed = !todo.completed
    }
}

const removetodos = function(id){
    const findIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    
    if(findIndex > -1){
        todos.splice(findIndex,1)
    }

}

const NewEl = function(filteredtodos){
    filteredtodos.forEach(item => {
        const cont = document.createElement("div")
        const input = document.createElement("input")
        const text = document.createElement("a")
        const btn = document.createElement("button")

        input.setAttribute("type","checkbox")
        input.checked = item.completed
        input.addEventListener("click",function(e){
            toggletodo(item.id)
            savetodos(todos)
            rendertodos(todos,filter)
        })
        cont.appendChild(input)

        text.textContent = item.todo
        text.setAttribute("href","edit.html#"+item.id)
        cont.appendChild(text)

        btn.textContent = "X"
        btn.addEventListener("click",function(e){
            removetodos(item.id)
            savetodos(todos)
            rendertodos(todos,filter)
        })
        cont.appendChild(btn)
        cont.classList.add("todo-data")
        btn.classList.add("cancel")
        document.querySelector(".data").appendChild(cont)
    });
}

const rendertodos = function(todos,filter){
    // const filteredtodos = todos.filter((item) => item.todo.toLowerCase().includes(filter.searchtext.toLowerCase()))
    const filteredtodos = todos.filter((todo) => todo.todo.toLowerCase().includes(filter.searchtext.toLowerCase()) )

    document.querySelector(".data").innerHTML = " "
    NewEl(filteredtodos)
    
    
    

}
const remainingtodos = function(todos){
    const remainingtodo = todos.find(function(todo){
        return todo.completed === true
    })
    return remainingtodo.length
}