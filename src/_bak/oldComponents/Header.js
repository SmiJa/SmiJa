export default function Header() {
    return (
        <nav id="nav" className="navbar navbar-dark bg-dark rounded-bottom">
            <div className="container-fluid">
                <a href="#" className="navbar-brand fw-bold fs-2">
                    <i className="fas fa-code text-warning"></i> <span className="name">Jason Smith</span>
                </a>
                <div>
                    <ul className="nav">
                        {/* <li className="nav-item">
                            <a className="nav-link text-light" href="/">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#career">Career</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#education">Education</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}