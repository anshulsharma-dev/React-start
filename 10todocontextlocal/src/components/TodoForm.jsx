import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

export default function TodoForm() {
    const [todo , setTodo] = useState("")

    const {addTodo} = useTodo();  
        //In this way we are extracting whatever functionality we need from "useTodo" as it is a function which has returned 'useContext(TodoContext)' , so wherever we want to use all the values of the context just call useTodo and extract that exact item in this way const {} = useTodo .  
    console.log(addTodo)
    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        // addTodo({id:Date.now(), todo: "todo", completed:false})  
        // As the id is already declared inside addTodo function in the App.jsx  and also in the new ES6  if the value of key:value is same , we can write it as on 'todo

        addTodo({ todo, completed: false})    
        // addTodo({id: Date.now(), todo:todo , completed: false})
        setTodo("")
    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button> 
        </form>
    );
}




