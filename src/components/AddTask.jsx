import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [texto, setText] = useState('')
    const [fecha, setDate] = useState('')
    const [terminada, setFinished] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() // evitar recargar la página
        if(!texto){
            alert('Por favor teclea un texto')
            return
        }

        onAdd({texto,fecha,terminada})

        setText('')
        setDate('')
        setFinished(false)
    }


    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor=""> Tareas</label>
                <input type="text" placeholder="Teclea una Tarea" value={texto} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor=""> Fecha </label>
                <input type="text" placeholder="Teclea una fecha" value={fecha} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor=""> Terminada </label>
                <input type="checkbox" checked={terminada} value={terminada} onChange={(e) => setFinished(e.currentTarget.checked)} />
            </div>
            <input className="btn btn-block" type="submit" value='Agregar Tarea' />
        </form>
    )
}
export default AddTask