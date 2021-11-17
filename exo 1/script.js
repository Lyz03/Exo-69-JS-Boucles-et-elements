let list = document.getElementById('liste-commissions');

let newItem = document.createElement('li');
newItem.innerText = "une salade";
list.append(newItem);



function getValue() {
    let inputTextValue = document.getElementById('input_text').value;
    let item = document.createElement('li');
    item.innerText = inputTextValue;
    list.append(item);
}


let button = document.getElementById('button');

button.addEventListener("click", getValue);
