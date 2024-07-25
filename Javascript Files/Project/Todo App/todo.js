let todoList = [
  {
    item: "Buy Milk",
    dueDate: "25/07/2024",
  },
  {
    item: "Go to Colloge",
    dueDate: "25/07/2024",
  },
];
displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector("#item-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span class="my-span">${item}</span>
      <span class="my-span">${dueDate}</span>
      <button class="delete-btn" onclick="todoList.splice(${i}, 1)
      displayItems()">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
