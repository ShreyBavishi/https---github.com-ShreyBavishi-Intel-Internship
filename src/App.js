import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import health from './images/HealthCare.webp';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Card slot = "0" img={health} rating="(3)" reviewCnt="50"  country="India" price="2500" title="HealthCare Facilities"></Card>
    </div>
  );
}

export default App;
