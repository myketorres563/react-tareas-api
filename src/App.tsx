import { useEffect, useState } from 'react';
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { taskService } from './services/taskService';
import type { Task } from './types/Task';

function App() {
  const [tareas, setTareas] = useState<Task[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const [editando, setEditando] = useState<boolean>(false);

  function borrarTarea(tareaObjetivo : Task) :void {
    setEditando(true);
    taskService.delete(tareaObjetivo.id).then(() => {
        setTareas(tareas.filter(tarea => tarea.id != tareaObjetivo.id))
        setEditando(false);
    })
  }

  function anadirTarea(titulo : string) :void {
    setEditando(true);
    taskService.create(titulo).then((nuevaTarea) => {
        setTareas([...tareas, nuevaTarea])
        setEditando(false);
    })
  }

  useEffect(() => {
    taskService
      .getAll()
      .then((listaTareas) => {
        setTareas(listaTareas);
      })
      .finally(() => setCargando(false));
  }, []);
  
  return (
    <div>
      <h1>Lista de tareas</h1>
      <TaskList tareas={tareas} cargando={cargando} editando={editando} borrarTarea={borrarTarea} />
      <TaskForm anadirTarea={anadirTarea} editando={editando} />
    </div>
  )
}

export default App
