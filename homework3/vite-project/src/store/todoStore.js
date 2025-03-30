import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set, get) => ({
      tasks: [],

      addTask: (title) => {
        const newTask = {
          id: Date.now(), 
          title,
          completed: false, 
        };
        set({ tasks: [...get().tasks, newTask] });
      },

      deleteTask: (id) => {
        set({ tasks: get().tasks.filter(task => task.id !== id) });
      },

      toggleTask: (id) => {
        set({
          tasks: get().tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        });
      },

      updateTask: (id, newTitle) => {
        set({
          tasks: get().tasks.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
          ),
        });
      },

      filter: "all", 

      setFilter: (filter) => {
        set({ filter });
      },

      filteredTasks: () => {
        const { tasks, filter } = get();
        if (filter === "completed") return tasks.filter(task => task.completed);
        if (filter === "active") return tasks.filter(task => !task.completed);
        return tasks;
      },
    }),
    { name: "todo-storage" }
  )
);

export default useTodoStore;