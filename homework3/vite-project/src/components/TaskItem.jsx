import useTodoStore from "../store/todoStore";

const TaskItem = ({ task, setEditingTask }) => {
  const { deleteTask, toggleTask } = useTodoStore();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => setEditingTask(task)}>✏</button>
      <button onClick={() => deleteTask(task.id)}>🗑</button>
    </div>
  );
};

export default TaskItem;

