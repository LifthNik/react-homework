// 1. Описати всю сім'ю сімпсонів (5 персонажів)

import './App.css';
import Simpson from "./components/Simpsons";
import RaM from "./components/RaM";


function App() {

  return (

      <div className="App">
        <Simpson
            name={'Homer Simpson'}
            img={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            description={'Homer Jay Simpson (born May 12, 1955, or 1969 or 1976 or 1983) is the main protagonist of The Simpsons series (or show). ' +
                'He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. ' +
                'Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. ' +
                'Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he does not.'}

        />
        <Simpson
            name={'Marge Simpson'}
            img={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
            description={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family. ' +
                'She is also one of the five main characters in The Simpsons TV series. ' +
                'Marge Simpson is 36 years old. ' +
                'She and her husband Homer have three children: Bart, Lisa, and Maggie. ' +
                'Marge is the moralistic force in her family and often provides a grounding voice in the midst of her familys antics by trying to maintain order in the Simpson household. '}

        />
        <Simpson
            name={'Bart Simpson'}
            img={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
            description={'Bartholomew "Bart" Jojo Simpson (born April 1 or February 23) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. ' +
                'He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. ' +
                'He also has been nicknamed "Cosmo", after discovering a comet in "Barts Comet".'}

        />
        <Simpson
            name={'Maggie Simpson'}
            img={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
            description={'Lisa Marie Simpson (born May 9) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.' +
                'In "Homer and Lisa Exchange Cross Words" she is also known as Lisa Bouvier. She was named after a train called Lil Lisa on her parents 1st anniversary. '}

        />
        <Simpson
            name={'Maggie Simpson'}
            img={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
            description={'Margaret Evelyn Lenny  "Maggie" Simpson (born December 17, 1989) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. ' +
                'She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face.'}

        />
        {/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі*/}
        {/*https://rickandmortyapi.com/*/}{/*https://rickandmortyapi.com/api/character*/}
        {/*Створити 6 персонажів*/}


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
