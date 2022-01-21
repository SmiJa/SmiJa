import decidr from './../images/decidr.png';
import ecard from './../images/eCard.png';
import hauntedHouse from './../images/hauntedHouseGame.png';
import magicBox from './../images/magicBox.png';
import passwordGenerator from './../images/passwordGenerator.png';
import rockPaperScissors from './../images/rockPaperScissors.png';
import shoppingList from './../images/shoppingList.png';

export default function Projects() {
    return (
        <div className="bg-light rounded-3 border p-3 mb-3 mt-3" id="projects">
            <p className="fw-bold fs-2">Projects</p>
            <p>
                These are the projects I have worked on.
            </p>
            <div className="d-sm-flex flex-wrap justify-content-evenly .flex-sm-column">
                <div className="card p-2 m-2 col-lg-3 flex-grow-1">
                    <img src={shoppingList} alt="" className="rounded-3 ratio ratio-16x9" />
                    <header>
                        <p className="fs-2">Shopping List</p>
                    </header>
                    <p>The Shopping List app is a great way to make lists in the command line. This app was a fun way to learn about creating files and working with lists in Python.</p>
                    <p>Built with: Python</p>
                    <a className="btn btn-dark mt-1" href="https://github.com/SmiJa/Shopping_List"><i className="fab fa-github pe-1"></i>View the code</a>
                </div>
                <div className="card p-2 m-2 col-lg-3 flex-grow-1">
                    <img src={hauntedHouse} alt="" className="rounded-3 ratio ratio-16x9" />
                    <header>
                        <p className="fs-2">Haunted House Game</p>
                    </header>
                    <p>This project was a team effort from concept to deployment. The team that worked on this got great experience in routing in React.js</p>
                    <p>Built with: React, CSS3</p>
                    <a className="btn btn-warning" href="https://luceroweb.github.io/haunted-house-game/#/">Play the game</a>
                    <a className="btn btn-dark mt-1" href="https://github.com/luceroweb/haunted-house-game"><i className="fab fa-github pe-1"></i>View the code</a>
                </div>
                <div className="card p-2 m-2 col-lg-3 flex-grow-1">
                    <img src={magicBox} alt="" className="rounded-3 ratio ratio-16x9" />
                    <header>
                        <p className="fs-2">Ask the Magic Box</p>
                    </header>
                    <p>This project was an opportunity to work with array's and random selection of an item in an array. </p>
                    <p>Built with: HTML5, CSS3, JavaScript</p>
                    <a className="btn btn-warning" href="https://smija.github.io/magicEightBall/">Link to the app</a>
                    <a className="btn btn-dark mt-1" href="https://github.com/SmiJa/magicEightBall"><i className="fab fa-github pe-1"></i>View the code</a>
                </div>
                <div className="card p-2 m-2 col-lg-3 flex-grow-1">
                    <img src={decidr} alt="" className="rounded-3 ratio ratio-16x9" />
                    <header>
                        <p className="fs-2">Decidr</p>
                    </header>
                    <p>Learned a lot on working with handling state and user input in this app.</p>
                    <p>Built with: React</p>
                    <a className="btn btn-warning" href="https://smija.github.io/decidr/">Link to the app</a>
                    <a className="btn btn-dark mt-1" href="https://github.com/SmiJa/decidr"><i className="fab fa-github pe-1"></i>View the code</a>
                </div>
                <div className="card p-2 m-2 col-lg-3 flex-grow-1">
                    <img src={passwordGenerator} alt="" className="rounded-3 ratio ratio-16x9" />
                    <header>
                        <p className="fs-2">Password Generator</p>
                    </header>
                    <p>Learned about how to work with user selectable options and random generation. </p>
                    <p>Built with: HTML5, CSS3, JavaScript</p>
                    <a className="btn btn-warning" href="https://blissful-hodgkin-10badc.netlify.app/">Link to the app</a>
                    <a className="btn btn-dark mt-1" href="https://github.com/SmiJa/passwordGenerator"><i className="fab fa-github pe-1"></i>View the code</a>
                </div>
                <div className="card p-2 m-2 col-lg-3 flex-grow-1">
                    <img src={rockPaperScissors} alt="" className="rounded-3 ratio ratio-16x9" />
                    <header>
                        <p className="fs-2">Rock, Paper, Scissors</p>
                    </header>
                    <p>Just a fun game project.</p>
                    <p>Built with: HTML5, CSS3, JavaScript</p>
                    <a className="btn btn-warning" href="https://objective-panini-185d08.netlify.app/">Link to the app</a>
                    <a className="btn btn-dark mt-1" href="https://github.com/SmiJa/Rock_Paper_Scissors"><i className="fab fa-github pe-1"></i>View the code</a>
                </div>
                <div className="card p-2 m-2 col-lg-3 flex-grow-1">
                    <img src={ecard} alt="" className="rounded-3 ratio ratio-16x9" />
                    <header>
                        <p className="fs-2">E-Card</p>
                    </header>
                    <p>This project provides an E-Card for a user to send to a loved one. It has a form for the user to fill out a greeting and message to the person they have chosen to email it to. </p>
                    <p>Built with: React</p>
                    <a className="btn btn-warning" href="https://smija.github.io/ecard/">Link to the app</a>
                    <a className="btn btn-dark mt-1" href="https://github.com/SmiJa/ecard"><i className="fab fa-github pe-1"></i>View the code</a>
                </div>
            </div>
            <div className="d-grid">
                <a className="btn w100 bg-dark text-warning p-1 fs-3 fw-3" href="#nav">
                    <i className="fas fa-caret-up"></i>
                </a>
            </div>
        </div>
    );
}