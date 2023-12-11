import React from "react";
import styles from "./Task.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Task({ tasks, setTasks }: any) {
  return (
    <div>
      <ul className={styles.list}>
        {tasks.map((item: any, index: any) => (
          <li key={index} className={styles.flex__block}>
            <div className={styles.flex__div}>
              {item.id} {item.name}
            </div>
            <select name="Track" className={styles.flex__select}>
              <option value="Не начата">Не начата</option>
              <option value="В работе">В работе</option>
              <option value="Закончена">Закончена</option>
            </select>
            <button className={styles.delete__btn} onClick={()=> setTasks(tasks.filter((x:any)=>x.id !== item.id))}>Delete!!!</button>
            <Link
              key={item.id}
              to={`/${item.id}`}
              className={styles.block__link}
            >
              More info
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
