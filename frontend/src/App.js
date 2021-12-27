import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import clientAxios from './config/axios';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
/* import Footer from './components/Footer/Footer'; */


function App() {

  const [list_Task, saveList_Task] = useState([]);
  const [stateRefresh, changeStateRefresh] = useState(true);
  const [completeTask, setCompleteTask] = useState(false);

  useEffect(() => {
    if (stateRefresh) { 
      const api = () => {
        clientAxios.get('/task')
        .then(response => {
          saveList_Task(response.data);
            // disabled stateRefresh
          changeStateRefresh(false);
          // (response.data.complete) ? setCompleteTask(true) : setCompleteTask(false);
        }) 
        .catch(error => console.log(error))
      }
      api()
    }
  }, [stateRefresh])
  return (
    <section className="App text-white">
      <Header 
        title='Todo List'
        nameInput='Ingrese su nombre'
        taksInput='Ingrese su tarea'
        dateInput='Ingrese dia de finalizacion'
        hoursInput='Ingrese hora de entrega' 
        btnText='Crear nueva tarea'
        changeStateRefresh={changeStateRefresh}
      /> 
      <Main
        tasks={list_Task}
        setCompleteTask={setCompleteTask}
        completeTask={completeTask}
        changeStateRefresh={changeStateRefresh}
      />
      {/* <Footer />  */}
    </section>
  );
}

export default App;
