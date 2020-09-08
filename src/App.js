import React from "react";
import taskStore from "./task/taskStore";
import TaskForm from "./task/TaskForm";
import AllTasks from "./task/AllTasks";
import PendingTasks from "./task/PendingTasks";
import DoneTasks from "./task/DoneTasks";

function App() {
  return (
    <div>
      <TaskForm onSubmit={taskStore.add} />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <AllTasks />
          </div>
          <div className="col-sm-4">
            <PendingTasks />
          </div>
          <div className="col-sm-4">
            <DoneTasks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
