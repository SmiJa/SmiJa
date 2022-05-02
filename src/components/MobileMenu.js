import { Link } from 'react-router-dom';

export default function Header({setShowMenu}) {
	return (
		<div className="mobileMenu">
			<span onClick={() => setShowMenu(false)} className="close">
				<i class="fa-solid fa-square-xmark"></i>
			</span>
			<nav className="mobile-nav-links">
				<Link to="/projects" onClick={() => setShowMenu(false)}>Projects</Link>
				<Link to="/resume" onClick={() => setShowMenu(false)}>Career</Link>
				<Link to="/education" onClick={() => setShowMenu(false)}>Education</Link>
				<Link to="/" onClick={() => setShowMenu(false)}>About</Link>
			</nav>
		</div>
	);
}