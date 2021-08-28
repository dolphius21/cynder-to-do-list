const tasks = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    title: 'Learn react',
    description: 'a react component exercise',
    dueDate: '2021-09-03T12:28:30.881Z',
    completedDate: '2021-09-03T14:28:30.881Z'
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    title: 'Push workout',
    description: 'Chest, shoulders and tricep workout',
    dueDate: '2021-08-29T00:28:30.881Z',
    completedDate: '2021-09-06T12:28:30.881Z'
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    title: 'Meal prep',
    description: 'Prep your meal for a week',
    dueDate: '2021-08-30T00:28:30.881Z',
    completedDate: '2021-09-04T12:28:30.881Z'
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    title: 'Finish todo list project',
    description: 'A todolist project exercise for Cynder.',
    dueDate: '2021-08-31T00:28:30.881Z',
    completedDate: '2021-09-04T12:28:30.881Z'
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181a',
    title: 'How to improve your eCommerce MMS marketing',
    description: 'Update the blog graphic of the said article.',
    dueDate: '2021-09-01T00:28:30.881Z',
    completedDate: '2021-09-04T12:28:30.881Z'
  }
];

export default tasks;

export function getTasks() {
  return tasks;
}

export function getTask(id) {
  return tasks.find((t) => t._id === id);
}

export function saveTask(movie) {
  let taskInDb = tasks.find((m) => m._id === movie._id) || {};
  taskInDb.title = task.title;
  taskInDb.description = task.description;
  taskInDb.dueDate = task.dueDate;

  if (!taskInDb._id) {
    TaskInDb._id = Date.now();
    tasks.push(taskInDb);
  }

  return taskInDb;
}

export function deleteTask(id) {
  let taskInDb = tasks.find((t) => t._id === id);
  tasks.splice(tasks.indexOf(taskInDb), 1);
  return taskInDb;
}