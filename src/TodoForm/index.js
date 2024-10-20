import React  from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);
    
    /* Creacion de estado local para obtener el contenido o valor del textarea */
    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    return(
        <form 
        onSubmit={onSubmit}>
            <label>
                Escribe un nuevo Todo
            </label>

            <textarea
                placeholder=" Write..."
                value={newTodoValue}
                onChange={onChange}
                required
            />

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--close" 
                    onClick={onCancel}
                >Close</button >

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add" 
                >Add</button>
            </div>

        </form>
    );
}

export {TodoForm};
