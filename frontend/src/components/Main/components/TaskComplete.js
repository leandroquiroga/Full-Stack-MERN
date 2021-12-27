import clientAxios from '../../../config/axios';
import taskComplete from './../../../assets/svg/complete_task.svg';
import Swal from 'sweetalert2'

const TaskComplete = (props) => {
    const { id, changeStateRefresh } = props
    
    // Delete a task 
    const deleteTask = (id) => {
        Swal.fire({
            title: '¿Desea eliminar la tarea pendiente?',
            text: "Una vez eliminado no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Elimanar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                // Alerta de eliminado
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                // Elimina de la base de datos
                clientAxios.delete(`/task/${id}`)
                    .then(() => {
                        changeStateRefresh(true)
                    }).catch(err => console.log(err))
            }
          })
    }
    return ( 
        <div className='d-flex justify-content-center row p-2 align-items-center'>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={taskComplete} />
                <p className='main-card--task text-white mt-3 mx-1'>Tarea Completa</p>
            </div>
            <input 
                type="submit" 
                className="btn header--container--form--btn mb-4 w-50" 
                value="Eliminar"
                onClick={() => {
                    deleteTask(id)
                }}
            />
        </div> 
     );
}
 
export default TaskComplete;