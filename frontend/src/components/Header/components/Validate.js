import './../Header.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ValidateForm = ({ validate }) => {
    let message;

    if (validate) {
        message = <small className='header-container--message bg-success text-white p-2 rounded'> Se ha añadido una nueva tarea </small>
    } else {
        message = <small className='header-container--form-invalid bg-danger text-white p-2 rounded'> Todos los campos son obligarios </small>
    }
    return ( 
        <p className='d-flex justify-content-center align-items-center row w-100'> { message } </p>
     );
}
 
export default ValidateForm;