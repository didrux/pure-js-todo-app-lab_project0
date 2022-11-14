const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const todoInput = document.getElementById("todo-name");
let amountOfItems = 0;
let amountOfUncheckedItems = 0;


/**
 * Executing logic for append new To-Do item
 */
function newTodo() {
  console.log(todoInput.value.length);
  if (todoInput.value.length == 0) {
    alert("Enter some text as a name, please");
    return;
  }
  amountOfItems += 1;
  amountOfUncheckedItems += 1;
  itemCountSpan.innerHTML = amountOfItems;
  uncheckedCountSpan.innerHTML = amountOfUncheckedItems;
  list.insertAdjacentHTML(
    "beforeend",
    `
    <li class="todo-item">
      <div class="todo-container">
        <span>${amountOfItems}. ${todoInput.value} <input type="checkbox" class="todo-checkbox" onchange="checkboxChange(this)"></span>
        <button onClick="deleteTodo(this)">DELETE</button>
      </div>
    </li>
  `
  );
  todoInput.value = "";
}

/**
 * Executing logic for deleting existing To-Do item
 * @param {HTMLElement} elem
 */
function deleteTodo(elem) {
  let listItem = elem.parentElement.parentElement;
  let status = listItem.querySelector(".todo-checkbox").checked;
  amountOfItems -= 1;
  itemCountSpan.innerHTML = amountOfItems;
  if (status == false) {
    amountOfUncheckedItems -= 1;
    uncheckedCountSpan.innerHTML = amountOfUncheckedItems;
  }
  listItem.remove();
}

/**
 * Executing logic for manipulation with checkbox
 * @param elem
 */
function checkboxChange(elem) {
  if (elem.checked) {
    amountOfUncheckedItems -= 1;
  } else {
    amountOfUncheckedItems += 1;
  }
  uncheckedCountSpan.innerHTML = amountOfUncheckedItems;
}
