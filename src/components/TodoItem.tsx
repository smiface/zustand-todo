import { TTodoItem } from '../types'
import React from 'react'
import { useStore } from '../store'

export const TodoItem = ({ item }: { item: TTodoItem }) => {
  const store = useStore()

  const handleClick = () => {
    store.toggleTodo(item.id)
  }

  return (
    <div className="todo_item">
      {item.completed ? (
        <button onClick={handleClick}>
          ☑ <s>{item.todo.slice(0, 35)}</s>
        </button>
      ) : (
        <button onClick={handleClick}>
          ☒ <p>{item.todo.slice(0, 35)}</p>
        </button>
      )}
    </div>
  )
}
