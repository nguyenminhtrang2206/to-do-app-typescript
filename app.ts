const mainForm = document.querySelector("#mainForm")! as HTMLFormElement;
const todoInput = document.querySelector("#todoInput")! as HTMLInputElement;
const todoList = document.querySelector("#todoList")! as HTMLElement;

mainForm.addEventListener("submit", e => {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.classList.add("new-div");
  todoList.appendChild(newDiv);
  const li = document.createElement("li");
  li.classList.add("new-li");
  li.textContent = todoInput.value;
  newDiv.appendChild(li);
  todoInput.value = "";

  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  newDiv.appendChild(trashButton);

  trashButton.addEventListener("click", event => {
    event.preventDefault();
    todoList.removeChild(newDiv);
  });
});

// const mainForm = document.querySelector("#mainForm")! as HTMLFormElement;
// const todoInput = document.querySelector("#todoInput")! as HTMLInputElement;
// const todoList = document.querySelector("#todoList")! as HTMLElement;

// let todos: string[] = [];
// mainForm.addEventListener("submit", e =>
//   addToList(e as Event, todoInput.value as string)
// );

// interface AddToList {
//   (e: Event, input: string): void;
// }

// const addToList: AddToList = (e: Event, input: string): void => {
//   e.preventDefault();

//   todos.push(input);
//   todoList.innerHTML = todos
//     .map(
//       todo =>
//         `<div id="newDiv">${todo}<i  id="trashButton" class="fas fa-trash"></i></div>`
//     )
//     .join("\n");
//   todoInput.value = "";
// };
