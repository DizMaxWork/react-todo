import React, { useEffect, useState } from "react";
import styles from "./Task.module.css";
import Task from "./Task/Task";
import uuid from "react-uuid";

export default function Tasks() {
  const [value, setValue] = useState("");
  const [tasks, setTasks]: any = useState(() =>{
    const tasks = localStorage.tasks
    return tasks ? JSON.parse(tasks) : []
  }); 

  const handlerChange = (e: any) => {
    setValue(e.target.value);
  };
  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  useEffect(() =>{
    const tasks = localStorage.tasks
console.log(tasks)
    tasks && setTasks(JSON.parse(tasks))
  }, []) 
  
  const handlerClick = () => {
    setValue("");
    setTasks([
      ...tasks,
      { id: uuid(), name: value, status: "не начата" },
    ]);
  };
  return (
    <div>
      <div className={styles.tasks__block}>
        <input
          type="text"
          className={styles.input__styles}
          value={value}
          onChange={handlerChange}
        />
        <button onClick={handlerClick}  className={styles.btn__styles} disabled={value === ''}>
          Click me!
        </button>
      </div>
      <Task tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
