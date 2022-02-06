import React, { useContext, useState, useRef, useEffect} from 'react';
import { DataContext } from './DataProvider';

export default function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos,{name: todoName,complete: false}]);
        setTodoName('');
        todoInput.current.focus();
    }

    useEffect(() => {
    todoInput.current.focus();
    },[])

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input
                required
                ref={todoInput}
                id="todos"
                type="text"
                name="todos"
                placeholder="What needs to be done ?"
                value={todoName}
                onChange={e => setTodoName(e.target.value.toLowerCase())}
            />
            <button type="submit">Create</button>
        </form>
    )
}