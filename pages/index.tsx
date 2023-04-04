import React, { useState } from "react";
import { ToDoItem } from "@/components/todoitem";
import styles from '../styles/App.module.css'

const App: React.FC = () => {
  const [todos, setTodos] = useState<{text: string}[]>([])
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodos([...todos, {text: inputValue}])
    setInputValue("")
  }

  const handleDelete = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.tester}>TODOS</h1>
      </div>
      <div>
        {todos.length >= 1 ? todos.map((todo, index) => {
          return (
            <ToDoItem key={index} text={todo.text} onDelete={() => handleDelete(index)} />
          )
        }) : (
          <div></div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} height={20}/>
        </form>
      </div>
    </div>
  );
};

export default App;
