import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask"

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState ([
    {
        id: 1,
        texto: 'Ir al doctor',
        fecha: '5 de Julio de 2022',
        terminada: true,
    },
    {
        id: 2,
        texto: 'Ir al cine',
        fecha: '10 de Julio de 2022',
        terminada: false,
    },
    {
        id: 3,
        texto: 'Ir al supermercado',
        fecha: '11 de Julio de 2022',
        terminada: false,
    }
])

//Add task
const addTask =(task) => {
  // console.log(task);
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task} 
  setTasks([...tasks,newTask])
  // console.log(tasks)
}

//delete task
const deleteTask = (id) => {
  //console.log('borrar',id)
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle erminado
const toggleFinished = (id) => {
  //console.log(id)
  setTasks(tasks.map((task) => task.id == id ? {...task, terminada: !task.terminada} : task))
}

  return (
    <div className='container'>
      <Header titulo={'Administrador de tareas'} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete= {deleteTask} onToggle={toggleFinished}/>) : ('no hay tareas')}
      {showAddTask && <AddTask onAdd={addTask}/>}
    </div>
  )
}

export default App
