import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
    console.log(task)
    return (
        <div className={`task ${task.terminada ? 'terminado' : ' '}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.texto}<FaTimes style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.fecha}</p>
        </div>
    )
}

export default Task