import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id : 1,
            todo : "Todo inputs",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    checkedTodo : (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext)
}