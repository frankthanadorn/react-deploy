import logo from './logo.svg';
import './App.css';
import profileImage from './img/profile.jpg';
function App() {
  return (
    <div className="App">
      <h1>My react App</h1>
      <h2>Author : Frank</h2>
      <img src={profileImage} alt="profile-image"/>
      
    </div>
  );
}

export default App;
