import TextInputWithLabel from '../../shared/TextInputWithLabel.jsx';
import { useRef, useState } from 'react';
import { isValidTodoTitle } from '../../utils/todoValidation.js';
import styles from './TodoForm.module.css';

function TodoForm({ onAddTodo }) {
    const inputRef = useRef();
    const [workingTodoTitle, setWorkingTodoTitle] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();

        const todoTitle = workingTodoTitle.trim();

        if (todoTitle && todoTitle !== '') {
            onAddTodo(todoTitle);
            setWorkingTodoTitle('');
            inputRef.current.focus();
        }
    };

    return (
        <form className={styles.form} onSubmit={handleAddTodo}>
            <TextInputWithLabel
                ref={inputRef}
                value={workingTodoTitle}
                onChange={(event) => setWorkingTodoTitle(event.target.value)}
                elementId="todoTitle"
                labelText="Todo"
            />

            <button
                className={styles.addButton}
                type="submit"
                disabled={!isValidTodoTitle(workingTodoTitle)}
            >
                Add Todo
            </button>
        </form>
    );
}

export default TodoForm;