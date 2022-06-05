import create from 'zustand'

const toggled = (el) => {
  return { ...el, completed: !el.completed }
}

export const [useStore] = create((set) => ({
  count: 1,
  todos: [],
  todoLists: [],
  newTodoUserId: null,

  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),

  setTodoLists: (arr) => set((state) => ({ todoLists: arr })),
  setTodos: (value) => set((state) => ({ todos: value })),
  setNewTodoUserId: (value) => set((state) => ({ newTodoUserId: value })),
  setTodoList: (value) => set((state) => ({ todoLists: value })),
  toggleTodo: (id) => set((state) => ({ todos: state.todos.map((el) => (el.id == id ? toggled(el) : el)) }))
}))
