import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'rcarranza',
        email: 'correo@email.com'
    })

    const {username, email} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    }


    useEffect( () => {
        // console.info('UseEffect called...')
    }, []);

    useEffect( () => {
        // console.info('formstate change...')
    }, [ formState ]);

    useEffect( () => {
        // console.info('Email change...')
    }, [ email ]);


        


  return (
    <>
        <h1>Formulario Simple</h1>

        <hr />

        <input
            type='text'
            className='form-control'
            placeholder='Usuario'
            name='username'
            value={ username }
            onChange={ onInputChange }
        />

        <input
            type='text'
            className='form-control mt-4'
            placeholder='example@email.com'
            name='email'
            value={ email }
            onChange={ onInputChange }
        />

        <hr />

        {username === 'rcarranza2' && 
            <Message />
        }
    </>
  )
}
