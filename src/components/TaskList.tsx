import type { Task } from "../types/Task";

type TaskListProps = {
  tareas: Task[];
  cargando: boolean;
  editando: boolean;
  borrarTarea: (tarea : Task) => void;
  setTareaEditable: (tarea : Task) => void;
};

function TaskList({ tareas, cargando, editando, setTareaEditable, borrarTarea}: TaskListProps) {
  return (
    <>
      {cargando && <p>Cargando...</p>}
      {!cargando && (
        <ul>
          {tareas &&
            tareas.map((tarea) => (
              <li key={tarea.id}>
                {tarea.title}{" "}
                <button
                  disabled={editando}
                  className="edit"
                  onClick={() => setTareaEditable(tarea)}
                >
                  ✏️
                </button>
                <button
                  disabled={editando}
                  className="delete"
                  onClick={() => borrarTarea(tarea)}
                >
                  ❌
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default TaskList;
