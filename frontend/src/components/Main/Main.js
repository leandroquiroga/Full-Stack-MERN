import './Main.css'

const Main = ({ tasks }) => {

    return (
        <article className="container my-4">
            <h1>Task</h1>
            <div className="main-grid--cards p-2">
                {tasks.map((task, id) => (
                    <div className='card' style={{width: 18 + 'rem'}} key={id}>
                        <div className='card-body'>
                            <h3 className='main-card--title text-black'>
                                {task.name}
                            </h3>
                            <p className='main-card--task text-black'>
                                {task.task}
                            </p>
                            <p className='main-card--date'>
                                <small className='text-black mx-2'>Dia: {task.date}</small>
                                <small className='text-black mx-2'>Hora: {task.hours}</small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </article>    
    );
}
 
export default Main;