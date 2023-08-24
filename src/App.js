import './App.css';
import ToDoHead from './components/ToDoHead';
import { useState } from 'react';
import ToDos from './components/ToDos';


function App() {
  const [toDoItem, setToDoItem] = useState('')
  const [toDos, setToDos] = useState([])


  const handleChange = (eve) => {
    setToDoItem(eve.target.value)
  }
  const handleClick = () => {
    let todo = {
      id: new Date().getTime(),
      text: toDoItem,
      isCompleted: false
    }
    setToDos([...toDos, todo])
  }
  const handleTick = (id) => {
    setToDos(toDos.map(el => {
      if (el.id === id) {
        return ({
          ...el,
          isCompleted: !el.isCompleted
        })
      } else {
        return (el)
      }
    }))
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ToDoHead toDoItem={toDoItem} handleChange={handleChange} handleClick={handleClick} />
      <ToDos todos={toDos} handleTick={handleTick} />


    </div>
  );
}

export default App;
