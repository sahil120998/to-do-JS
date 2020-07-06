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
        const text = document.createElement("p")
        const btn = document.createElement("button")

        text.textContent = item.todo
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

const rendertodos = function(todos,filter,DId){
    //retriving all todos of selected date.
    var gt= [];
    todos.forEach(function(todo){
            if(todo.DId === DId)
            {
                gt.push(todo)
            }
    })

    if(gt.length !== 0)
    {
    //retrieving all todos which contains searched text.
    const filteredtodos = gt.filter((todo) => todo.todo.toLowerCase().includes(filter.searchtext.toLowerCase()) )
    document.querySelector(".data").innerHTML = " "
    NewEl(filteredtodos)
    }
    else
    {
        document.querySelector(".data").innerHTML = "<div class='todo-data'><p>No todos Added.Enjoy your day!!!</p></div>"
    }
}

const renderCalendar = function(Currday,Currmonth){
    const newvalue = parseInt(Currday)
    date.setDate(1);
  
    const monthDays = document.querySelector(".days");
  
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
  
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
  
    const firstDayIndex = date.getDay();
  
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
  
    const nextDays = 7 - lastDayIndex - 1;
  
    
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  
    document.querySelector(".date p").innerHTML = new Date().toDateString();
    MandY = "-"+months[date.getMonth()]+"-"+date.getFullYear()
  
    let days = "";
  
    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
  
    for (let i = 1; i <= lastDay; i++) {
      if (
        i === newvalue &&
        date.getMonth() === Currmonth
      ) {
        days += `<div class="today">${i}</div>`;
        
      } else {
        days += `<div>${i}</div>`;
      }
    }
  
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }
    DId = new Date().getDate() + MandY
  
}

const remainingtodos = function(todos){
    const remainingtodo = todos.find(function(todo){
        return todo.completed === true
    })
    return remainingtodo.length
}