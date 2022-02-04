const mainForm = document.querySelector("#mainForm")! as HTMLFormElement;
const todoInput = document.querySelector("#todoInput")! as HTMLInputElement;
const todoList = document.querySelector("#todoList")! as HTMLElement;
let todos: string[] = [];
mainForm.addEventListener("submit", e =>
  addToList(e as Event, todoInput.value as string)
);

interface AddToList {
  (e: Event, input: string): void;
}

const addToList: AddToList = (e: Event, input: string): void => {
  e.preventDefault();

  todos.push(input);
  todoList.innerHTML = todos.map(todo => `<li>${todo}</li>`).join("\n");
  todoInput.value = "";
};
