import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const {formState, description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo( newTodo );
        onResetForm();
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form action="" onSubmit={ onFormSubmit }>
                <input 
                    type="text"
                    name="description"
                    onChange={ onInputChange }
                    value={ description }
                    placeholder="Que hay que hacer?"
                    className="form-control"
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                Agregar
                </button>
            </form>
        </>
    )
}
