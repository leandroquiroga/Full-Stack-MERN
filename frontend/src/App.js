import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import clientAxios from './config/axios';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
/* import Footer from './components/Footer/Footer'; */


function App() {

  const [list_Task, saveList_Task] = useState([]);

  useEffect(() => {
    const api = () => {
      (clientAxios.get('/task'))
      .then(response => saveList_Task(response.data))
      .catch(error => console.log(error))
    }
    api()
  }, [])
  return (
    <section className="App text-white">
      <Header 
        title='Todo List'
      /> 
      <Main
        tasks={list_Task} 
          
      />
      {/* <Footer />  */}
    </section>
  );
}

export default App;
