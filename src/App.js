import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="container-sm h-100 d-flex flex-column">
      <Header/>
      <Profile/>
      <Projects/>
      <Resume/>
      <Education/>
    </div>
    
  );
}

export default App;
