// Tia Truong
// Mock Take Home Interview

const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

function addTodo(newTitle, newDescription, newComplete){
  let task = { 
    title: newTitle,
    description: newDescription,
    complete: newComplete
  };
  todos.push(task);
}

function removeTodo(remTitle){
  const index = todos.findIndex(item => item.title === remTitle);
  if(index != -1) {
    todos.splice(index, 1);
    console.log(remTitle, "task was successfully removed.");
  } else {
    console.log(remTitle, "task requested to be removed does not exist.")
  }
}

function editTodo(editTitle, newTitle, newDescription){
  const index = todos.findIndex(item => item.title === editTitle);
  if(index != -1) {
    todos[index].title = newTitle;
    todos[index].description = newDescription;
  } else {
    console.log(editTitle, "task requested to be edited does not exist.")
  }
}

function markTodoComplete(markTitle){
  const index = todos.findIndex(item => item.title === markTitle);
  if(index != -1) {
    todos[index].complete = true;
  } else {
    console.log(markTitle, "task requested to be marked complete does not exist.")
  }
}

function displayTodoLength(){
  return todos.length;
}

function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array
  addTodo("Second Todo", "This is the second todo", true);
  addTodo("Third Todo", "This is the third todo", false);
  addTodo("Fourth Todo", "This is the fourth todo", true);
  addTodo("5th Todo", "This is the 5th todo", false);
  removeTodo("Fourth Todo");

  editTodo("5th Todo", "Fifth Todo", "This is the fifth todo");
  markTodoComplete("Fifth Todo");

  // You will need to call your methods above this comment to edit the todos array
  console.log('Here is a list of your todos:');
  // Print the length of the todos array below this comment
  console.log("You have", displayTodoLength(), "todos.");
  // Print the length of the todos array above this comment
  // Iterate over the todos array and console.log each todo below this comment
  // console.log(todos);
  const count = 1;
  for(let i = 0; i < todos.length; i++) {
    console.log("Todo", i+1);
    console.log("The title of the todo:", todos[i].title);
    console.log("The description of the todo:", todos[i].description);
    if(todos[i].complete) {
      console.log("This todo is complete");
    } else {
      console.log("This todo is not complete");
    }
  }
}

app();