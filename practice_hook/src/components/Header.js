import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
      <h2 className="h4 m-0 fw-bold">Mini Task Manager</h2>
      <button 
        className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <>
            <i className="bi bi-moon-fill"></i> Dark
          </>
        ) : (
          <>
            <i className="bi bi-sun-fill"></i> Light
          </>
        )}
      </button>
    </header>
  );
}