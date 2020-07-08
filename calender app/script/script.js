//localStorage.clear()
const todos = fetchtodos()
const date = new Date();

//declaring variables
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const filter = {
    searchtext : ""
}
let MandY = '';
let DateId;
let Currday = date.getDate()
let Currmonth = date.getMonth()
let DId = " "
let remaining;

renderCalendar(Currday,Currmonth);

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  if(Currmonth !== 0 ){
  Currmonth = Currmonth - 1;
console.log(Currmonth)}
  else{
    Currmonth = 11
    console.log(Currmonth)
  }
  renderCalendar("1",Currmonth);
  DId = "1-"+months[Currmonth]+"-"+date.getFullYear()
  remaining = remainingtodos(todos,months[Currmonth]+"-"+date.getFullYear())
  rendertodos(todos,filter,DId,remaining)
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  if(Currmonth !== 11 ){
    Currmonth = Currmonth + 1;}
    else{
      Currmonth = 0
    }
  renderCalendar("1",Currmonth);
  DId = "1-"+months[Currmonth]+"-"+date.getFullYear()
  remaining = remainingtodos(todos,months[Currmonth]+"-"+date.getFullYear())
  rendertodos(todos,filter,DId,remaining)
});

document.querySelector(".days").addEventListener("click",(e) =>{

    var val = e.target.textContent;
    renderCalendar(val,Currmonth);
    DId = val+MandY;
    remaining = remainingtodos(todos,months[Currmonth]+"-"+date.getFullYear())
    rendertodos(todos,filter,DId,remaining)
});

document.querySelector("#input1").addEventListener("input", (e) => {
  filter.searchtext =  e.target.value  
  rendertodos(todos, filter,DId,remaining)
})

document.querySelector("#form1").addEventListener("submit",(e) =>{
  e.preventDefault()
  let id = uuidv4()
  //todo structure
  todos.push({
      DId: DId,
      id : id,
      todo : e.target.elements.todo.value,
  })

  savetodos(todos)
  e.target.elements.todo.value = ""
  remaining=remainingtodos(todos,months[Currmonth]+"-"+date.getFullYear())
  rendertodos(todos, filter,DId,remaining)
  closeForm()

});

document.querySelector(".addtodo").addEventListener("click", () => {
  openForm();
});



remaining = remainingtodos(todos,months[Currmonth]+"-"+date.getFullYear())
rendertodos(todos,filter,DId,remaining)

// document.querySelector("#input1").addEventListener("input", (e) => {
//   filter.searchtext =  e.target.value  
//   rendertodos(todos, filter)
// })