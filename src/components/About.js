import Me from './../images/profile2.png';
import Career from './Career';
import Education from './Education';
import {Link} from 'react-router-dom';

export default function About() {
	return (
		<>
			<div className="container" id="">
				<p className="">Profile</p>
				<div className="">
					<div className="">
						<img className="" src={Me} alt="" />
					</div>
					<div className="">
					<p className="">Personal Summary</p>
					<p>
						As a paid apprentice working with React and React Native I have worked on some amazing projects. I'm a self motivated front-end developer that thrives on learning new technologies.
					</p>
					</div>
				</div>
				
				<p className="">Skills</p>
				<div className="dev-skills">
					<div className="">
						<Link to="projects/dev">Test</Link>
						<i className="fab fa-html5 p-2"></i>
						<i className="fab fa-css3-alt p-2"></i>
						<i className="fab fa-js p-2"></i>
						<i className="fab fa-react p-2"></i>
						<i className="fab fa-bootstrap p-2"></i>
						<i className="fab fa-git-alt p-2"></i>
						<i className="fab fa-npm p-2"></i>
						<i className="fab fa-python p-2"></i>
					</div>
				</div>
			</div>
			<Career />
			<Education />
		</>
	);
}