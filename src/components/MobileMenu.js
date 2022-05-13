import { Link } from 'react-router-dom';

export default function Header({setShowMenu}) {
	return (
		<div className="mobileMenu">
			<span onClick={() => setShowMenu(false)} className="close">
				<i className="fa-solid fa-square-xmark"></i>
			</span>
			<nav className="mobile-nav-links">
				<Link to="projects" onClick={() => setShowMenu(false)}>Projects</Link>
				<Link to="resume" onClick={() => setShowMenu(false)}>Resume</Link>
			</nav>
		</div>
	);
}