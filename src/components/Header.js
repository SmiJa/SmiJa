import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';

export default function Header({setShowMenu}) {

	return (
		<header id="nav" className="">
			<div className="container nav-wrap">
				<Link to="/">
					<span className="nav-name">Jason Smith</span>
				</Link>
        <nav className="nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/">Resume</Link>
        </nav>
        <span onClick={() => setShowMenu(true)} id="mobile-nav-opener">Menu</span>
			</div>
		</header>
	);
}