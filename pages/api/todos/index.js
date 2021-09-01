import axios from 'axios';

const APIBaseURL = 'http://localhost:8080';

export const getTodos = () => {
  return axios.get(`${APIBaseURL}/todos/`);
};

export const createTodo = (details) => {
  return axios.post(`${APIBaseURL}/todos/`, details);
};

export const getTodoById = (id) => {
  return axios.get(`${APIBaseURL}/todos/${id}`);
};

export const updateTodoById = (id, details) => {
  return axios.put(`${APIBaseURL}/todos/${id}`, details);
};

export const deleteTodo = (id) => {
  return axios.delete(`${APIBaseURL}/todos/${id}`);
};
