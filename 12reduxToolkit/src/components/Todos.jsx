import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim() === "") return;
    dispatch(editTodo({ id, newText: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div className="text-white text-xl mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* If edit mode is ON for this todo */}
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSave(todo.id)}
                className="text-white px-2 py-1 rounded w-full mr-4"
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}

            {/* Show Save button if editing */}
            {editId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="text-white bg-green-500 border-0 py-1 px-4 ml-2 hover:bg-green-600 rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(todo)}
                className="text-white bg-blue-500 border-0 py-1 px-4 ml-2 hover:bg-blue-600 rounded"
              >
                Edit
              </button>
            )}

            {/* Delete Button */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 ml-2 hover:bg-red-600 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
