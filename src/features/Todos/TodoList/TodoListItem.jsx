import { useRef, useState } from 'react';
import TextInputWithLabel from '../../../shared/TextInputWithLabel.jsx';
import {
    isValidTodoTitle,
    MAX_TODO_TITLE_LENGTH,
} from '../../../utils/todoValidation.js';

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [workingTitle, setWorkingTitle] = useState(todo.title);
    const inputRef = useRef();

    const handleCancel = () => {
        setWorkingTitle(todo.title);
        setIsEditing(false);
    };

    const handleEdit = (event) => {
        setWorkingTitle(event.target.value);
    };

    const handleUpdate = (event) => {
        if (!isEditing) {
            return;
        }

        event.preventDefault();

        const todoTitle = workingTitle.trim();

        if (!isValidTodoTitle(todoTitle)) {
            return;
        }

        onUpdateTodo({
            ...todo,
            title: todoTitle,
        });

        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <form onSubmit={handleUpdate}>
                    <TextInputWithLabel
                        ref={inputRef}
                        value={workingTitle}
                        onChange={handleEdit}
                        elementId={`todoTitle-${todo.id}`}
                        labelText="Todo"
                        maxLength={MAX_TODO_TITLE_LENGTH}
                    />

                    <button
                        type="button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        disabled={!isValidTodoTitle(workingTitle)}
                    >
                        Update
                    </button>
                </form>
            ) : (
                <form>
                    <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => onCompleteTodo(todo.id)}
                    />

                    <span onClick={() => setIsEditing(true)}>
                        {todo.title}
                    </span>
                </form>
            )}
        </li>
    );
}

export default TodoListItem;