import { useState } from "react";
import useTodoStore from "../store/todoStore";

const TaskForm = ({ editingTask, setEditingTask }) => {
  const { addTask, updateTask } = useTodoStore();
  const [title, setTitle] = useState(editingTask ? editingTask.title : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      updateTask(editingTask.id, title);
      setEditingTask(null);
    } else {
      addTask(title);
    }
    
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите задачу..."
      />
      <button type="submit">{editingTask ? "Сохранить" : "Добавить"}</button>
      {editingTask && <button onClick={() => setEditingTask(null)}>Отмена</button>}
    </form>
  );
};

export default TaskForm;