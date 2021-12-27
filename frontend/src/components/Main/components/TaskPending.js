import taskPendient from './../../../assets/svg/pendient_task.svg';

const PendingTask = () => {
    return ( 
        <div className='d-flex justify-content-center p-2 align-items-center'>
            <img src={taskPendient} />
            <p className='main-card--task text-white mt-3 mx-1'>Tarea Incompleta</p>
        </div>
     );
}
 
export default PendingTask;