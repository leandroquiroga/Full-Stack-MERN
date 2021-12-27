import './Main.css'
import React from 'react';
import calenderLogo from './../../assets/svg/calender_icon.svg'
import timeLogo from './../../assets/svg/time_icon.svg';
import moment from 'moment'
import Moment from 'react-moment';
import clientAxios from '../../config/axios';
import TaskComplete from './components/TaskComplete';
import PendingTask from './components/TaskPending';

const Main = (props) => {
    const { tasks, setCompleteTask, completeTask, changeStateRefresh } = props;

    // Set the value of state setToggle
    const hadleCompleteTask = (id) => {
        setCompleteTask(!completeTask);
        clientAxios.put(`/task/${id}`, {complete: !completeTask})
            .then(response => {
                (response.data.complete) ? setCompleteTask(true) : setCompleteTask(false);
            })
            .catch(error => console.log(error))

    }
    return (
        <main className="container my-4">
            <h1 className='main-container--title text-uppercase'>Task</h1>
            <section className="main-grid--cards p-2">
                {tasks.map((task) => (
                    <article className='main-container--card rounded py-3' style={{width: 18 + 'rem', minHeight: 175 + 'px'}} key={task._id}>
                        <div className='d-flex justify-content-between px-4'>
                            <h3 className='main-card--title text-white'>
                                {task.name}
                            </h3>
                            <div className="form-check form-switch" >
                                <input
                                    key={task._id}
                                    className="form-check-input"
                                    onChange={() => {
                                        hadleCompleteTask(task._id)
                                    }}
                                    type="checkbox"
                                    id="flexSwitchCheckDefault"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexSwitchCheckDefault"
                                >
                                </label>
                            </div>
                        </div>
                        <p className='main-card--task text-white'>
                            {task.task}
                        </p>
                        <section className='main-card--date text-black d-flex justify-content-center flex-row text-white'>
                            <article className='mx-2 '>
                                <img src={calenderLogo} />
                                <small>
                                    Dia: <Moment
                                            format="DD MMM YY"
                                        >
                                        {moment(task.date)}
                                        </Moment>
                                </small>
                            </article>
                            <article className='mx-2'>
                                <img src={timeLogo} /> 
                                <small>
                                    Hora: {task.hours}
                                </small>
                            </article>
                        </section>
                        <section key={task._id}>
                            {
                                (completeTask) ? <TaskComplete id={task._id} changeStateRefresh={changeStateRefresh} /> : <PendingTask />
                            }
                        </section>
                    </article>
                ))}
            </section>
        </main>    
    );
}
 
export default Main;