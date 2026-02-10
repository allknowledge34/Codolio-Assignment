import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",        
    topic: "",       
    subTopic: "",    
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskData.task || !taskData.topic || !taskData.subTopic) return;

    setTasks((prev) => [...prev, taskData]);

    setTaskData({
      task: "",
      topic: "",
      subTopic: "",
      status: "todo",
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter Question (e.g. Two Sum)"
          onChange={handleChange}
        />

        <input
          type="text"
          name="topic"
          value={taskData.topic}
          className="task_input"
          placeholder="Enter Topic (e.g. Arrays)"
          onChange={handleChange}
        />

        <input
          type="text"
          name="subTopic"
          value={taskData.subTopic}
          className="task_input"
          placeholder="Enter Sub-topic (e.g. Two Pointer)"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <select
            name="status"
            value={taskData.status}
            className="task_status"
            onChange={handleChange}
          >
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          <button type="submit" className="task_submit">
            + Add Question
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
