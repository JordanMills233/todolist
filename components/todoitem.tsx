import React from "react";

interface toDoProps {
  text: string;
  isComplete: boolean;
  handleDelete: () => void;
}

export default function ToDoItem({
  text,
  isComplete,
  handleDelete,
}: toDoProps) {
  return (
    <div>
      <h2 id="textContent">{text}</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
