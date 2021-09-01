import { useState, useEffect } from 'react';
import Head from 'next/head';
import Loader from '../components/Loader';
import Header from '../components/Header';
import TodoListForm from '../components/TodoListForm';
import TodosTable from '../components/TodosTable';
import { createTodo, getTodos } from './api/todos';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    setLoading(true);
    getTodos()
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddTodo = (newTodo) => {
    createTodo(newTodo).then((res) => setTodos([...todos, res.data]));
  };

  const handleTodoDelete = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const handleTodoCompleteToggle = (todo) => {
    const todosCopy = [...todos];
    const index = todosCopy.indexOf(todo);
    todosCopy[index] = { ...todo, isComplete: !todo.isComplete };
    setTodos(todosCopy);
  };

  const handleCompletedTodosDelete = () => {
    const filteredTodos = todos.filter((t) => t.isComplete === false);
    setTodos(filteredTodos);
  };

  const handleChangeFilterType = (filterType) => {
    setFilterType(filterType);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterType === 'all') {
      return todos;
    }
    if (filterType === 'complete') {
      return todo.isComplete === true;
    }
    if (filterType === 'overdue') {
      return !todo.isComplete && todo.due_date < new Date().toISOString();
    }
  });

  return (
    <div className="container">
      <Head>
        <title>Todo List App</title>
        <meta
          name="description"
          content="A Todo List App with CRUD operations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TodoListForm onAddTodo={handleAddTodo} />
      {loading ? (
        <div className="container">
          <Loader />
        </div>
      ) : (
        <TodosTable
          todos={filteredTodos}
          onTodoDelete={handleTodoDelete}
          onTodoCompleteToggle={handleTodoCompleteToggle}
          onChangeFilterType={handleChangeFilterType}
          onCompletedTodosDelete={handleCompletedTodosDelete}
        />
      )}
    </div>
  );
}
