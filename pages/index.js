import { useState } from 'react';
import Head from 'next/head';
import Loader from '../components/Loader';
import Header from '../components/Header';
import TodoListForm from '../components/TodoListForm';
import fakeTodos from '../services/fakeTodosService';
import TodosTable from '../components/TodosTable';

export default function Home() {
  const [todos, setTodos] = useState(fakeTodos);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const handleAddTodo = (todo) => {
    const todosCopy = [...todos];
    setTodos([...todosCopy, todo]);
  };

  const handleTodoDelete = (id) => {
    const filteredTodos = todos.filter((t) => t._id !== id);
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
      return !todo.isComplete && todo.dueDate < new Date().toISOString();
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
      <TodoListForm onAddTask={handleAddTodo} />
      <TodosTable
        todos={filteredTodos}
        onTodoDelete={handleTodoDelete}
        onTodoCompleteToggle={handleTodoCompleteToggle}
        onChangeFilterType={handleChangeFilterType}
        onCompletedTodosDelete={handleCompletedTodosDelete}
      />
    </div>
  );
}
