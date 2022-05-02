import { Link } from 'react-router-dom';

export default function Header({setShowMenu}) {
	return (
		<header id="nav" className="">
			<div className="container nav-wrap">
				<Link to="/">
					<i className=""></i> <span className="nav-name">Jason Smith</span>
				</Link>
        <nav className="nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Career</Link>
          <Link to="/education">Education</Link>
          <Link to="/">About</Link>
        </nav>
        <span onClick={() => setShowMenu(true)} id="mobile-nav-opener">Menu</span>
			</div>
		</header>
	);
}