//Object list
let objList = [];

function $(element) {
    return document.getElementById(element);
}

//Create object
function toDoItem(title, description, completed){
    this.id = objList.length;
    this.title = title;
    this.description = description;
    this.completed = completed;
}

//checkbox function
function checkBox():void{
    let id = this.id
    let item = objList[id]
    if (item.completed == false){
        item.completed = true;
        this.style.backgroundImage = "url('../Images/scaled.png')";
    } else {
        item.completed = false;
        this.style.backgroundImage = '';
    }
    localStorage.setItem("ToDoItems", JSON.stringify(objList));
}

//Add item on button press
function addItem(){
    let title:HTMLInputElement = <HTMLInputElement>$("title");
    let desc:HTMLInputElement = <HTMLInputElement>$("desc");
    let item = new toDoItem(title.value, desc.value, false);
    objList.push(item);
    localStorage.setItem("ToDoItems", JSON.stringify(objList));
    displayItem(item);
}

//Display item based on obj
function displayItem(item):void{
    //Create items
    let holder = document.createElement('div');
    let heading = document.createElement('header');
    let desc = document.createElement('p');
    let button = document.createElement('button');

    //Styling
    holder.className += 'newClass';
    //Subtract 1 since the objs length increased
    heading.textContent = item.title;
    heading.style.fontWeight = 'bold';
    desc.textContent = item.description;
    desc.style.marginBottom = '0px';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.float = 'left';
    button.id = '' + (objList.length - 1);
    button.addEventListener("click", checkBox);
    if (item.completed == true){
        button.style.backgroundImage = "url('../Images/scaled.png')";
    }

    //Append
    document.getElementById("toDoListDisplay").appendChild(holder);
    holder.appendChild(button);
    holder.appendChild(heading);
    holder.appendChild(desc);
}

window.addEventListener('DOMContentLoaded', () => {
    let storedItems = JSON.parse(localStorage.getItem("ToDoItems"));
    for(let i = 0; i < storedItems.length; i++){
        let storedItem = storedItems[i];
        objList.push(storedItem);
        displayItem(storedItem);
    }
})