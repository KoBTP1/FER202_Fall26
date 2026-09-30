export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          id={`task-${task.id}`}
        />
        <label 
          className={`form-check-label ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}
          htmlFor={`task-${task.id}`}
          style={{ cursor: 'pointer' }}
        >
          {task.title}
        </label>
      </div>
      <button 
        className="btn btn-outline-danger btn-sm"
        onClick={() => onDeleteTask(task.id)}
      >
        [Xóa]
      </button>
    </li>
  );
}