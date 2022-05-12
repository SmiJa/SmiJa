import decidr from './../images/decidr.png';
import ecard from './../images/eCard.png';
import hauntedHouse from './../images/hauntedHouseGame.png';
import magicBox from './../images/magicBox.png';
import passwordGenerator from './../images/passwordGenerator.png';
import rockPaperScissors from './../images/rockPaperScissors.png';
import shoppingList from './../images/shoppingList.png';
import triviaAndChill from './../images/triviaAndChill.png';

export default function Projects() {
	return (
    <div className="container" id="projects-page">
			<div className="projects-wrap">
        <div className="project">
					<div className="img-wrap">
						<img src={shoppingList} alt="" className="" />
					</div>
					<div className="project-info">
						<header>
							<p className="">Shopping List</p>
						</header>
						<p className='about'>The Shopping List app is a great way to make lists in the command line. This app was a fun way to learn about creating files and working with lists in Python.</p>
						<p>Built with: Python</p>
						<div className="btn-bar">
							<a className="btn github-btn" href="https://github.com/SmiJa/Shopping_List"><i className="fa-brands fa-github"></i>View the code</a>
						</div>
						
					</div>
        </div>

        <div className="project">
					<div className="img-wrap">
						<img src={triviaAndChill} alt="" className="" />
					</div>
					<div className="project-info">
						<header>
							<p className="">Trivia & Chill</p>
						</header>
						<p className='about'>A fun game that builds questions with an API from The Movie Database</p>
						<p>Built with: React Native, API</p>
						<div className="btn-bar">
							<a className="btn project-btn" href="https://luceroweb.github.io/trivia-and-chill/">Play the game</a>
							<a className="btn github-btn" href="https://github.com/SmiJa/Shopping_List"><i className="fa-brands fa-github"></i>View the code</a>
						</div>
					</div>
        </div>

        <div className="project">
					<div className="img-wrap">
						<img src={hauntedHouse} alt="" className="" />
					</div>
					<div className="project-info">
						<header>
							<p className="">Haunted House Game</p>
						</header>
						<p className='about'>This project was a team effort from concept to deployment. The team that worked on this got great experience in routing in React.js</p>
						<p>Built with: React, CSS3</p>
						<div className="btn-bar">
							<a className="btn project-btn" href="https://luceroweb.github.io/haunted-house-game/#/">Play the game</a>
							<a className="btn github-btn" href="https://github.com/luceroweb/haunted-house-game"><i className="fa-brands fa-github"></i>View the code</a>
						</div>
					</div>
        </div>

        <div className="project">
					<div className="img-wrap">
						<img src={magicBox} alt="" className="" />
					</div>
					<div className="project-info">
						<header>
							<p className="">Ask the Magic Box</p>
						</header>
						<p className='about'>This project was an opportunity to work with array's and random selection of an item in an array. </p>
						<p>Built with: HTML5, CSS3, JavaScript</p>
						<div className="btn-bar">
							<a className="btn project-btn" href="https://smija.github.io/magicEightBall/">Link to the app</a>
							<a className="btn github-btn" href="https://github.com/SmiJa/magicEightBall"><i className="fa-brands fa-github"></i>View the code</a>
						</div>
					</div>
        </div>

        <div className="project">
					<div className="img-wrap">
						<img src={decidr} alt="" className="" />
					</div>
					<div className="project-info">
						<header>
							<p className="">Decidr</p>
						</header>
						<p className='about'>Learned a lot on working with handling state and user input in this app.</p>
						<p>Built with: React</p>
						<div className="btn-bar">
							<a className="btn project-btn" href="https://smija.github.io/decidr/">Link to the app</a>
							<a className="btn github-btn" href="https://github.com/SmiJa/decidr"><i className="fa-brands fa-github"></i>View the code</a>
						</div>
					</div>
        </div>

        <div className="project">
					<div className="img-wrap">
						<img src={passwordGenerator} alt="" className="" />
					</div>
					<div className="project-info">
						<header>
							<p className="">Password Generator</p>
						</header>
						<p className='about'>Learned about how to work with user selectable options and random generation. </p>
						<p>Built with: HTML5, CSS3, JavaScript</p>
						<div className="btn-bar">
							<a className="btn project-btn" href="https://blissful-hodgkin-10badc.netlify.app/">Link to the app</a>
							<a className="btn github-btn" href="https://github.com/SmiJa/passwordGenerator"><i className="fa-brands fa-github"></i>View the code</a>
						</div>
					</div>
        </div>

        <div className="project">
					<div className="img-wrap">
						<img src={rockPaperScissors} alt="" className="" />
					</div>
					<div className="project-info">
						<header>
							<p className="">Rock, Paper, Scissors</p>
						</header>
						<p className='about'>Just a fun game project.</p>
						<p>Built with: HTML5, CSS3, JavaScript</p>
						<div className="btn-bar">
							<a className="btn project-btn" href="https://objective-panini-185d08.netlify.app/">Link to the app</a>
							<a className="btn github-btn" href="https://github.com/SmiJa/Rock_Paper_Scissors"><i className="fa-brands fa-github"></i>View the code</a>
						</div>
					</div>
        </div>

        <div className="project">
					<div className="img-wrap">
						<img src={ecard} alt="" className="" />
					</div>
					<div className="project-info">
						<header>
							<p className="">E-Card</p>
						</header>
						<p className='about'>This project provides an E-Card for a user to send to a loved one. It has a form for the user to fill out a greeting and message to the person they have chosen to email it to. </p>
						<p>Built with: React</p>
						<div className="btn-bar">
							<a className="btn project-btn" href="https://smija.github.io/ecard/">Link to the app</a>
							<a className="btn github-btn" href="https://github.com/SmiJa/ecard"><i className="fa-brands fa-github"></i> View the code</a>
						</div>
					</div>					
        </div>
			</div>
    </div>
	);
}