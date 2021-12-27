import React, { useState } from 'react';
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import clientAxios from './../../config/axios';
import ValidateForm from './components/Validate';

const Header = (props) => {
    const { title, nameInput, taksInput, dateInput, hoursInput, btnText, changeStateRefresh } = props;
    const [validate, setValidate] = useState(false);
    const [clickButton, setClickButton] = useState(false)
    
    const [task, saveTask] = useState({
        name: '',
        task: '', 
        complete: false,
        date: '',
        hours: ''
    })

    //Create a copy of the state and assign values
    const updateState = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const sendTaskDB = e => {
        const form = document.getElementById('form');
        e.preventDefault();
        form.reset();

        // Set the boolean function to true
        setClickButton(true);

        if (task.name === '' || task.task === '' || task.hours === '' || task.date === '') {
            setValidate(false);
            setTimeout(() => {
                setClickButton(false);
            }, 2500);
            return
        }
        // Send data the API of clientAxios
        clientAxios.post('/task', task)
            .then(() => {
                // Chage stateRefresh
                changeStateRefresh(true);
                setValidate(true);
                setTimeout(() => {
                    setClickButton(false);
                }, 2500);
            })
            .catch(error => console.log(error))
        
    }



    return (
        <header className="header">
            <div className="container p-2 d-flex flex-column">
                <h1 className="header-container--title text-uppercase">{title}</h1>
                <form onSubmit={sendTaskDB} id="form" className="header-container--form col-md-8 col-11 mx-auto my-5">
                    <div className="row header-container--contentForm rounded shadow-md w-100 justify-content-center align-items-center d-flex p-2">
                        <label htmlFor="name" 
                            className="header-container--form-label"
                        >
                            {nameInput}
                        </label>
                        <input 
                            type="text" 
                            name='name' 
                            onChange={updateState} 
                            autoFocus 
                            id="name" 
                            className="header-container--form-inputs p-2" 
                        />
                        <label 
                            htmlFor="task" 
                            className="header-container--form-label"
                        >
                            {taksInput}
                        </label>
                        <input 
                            type="text" 
                            name='task' 
                            onChange={updateState} 
                            id="task" 
                            className="header-container--form-inputs p-2"   
                        />
                        <label 
                            htmlFor="date" 
                            className="header-container--form-label"
                        >
                            {dateInput}
                        </label>
                        <input 
                            type="date" 
                            name='date' 
                            onChange={updateState} 
                            id="date" 
                            className="header-container--form-inputs p-2" 
                        />
                        <label 
                            htmlFor="time" 
                            className="header-container--form-label"
                        >
                            {hoursInput}
                        </label>
                        <input 
                            type="time" 
                            name='hours' 
                            onChange={updateState} 
                            id="time" 
                            className="header-container--form-inputs p-2" 
                            
                        />
                        <input 
                            type="submit" 
                            className="btn header--container--form--btn mb-4" 
                            value={btnText}
                        />
                        {(clickButton) ? <ValidateForm validate={validate}></ValidateForm> : null }
                    </div>
                </form>
            </div>
        </header>    
    );
}
 
export default Header;