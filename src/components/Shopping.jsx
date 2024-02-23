import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit } from '@fortawesome/free-solid-svg-icons';

function Shopping({ todos, setTodos, setEditTodo }) {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (todo) => {
        setEditTodo(todo);
    };

    const handleUpdate = (id, newTitle) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, title: newTitle };
                }
                return todo;
            })
        );
        setEditTodo(null);
    };

    return (
        <>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => handleUpdate(todo.id, event.target.value)}
                    />
                    <div>

                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>

                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <FontAwesomeIcon icon={faDeleteLeft} />
                        </button>

                    </div>
                </li>
            ))}
        </>
    );
}

export default Shopping;
