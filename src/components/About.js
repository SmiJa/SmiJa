import Me from './../images/ProfilePicSquare.jpg';
import Career from './Career';
import Education from './Education';

export default function About() {
	return (
		<>
			<div className="container" id="">
				<div className="personal-bar">
					<div className="profile-img">
						<img className="" src={Me} alt="" />
					</div>
					<div className="summary">
						<header className="summary-header">Personal Summary</header>
						<p>
							I'm a self-motivated front-end developer with a passion for learning. While building projects I strive for clean UI for the web and mobile. I work with React and React Native. Having a background in art I bring creative problem solving to the project.
						</p>

						<ul className="social-links">
						<li>
								<a href="https://www.linkedin.com/in/jasonsdev"><i class="fa-brands fa-linkedin"></i>  Linkedin</a>
							</li>
							<li>
								<a href="https://github.com/SmiJa"><i class="fa-brands fa-github"></i>  GitHub</a>
							</li>
							<li>
								<a href="https://codepen.io/JasonSmith"><i class="fa-brands fa-codepen"></i>  Codepen</a>
							</li>
						</ul>
					</div>
				</div>			
			</div>
			<div id="skills" className="container">
				<header className="">Skills</header>
				<div className="dev-skills">
					<div className="skill">
						<i className="fab fa-html5 p-2"></i>
						<p>HTML 5</p>
					</div>
					<div className="skill">
						<i className="fab fa-css3-alt p-2"></i>
						<p>CSS 3</p>
					</div>
					<div className="skill">
						<i className="fab fa-js p-2"></i>
						<p>JavaScript</p>
					</div>
					<div className="skill">
						<i className="fab fa-react p-2"></i>
						<p>React</p>
					</div>
					<div className="skill">
						<i className="fab fa-bootstrap p-2"></i>
						<p>Bootstrap</p>
					</div>
					<div className="skill">
						<i className="fab fa-git-alt p-2"></i>
						<p>Git</p>
					</div>
					<div className="skill">
						<i className="fab fa-npm p-2"></i>
						<p>npm</p>
					</div>
					<div className="skill">
						<i className="fab fa-python p-2"></i>
						<p>Python</p>
					</div>
					<div className="skill">
						<i className="fab fa-figma p-2"></i>
						<p>Figma</p>
					</div>
				</div>
			</div>
			
			<Career />
			<Education />
		</>
	);
}