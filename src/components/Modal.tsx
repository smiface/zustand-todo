import { useEffect, useState } from 'react'
import React from 'react'
import { useStore } from '../store'

export const Modal = () => {
  const store = useStore()
  const [str, setStr] = useState('')
  const [opacity, setOpacity] = useState(0)
  const [transition, setTransition] = useState('0')

  useEffect(() => {
    setOpacity(0)
    setTransition('0.3s')
    setOpacity(1)
  }, [store.newTodoUserId])

  const handleSave = () => {
    const newTodo = { id: Date.now(), completed: false, userId: store.newTodoUserId, todo: str }
    const newTodos = [...store.todos, newTodo]
    store.setTodos(newTodos)
    store.setNewTodoUserId(null)
  }

  const handleClose = () => {
    setOpacity(0)
    setTimeout(() => {
      store.setNewTodoUserId(null)
    }, 300)
  }

  return (
    <div className="modal_component" style={{ opacity: opacity, transition: transition, zIndex: 1 }}>
      <div className="modal_overlay"></div>
      <div className="modal">
        <input type="text" value={str} onChange={(e) => setStr(e.target.value)} />
        <div>
          <button onClick={handleSave}>save</button>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </div>
  )
}
