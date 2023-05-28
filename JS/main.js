var objList = [];
function $(element) {
    return document.getElementById(element);
}
function toDoItem(title, description, completed) {
    this.id = objList.length;
    this.title = title;
    this.description = description;
    this.completed = completed;
}
function checkBox() {
    var id = this.id;
    var item = objList[id];
    if (item.completed == false) {
        item.completed = true;
        this.style.backgroundImage = "url('../Images/scaled.png')";
    }
    else {
        item.completed = false;
        this.style.backgroundImage = '';
    }
    localStorage.setItem("ToDoItems", JSON.stringify(objList));
}
function addItem() {
    var title = $("title");
    var desc = $("desc");
    var item = new toDoItem(title.value, desc.value, false);
    objList.push(item);
    localStorage.setItem("ToDoItems", JSON.stringify(objList));
    displayItem(item);
}
function displayItem(item) {
    var holder = document.createElement('div');
    var heading = document.createElement('header');
    var desc = document.createElement('p');
    var button = document.createElement('button');
    holder.className += 'newClass';
    heading.textContent = item.title;
    heading.style.fontWeight = 'bold';
    desc.textContent = item.description;
    desc.style.marginBottom = '0px';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.float = 'left';
    button.id = '' + (objList.length - 1);
    button.addEventListener("click", checkBox);
    if (item.completed == true) {
        button.style.backgroundImage = "url('../Images/scaled.png')";
    }
    document.getElementById("toDoListDisplay").appendChild(holder);
    holder.appendChild(button);
    holder.appendChild(heading);
    holder.appendChild(desc);
}
window.addEventListener('DOMContentLoaded', function () {
    var storedItems = JSON.parse(localStorage.getItem("ToDoItems"));
    for (var i = 0; i < storedItems.length; i++) {
        var storedItem = storedItems[i];
        objList.push(storedItem);
        displayItem(storedItem);
    }
});
