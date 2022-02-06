import React, { useContext, useState } from 'react';
import { DataContext } from '../components/DataProvider';

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.complete = !checkAll
        })
        setTodos(newTodos);
        setCheckAll(!checkAll)
    }

    const handleDeleteToDo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos);
    }

    return (
        <>
            {
                todos.length === 0 ? <h3>Congratulations ! Nothings To Do </h3> :
                    <div className="row">
                        <label htmlFor="all">
                            <input
                                type="checkbox"
                                name="all"
                                id="all"
                                onChange={handleCheckAll}
                                checked={checkAll}
                            />
                            ALL
                        </label>
                        <p>You have {todos.length} to do</p>
                        <button id="delete" onClick={handleDeleteToDo}>Delete</button>
                    </div>
            }
        </>
    )
}