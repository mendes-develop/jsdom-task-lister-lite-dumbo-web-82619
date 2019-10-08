
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let toDoUl = document.querySelector("#tasks")
  let form = document.querySelector('#create-task-form')


  addSelectToForm()

  toDoUl.addEventListener("click", function(evt){
      if (evt.target.classList.contains("taskItem")) {
        evt.target.remove()
      }

  })

  form.addEventListener("submit", function(evt){
    evt.preventDefault()
    let textInput = evt.target["new-task-description"].value
    let priorityLi = evt.target.querySelector('select').value
    console.log(priorityLi)
    addToUl(textInput, priorityLi)
  })


  function addToUl(string, priority){
    let newLi = document.createElement('li')
    newLi.className = "taskItem " + priority
    newLi.innerText = string
    toDoUl.append(newLi)
  }

  function addSelectToForm(){
    let collection = document.createElement('select')
    let label = document.createElement('label')
    label.innerHTML += "Task Priority:"
    collection.innerHTML += "<option value='urgent'>Urgent</option> <option value='normal'>Normal</option> <option value='low'>Low</option>"
    form.append(label)
    form.append(collection)
  }







});
