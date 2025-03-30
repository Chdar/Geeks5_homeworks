import useTodoStore from "../store/todoStore";
import TaskItem from "./TaskItem";
import { useState } from "react";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const { filteredTasks, setFilter, filter } = useTodoStore();
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
      
      <div>
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>Все</button>
        <button onClick={() => setFilter("active")} disabled={filter === "active"}>Активные</button>
        <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>Завершённые</button>
      </div>

      {filteredTasks().length === 0 ? (
        <p>Нет задач</p>
      ) : (
        filteredTasks().map((task) => (
          <TaskItem key={task.id} task={task} setEditingTask={setEditingTask} />
        ))
      )}
    </div>
  );
};

export default TaskList;