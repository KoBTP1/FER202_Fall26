import { useState } from 'react';

export default function TaskForm({ onAddTask, filter, setFilter, search, setSearch }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle('');
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập tên công việc........."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn btn-primary px-4" type="submit">
            Thêm
          </button>
        </form>

        <div className="row g-2">
          <div className="col-md-4">
            <select 
              className="form-select" 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Tất cả</option>
              <option value="active">Chưa làm</option>
              <option value="completed">Hoàn thành</option>
            </select>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm........................."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}