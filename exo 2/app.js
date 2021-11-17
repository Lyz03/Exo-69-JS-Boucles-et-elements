let list = document.getElementById('liste-commissions');

let newItem = document.createElement('li');
newItem.innerText = "une salade";
list.append(newItem);

// get what the user wrote in the input and put it in the list
function getValue() {
    let inputTextValue = document.getElementById('input_text').value;
    let item = document.createElement('li');
    item.innerText = inputTextValue;
    list.append(item);
}


let button = document.getElementById('button');

button.addEventListener("click", getValue);

//remove the last item from the list if there is one
function deleteItem() {
    if (list.lastChild) {
        list.lastChild.remove();
    }
}

let deleteButton = document.getElementById('delete');

deleteButton.addEventListener("click", deleteItem);


