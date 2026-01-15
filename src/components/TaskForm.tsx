import { useState } from "react";

type TaskFormProps = {
    anadirTarea : (titulo: string) => (void);
    editando: boolean
}

function TaskForm({anadirTarea, editando} : TaskFormProps ) {
    const [titulo, setTitulo] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (titulo.trim().length > 0) {
            anadirTarea(titulo.trim())
        }
    }

    return <>
    <h2>Agregar nueva tarea</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título de la tarea" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <button type="submit" disabled={editando} >Agregar</button>
    </form>
    </>;
}

export default TaskForm;