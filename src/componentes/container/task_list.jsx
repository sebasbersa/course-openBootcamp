import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);
    const changeState = (id) => {
        console.log("TODO: CAMBIAR ESTADO DE TAREA");
    };
    return (
        <div>
            <h1>Your Tasks:</h1>
            {/* To do: aplicar un for/map para renderizar tareas*/}
            <TaskComponent task={defaultTask} />
        </div>
    );
};

export default TaskListComponent;
