import { useEffect, useState } from 'react';

const transformResponse = ({ todos }) => {
  let todosArr = [];

  for (const { userId, todo } of todos) {
    const todoIndex = todosArr.findIndex((todo) => todo.userId === userId);

    todosArr[todoIndex]
      ? todosArr[todoIndex].tasks.push(todo)
      : todosArr.push({ userId, tasks: [todo] });
  };

  return todosArr;
};

const Todos = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const responseJson = await fetch('https://dummyjson.com/todos?limit=10&skip=80');
      const response = await responseJson.json();
      const transformedResponse = transformResponse(response);

      setTodos(transformedResponse);
    };

    if (!todos) fetchTodos();
  }, [todos]);

  return (
    <>
      <h1>todos</h1>
      {todos && todos.map(({ userId, tasks }) => (
        <div key={userId}>
          <p>User # {userId}</p>
          {tasks.map(task => <p key={task}>{task}</p>)}
        </div>
      ))
      }
    </>
  );
};

export default Todos;
