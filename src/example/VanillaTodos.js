/*
Given an API returning a list of todos, we want to display the list in a performant way.

Here are the functional requirements:
- Initially, display the first 20 todos.
- On the top of the page, display the total number of loaded todos.
- Display a "Load More" button, and every time the user clicks on it, fetch and display 20 more todos.
- When the total number of loaded todos reaches 100, the "Load More" button should be hidden.

Use this endpoint URL to get the todos:
https://dummyjson.com/todos?limit=20&skip=0.

You may change the skip and limit query params to load new todos. The endpoint will return the following structure with a total of 20 todos:
{
  "todos": [
    {
      "id": 1,
      "todo": "Do something nice for someone I care about",
      "completed": true,
      "userId": 26
    },
  ],
}
*/

const fetchTodos = async (todoIndex) => {
  const responseJson = await fetch(`https://dummyjson.com/todos?limit=20&skip=${todoIndex}`);
  const response = await responseJson.json();

  return response.todos;
};

const displayCount = (count) => {
  const countElement = document.getElementById('count');

  countElement.innerHTML += `${count}`;
};

const displayTodos = async () => {
  const todoIndex = 0;
  const todos = await fetchTodos(todoIndex);
  const count = todos.length;
  const listElement = document.getElementById('list');

  todos.map(({ todo }) => {
    listElement.innerHTML += `<li>${todo}</li>`;
  });

  displayCount(count);
};

const loadTodos = () => {
  let count = 0;

  const loadMoreButton = document.getElementById('loadMore');

  loadMoreButton.addEventListener('click', () => displayTodos(count));
};

displayTodos();
loadTodos();
