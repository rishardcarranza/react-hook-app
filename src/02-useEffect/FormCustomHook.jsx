import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormCustomHook = () => {

    const { formState, username, email, password, onInputChange, onResetForm  } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con custom hook</h1>

            <hr />

            <input
                type='text'
                className='form-control'
                placeholder='Usuario'
                name='username'
                value={ username }
                onChange={ onInputChange }
                autoFocus={true}
            />

            <input
                type='text'
                className='form-control mt-2'
                placeholder='example@email.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />

            <input
                type='password'
                className='form-control mt-2'
                placeholder='Contraseña'
                name='password'
                value={ password }
                onChange={ onInputChange }
            />

            {/* <hr /> */}

            <button className='btn btn-primary mt-4' onClick={ onResetForm } >Limpiar</button>

        </>
    )
}
