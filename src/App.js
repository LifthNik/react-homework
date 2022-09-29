import './App.css';

import RaM from "./components/RaM";
import Simpsons from "./components/Simpsons/Simpsons";


function App() {

  return (

      <div className="App">

          <Simpsons/>

          <RaM
              id = {1}
              name = {'Rick Sanchez'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Male'}
              image = {'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}

          />
          <RaM
              id = {2}
              name = {'Morty Smith'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Male'}
              image = {'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}

          />
          <RaM
              id = {3}
              name = {'Summer Smith'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Female'}
              image = {'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}

          />
          <RaM
              id = {4}
              name = {'Beth Smith'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Female'}
              image = {'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}

          />
          <RaM
              id = {5}
              name = {'Jerry Smit'}
              status = {'Alive'}
              species = {'Human'}
              gender = {'Male'}
              image = {'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}

          />
          <RaM
              id = {6}
              name = {'Abadango Cluster Princess'}
              status = {'Alive'}
              species = {'Alien'}
              gender = {'Female'}
              image = {'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}

          />


      </div>

  );
}

export default App;
