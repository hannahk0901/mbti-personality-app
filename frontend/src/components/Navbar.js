import { Link } from 'react-router-dom';
import './Navbar.css'; // Only if you're using the CSS file below

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MBTI Project</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test">Take the Test</Link></li>
        <li><Link to="/functions">Cognitive Functions</Link></li>
      </ul>
    </nav>
  );
}
