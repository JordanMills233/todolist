import React from "react";
import styles from '../styles/ToDoItem.module.css'

interface ToDoProps {
  text: string;
  onDelete: () => void;
}

export const ToDoItem: React.FC<ToDoProps> = ({text, onDelete}) => {
  return (
    <div className={styles.toDoContainer}>
      <button className={styles.toDoButton} onClick={onDelete}>X</button>
      <h3 className={styles.toDoText}>{text}</h3>
    </div>
  )
}
