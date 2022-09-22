import './App.css';
import Users from "./components/UserPart/Users";
import Rockets from "./components/ApiSpaceX/launches";

function App() {
  return (

    <div className="App">

        <h2>Part 1. Users, User info.</h2>
        <Users/>


        <h2>Part 2. SpaceX API</h2>
        <Rockets/>

    </div>

  );
}

export default App;