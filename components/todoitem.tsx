import React, {useState} from "react";
import styles from '../styles/ToDoItem.module.css'

interface ToDoProps {
  text: string;
  onDelete: () => void;

}

export const ToDoItem: React.FC<ToDoProps> = ({text, onDelete}) => {

  // Declare a state variable called textDecoration and set its initial value to 'none'
  const [textDecoration, setTextDecoration] = useState<string>('none');

  // Toggle textDecoration between 'line-through' and 'none'
  const handleClick = () => {
    setTextDecoration((prevTextDecoration) =>
      prevTextDecoration === 'none' ? 'line-through' : 'none',
    );
  };

  return (
    <div className={styles.toDoContainer}>
      <button className={styles.toDoButton} onClick={onDelete}>X</button>
      <h3 style={{ textDecoration: textDecoration}} onClick={handleClick} className={styles.toDoText}>{text}</h3>
    </div>
  )
}
