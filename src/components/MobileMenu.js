export default function Header() {
    return (
        <nav id="nav" className="">
            <div className="">
                <a href="#" className="">
                    <i className=""></i> <span className="">Jason Smith</span>
                </a>
                <div>
                    <ul className="">
                        {/* <li className="nav-item">
                            <a className="nav-link text-light" href="/">Home</a>
                        </li> */}
                        <li className="">
                            <a className="" href="#projects">Projects</a>
                        </li>
                        <li className="">
                            <a className="" href="#career">Career</a>
                        </li>
                        <li className="">
                            <a className="" href="#education">Education</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}