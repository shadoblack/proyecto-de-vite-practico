const initialState = [{
    id: 1,
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducer',
    finalizada: false
}



const agregarTarea = {
    type: '[TAREAS] Agregar Tarea',
    payload: nuevaTarea
}
const editarTarea = {
    type: '[TAREAS] Editar Tarea',
    payload: nuevaTarea
}
const eliminarTarea = {
    type: '[TAREAS] Eliminar Tarea',
}
const borrarTareas = {
    type: '[TAREAS] Borrar tareas Tarea',
}

const tareaReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Editar Tarea':
            //return [...state, action.payload]
        case '[TAREAS] Eliminar Tarea':
            //return [...state, action.payload]
        case '[TAREAS] Borrar tareas Tarea':
            return []

        default:
            break;
    }
    return state

}

tareaReducer(initialState, agregarTarea)

console.log(tareaReducer(initialState, agregarTarea))

























export const ListaTareas = () => {
    return (
        <div>ListaTareas</div>
    )
}
