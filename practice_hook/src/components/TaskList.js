import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  const total = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;
  const activeCount = total - completedCount;

  return (
    <div>
      <div className="alert alert-secondary py-2 px-3 mb-3 text-center fw-medium">
        Tổng: {total} | Chưa làm: {activeCount} | Hoàn thành: {completedCount}
      </div>

      {tasks.length === 0 ? (
        <p className="text-center text-muted">Không có công việc nào.</p>
      ) : (
        <ul className="list-group shadow-sm">
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleTask={onToggleTask} 
              onDeleteTask={onDeleteTask} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}