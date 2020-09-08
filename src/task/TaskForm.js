import React, { useState } from "react";

function TaskForm({ onSubmit }) {
  const [description, setDescription] = useState("");

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDescription("");
    if (typeof onSubmit === "function") {
      onSubmit({ description, done: false });
    }
  }

  return (
    <div className="add-tasks-form">
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Tasks:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="enter tasks to todo"
            aria-label="enter tasks to todo"
            aria-describedby="basic-addon1"
            name="description"
            onChange={handleDescriptionChange}
            value={description}
          />
          <button type="submit" className="btn btn-info">Add</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
