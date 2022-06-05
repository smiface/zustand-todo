import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import './styles.scss'
import axios from 'axios'
import { TodoList } from './components/TodoList'
import { Modal } from './components/Modal'
import { useStore } from './store'

function App() {
  const store = useStore()
  const [pending, setPending] = useState(true)

  useEffect(() => {
    axios.get('/todo.json').then((res) => {
      store.setTodos(res.data.todos)
      setPending(false)
    })
  }, [])

  useEffect(() => {
    const uniqueUsers = [...new Set(store.todos.map((el) => el.userId))]
    const newTodoLists = uniqueUsers.map((userId) => store.todos.filter((el) => el.userId === userId))
    store.setTodoLists(newTodoLists)
  }, [store.todos])

  return (
    <main>
      {store.newTodoUserId ? <Modal /> : false}
      {pending ? 'loading' : store.todoLists?.length ? <TodoList /> : 'no todo'}
    </main>
  )
}

render(<App />, document.getElementById('root'))
