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
    <div className="" id="projects">
        <p className="">Projects</p>
        <p>
            These are the projects I have worked on.
        </p>
        <div className="">

        <div className="">
            <img src={shoppingList} alt="" className="" />
            <header>
            <p className="">Shopping List</p>
            </header>
            <p>The Shopping List app is a great way to make lists in the command line. This app was a fun way to learn about creating files and working with lists in Python.</p>
            <p>Built with: Python</p>
            <a className="" href="https://github.com/SmiJa/Shopping_List"><i className=""></i>View the code</a>
        </div>

        <div className="">
            <img src={triviaAndChill} alt="" className="" />
            <header>
            <p className="">Shopping List</p>
            </header>
            <p>The Shopping List app is a great way to make lists in the command line. This app was a fun way to learn about creating files and working with lists in Python.</p>
            <p>Built with: Python</p>
            <a className="" href="https://github.com/SmiJa/Shopping_List"><i className=""></i>View the code</a>
        </div>

        <div className="">
            <img src={hauntedHouse} alt="" className="" />
            <header>
            <p className="fs-2">Haunted House Game</p>
            </header>
            <p>This project was a team effort from concept to deployment. The team that worked on this got great experience in routing in React.js</p>
            <p>Built with: React, CSS3</p>
            <a className="" href="https://luceroweb.github.io/haunted-house-game/#/">Play the game</a>
            <a className="" href="https://github.com/luceroweb/haunted-house-game"><i className=""></i>View the code</a>
        </div>

        <div className="">
            <img src={magicBox} alt="" className="" />
            <header>
            <p className="">Ask the Magic Box</p>
            </header>
            <p>This project was an opportunity to work with array's and random selection of an item in an array. </p>
            <p>Built with: HTML5, CSS3, JavaScript</p>
            <a className="" href="https://smija.github.io/magicEightBall/">Link to the app</a>
            <a className="" href="https://github.com/SmiJa/magicEightBall"><i className=""></i>View the code</a>
        </div>

        <div className="">
            <img src={decidr} alt="" className="" />
            <header>
            <p className="">Decidr</p>
            </header>
            <p>Learned a lot on working with handling state and user input in this app.</p>
            <p>Built with: React</p>
            <a className="" href="https://smija.github.io/decidr/">Link to the app</a>
            <a className="" href="https://github.com/SmiJa/decidr"><i className=""></i>View the code</a>
        </div>

        <div className="">
            <img src={passwordGenerator} alt="" className="" />
            <header>
            <p className="">Password Generator</p>
            </header>
            <p>Learned about how to work with user selectable options and random generation. </p>
            <p>Built with: HTML5, CSS3, JavaScript</p>
            <a className="" href="https://blissful-hodgkin-10badc.netlify.app/">Link to the app</a>
            <a className="" href="https://github.com/SmiJa/passwordGenerator"><i className=""></i>View the code</a>
        </div>

        <div className="">
            <img src={rockPaperScissors} alt="" className="" />
            <header>
            <p className="">Rock, Paper, Scissors</p>
            </header>
            <p>Just a fun game project.</p>
            <p>Built with: HTML5, CSS3, JavaScript</p>
            <a className="" href="https://objective-panini-185d08.netlify.app/">Link to the app</a>
            <a className="" href="https://github.com/SmiJa/Rock_Paper_Scissors"><i className=""></i>View the code</a>
        </div>

        <div className="">
            <img src={ecard} alt="" className="" />
            <header>
            <p className="">E-Card</p>
            </header>
            <p>This project provides an E-Card for a user to send to a loved one. It has a form for the user to fill out a greeting and message to the person they have chosen to email it to. </p>
            <p>Built with: React</p>
            <a className="" href="https://smija.github.io/ecard/">Link to the app</a>
            <a className="" href="https://github.com/SmiJa/ecard"><i className=""></i>View the code</a>
        </div>
        </div>
        <div className="">
        <a className="" href="#nav">
            <i className=""></i>
        </a>
        </div>
    </div>
    );
}