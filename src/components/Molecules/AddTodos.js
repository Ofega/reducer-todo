import React, { useState, useContext } from "react";
import styled from 'styled-components';
import DashboardContext from "../../store/contexts/DashboardContext";



const AddTodosModal = () => {

    const { modalToggled, toggleModal, addTodo} = useContext(DashboardContext);

    const initialTodo = {
        name: '', 
        tags: '' 
    }

    const [ newTodo, setNewTodo] = useState(initialTodo);
    const { name, tags } = newTodo;


    // Handler Functions
    const handleInputChange = (e) => {
        setNewTodo({
            ...newTodo,
            [e.target.id]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        if(name) {
            e.preventDefault();
            addTodo(newTodo)
            setNewTodo(initialTodo);
            toggleModal();
        }
    }


    return (
        modalToggled ? (
            <Modal>
                <form autoComplete="off">
                    <button type="button" onClick={toggleModal} className="close-btn">x</button>

                    <div className="form-header">
                        <h1>Add New Todo</h1>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="plantname">Name</label>
                        <input type='text' id="name" name='name' onChange={handleInputChange} value={name} placeholder='Todo Name' required/>
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="tags">Tags</label>
                        <input type='text' id="tags" name='tags' onChange={handleInputChange} value={tags} placeholder='Add as many tags as you want with a comma separator'/>
                    </div>

                    <button type='submit' onClick={handleFormSubmit}>
                        Add Todo
                    </button>
                </form>
            </Modal>
        ) : null
    )
}

export default AddTodosModal;


export const Modal = styled.div`

    position: fixed;
    top: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    display: flex;

    form {
        padding: 4rem 2rem;
        min-height: 350px;
        max-width: 500px;
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        z-index: 5;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        @media (min-width : 768px) {
            padding: 4rem 3rem;
        }

        .close-btn {
            border: 2px solid red;
        }

        .form-header {
            text-align: center;
            margin-bottom: 4rem;

            h1 {
                font-size: 1.25rem;
                text-transform: uppercase;
                letter-spacing: 1.2px;
                color: rgba(0,0,0,.4);
            }

            p {
                margin-top: .5rem;
                font-size: 3rem;
                font-weight: 600;
            }
        }

        .form-inputs {
            display: flex;
            flex-direction: column;
            margin-bottom: 2.5rem;
            width: 100%;

            &:last-of-type {
                margin-bottom: 3rem;
            }

            label {
                font-size: 1.3rem;
                margin-bottom: .5rem;
                font-weight: 600;
                color: rgba(0,0,0,.4);
            }

            input {
                outline: none;
                border: 1px solid #ddd;
                padding: 0 1rem;
                min-height: 40px;
                border-radius: 5px;
                font-size: 1.4rem;
                background: transparent;

                &:-webkit-autofill { 
                    -webkit-box-shadow:200px 200px 100px white inset; 
                    box-shadow:200px 200px 100px white inset; 
                }

                &:focus {
                    border: 1px solid #419BA0;
                }
            }

            .error-msg {
                margin-top: .5rem;
                color: red;
            }
        }

        button {
            outline: 0;
            border: none;
            background: #419BA0 none;
            color: #fff;
            font-weight: 700;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            user-select: none;
            transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
            -webkit-tap-highlight-color: transparent;
            padding: .5rem 2rem;
            min-height: 40px;
            min-width: 200px;
            font-size: 1.5rem; 
            margin-top: 2rem;

            &:hover {
                background-color: #63ADB1;
                background-image: none;
                -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                color: rgba(255, 255, 255, .8);
            }

            &.close-btn {
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 25px;
                height: 25px;
                min-width: auto;
                margin: 0;
                border-radius: 100%;
                padding: 0;
                min-height: auto;
                background: transparent;
                color: red

                &:hover {
                    background: red;
                    color: #fff
                }
            }
        }

        .text-link {
            margin-top: 3rem;
            font-size: 1.2rem;
            text-align: center;
            color: rgba(0,0,0,.4);  

            a {
                text-decoration: none;
                color: #419BA0;
                font-weight: 600;
            }
        }
    }
`