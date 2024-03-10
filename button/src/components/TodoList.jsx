


import React, { useState } from 'react';

const TodoList = () => {
    function generateUniqueId() {
        const timestamp = new Date().getTime().toString(36);
        const randomStr = Math.random().toString(36).substr(2, 5);
        return timestamp + randomStr;
    }

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([{
        id: generateUniqueId(),
        text: 'Hello world',
        completed: false
    }]);
    const [editingTodo, setEditingTodo] = useState(null);
    const [editText, setEditText] = useState("");

    function addTodo() {
        if (input.length === 0) {
            alert("type something");
            return;
        }
        setTodos([...todos, {
            id: generateUniqueId(),
            text: input,
            completed: false
        }]);
        setInput("");
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function handleComplete(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    }

    function startEdit(todo) {
        setEditingTodo(todo.id);
        setEditText(todo.text);
    }

    function cancelEdit() {
        setEditingTodo(null);
        setEditText("");
    }

    function saveEdit(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: editText };
            }
            return todo;
        }));
        setEditingTodo(null);
        setEditText("");
    }

    return (
        <div className='flex flex-col justify-center items-center p-20'>
            <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                className='border-2 px-5 w-[50% py-2 rounded-lg'
            />
            <button onClick={addTodo} className='bg-green-400 mt-3 px-6 py-2 rounded-lg'>Add</button>
            {todos.map((todo) => (
                <div key={todo.id} className='flex justify-around items-center border-2 w-[60%] h-[50px] mt-3'>
                    {editingTodo === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="border-2 px-5 w-[50% py-2 rounded-lg"
                            />
                            <button onClick={() => saveEdit(todo.id)}>Save</button>
                            <button onClick={cancelEdit}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <div className={todo.completed ? 'line-through' : ''}>{todo.text}</div>
                            <div className='flex gap-3'>
                                <button onClick={() => handleComplete(todo.id)} className='p-2 rounded-lg'>
                                    {todo.completed ? 'Undo' : 'Done'}
                                </button>
                                <button onClick={() => startEdit(todo)}>Edit</button>
                                <button onClick={() => deleteTodo(todo.id)}>X</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TodoList;
