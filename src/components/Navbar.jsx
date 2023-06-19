import { Link } from 'react-router-dom';

function NavigationPanel() {
  return (
    <nav className="border bg-slate-400 w-40 h-full fixed left-0">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reservation">My Reservation</Link>
        </li>
        <li>
          <Link to="/delete">Delete Room</Link>
        </li>
        <li>
          <Link to="/add">Add Room</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationPanel;
