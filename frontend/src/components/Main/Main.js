import './Main.css'
import calenderLogo from './../../assets/svg/calender_icon.svg'
import timeLogo from './../../assets/svg/time_icon.svg';
import React from 'react';
import moment from 'moment'
import Moment from 'react-moment';

const Main = (props) => {
    const { tasks} = props
    return (
        <main className="container my-4">
            <h1 className='main-container--title text-uppercase'>Task</h1>
            <section className="main-grid--cards p-2">
                {tasks.map((task, id) => (
                    <article className='card' style={{width: 18 + 'rem', minHeight: 175 + 'px'}} key={id}>
                        <div className='card-body'>
                            <h3 className='main-card--title text-black'>
                                {task.name}
                            </h3>
                            <p className='main-card--task text-black'>
                                {task.task}
                            </p>
                            <section className='main-card--date text-black d-flex justify-content-center flex-row'>
                                <article className='mx-2 '>
                                    <img src={calenderLogo} />
                                    <small>
                                        Dia: <Moment format="DD MMM YY">{moment(task.date)}</Moment>
                                    </small>
                                </article>
                                <article className='mx-2'>
                                    <img src={timeLogo} /> 
                                    <small>
                                        Hora: {task.hours}
                                    </small>
                                </article>
                            </section>
                        </div>
                    </article>
                ))}
            </section>
        </main>    
    );
}
 
export default Main;