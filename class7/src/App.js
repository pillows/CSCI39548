import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Counter from './pages/Counter';
import Todo from './pages/Todo';

function Content() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </header>
    </div>)
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route path="/todo" element={<Todo />} />
        <Route path="/counter" element={<Counter />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
