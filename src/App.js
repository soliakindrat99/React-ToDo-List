import React, {useState} from 'react';
import TaskForm from './components/TaskForm';
import ToDo from './components/ToDo';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    {id: 1, title: "Task 1", description: "t1"},
    {id: 2, title: "Task 2", description: "t2"}
  ]);

  // Temp State
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
  const addTask = () => {
    if(newTitle && newDescription) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTitle, description: newDescription }
      setToDo([...toDo, newEntry])
      setNewTitle('');
      setNewDescription('');
    }
  }

  // Delete task 
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Delete task 
  const cancelUpdate = () => {
    setUpdateData('');
  }

  //Change title for update
  const changeTitle = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      description: updateData.description
    }
    setUpdateData(newEntry);
  }
  //Change description for update
  const changeDescription = (e) => {
    let newEntry = {
      id: updateData.id,
      title: updateData.title,
      description: e.target.value
    }
    setUpdateData(newEntry);
  }

  //Update task
  const updateTask = (e) => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <br></br>
      <h2>To Do List App</h2>
      <br></br>

        {updateData ? (
        <TaskForm 
          isEdit={true}
          updateData={updateData}
          newTitle={newTitle}
          changeTitle={changeTitle}
          setNewTitle = {setNewTitle}
          newDescription = {newDescription}
          changeDescription={changeDescription}
          setNewDescription={setNewDescription}
          addTask={addTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />) :(
          <TaskForm 
          isEdit={false}
          updateData={updateData}
          newTitle={newTitle}
          changeTitle={changeTitle}
          setNewTitle = {setNewTitle}
          newDescription = {newDescription}
          changeDescription={changeDescription}
          setNewDescription={setNewDescription}
          addTask={addTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
        )}

      {toDo && toDo.length ? '' : 'No tasks...'}
      <ToDo 
        toDo={toDo}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
      
    </div>
  );
}

export default App;
