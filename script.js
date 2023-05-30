const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const taskList = document.querySelector('.list-task')


let myListItens = []

function addNewTask(){
    myListItens.push({
        task: input.value,
        checked: false
    })

    input.value = ''

    showTasks()
}

function showTasks(){

    let newLi = ''

    myListItens.forEach( (item, index) =>{

        newLi = newLi + `

            <li class="task ${item.checked && "done"}">
                <img src="./assets/checked.png" alt="checked" onclick="checkTask(${index})">
                <p>${item.task}</p>
                <img src="./assets/trash.png" alt="trash" onclick="deleteItem(${index})">                         
            </li>

        `
    })  
    
    taskList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(myListItens))

}

function checkTask(index){
    myListItens[index].checked = !myListItens[index].checked

    showTasks()

}

function deleteItem(index){
    myListItens.splice(index, 1)

    showTasks()
}

function reloadingTask(){
    const tasksLocalStorage = localStorage.getItem('list')

    if (tasksLocalStorage){
    myListItens = JSON.parse(tasksLocalStorage)
}
    showTasks()
}

reloadingTask()
button.addEventListener('click', addNewTask )  