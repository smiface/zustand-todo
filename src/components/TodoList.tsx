import { TodoItem } from './TodoItem'
import React from 'react'
import { useStore } from '../store'

export const TodoList = () => {
  const store = useStore()

  const handleClick = (el) => {
    store.setNewTodoUserId(el[0].userId)
  }

  return (
    <div className="todoList_component">
      {store.todoLists.map((el) => (
        <div className="list">
          <div className="row">
            <h2>{el[0].userId}</h2>
            <button>...</button>
          </div>
          {el.map((i) => (
            <TodoItem item={i} />
          ))}
          <button className="addTodoBtn" onClick={() => handleClick(el)}>
            +
          </button>
        </div>
      ))}
    </div>
  )
}
