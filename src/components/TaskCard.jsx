import React, { useState } from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({
  title,
  topic,
  subTopic,
  index,
  handleDelete,
  setActiveCard,
  updateTask
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ title, topic, subTopic });

  const save = () => {
    updateTask({
      task: form.title,
      topic: form.topic,
      subTopic: form.subTopic
    });
    setIsEditing(false);
  };

  return (
    <article
      className="task_card"
      draggable={!isEditing}
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      {isEditing ? (
        <>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
          />
          <input
            value={form.subTopic}
            onChange={(e) =>
              setForm({ ...form, subTopic: e.target.value })
            }
          />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <p className="task_text">{title}</p>
          <div className="task_meta">
            <span><b>Topic:</b> {topic}</span>
            <span><b>Sub-topic:</b> {subTopic}</span>
          </div>
        </>
      )}

      <div className="task_card_bottom_line">
        <button onClick={() => setIsEditing(!isEditing)}>✏️</button>
        <div onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="delete" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
