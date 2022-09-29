import './App.css';
import {Route, Routes} from 'react-router-dom'

import Menu from "./components/mainPage/menu";
import Todos from "./components/todos/todos";
import Albums from "./components/albums/albums";
import Comments from "./components/comments/comments";

function App() {
  return (
    <div className="App">


<Routes>
    <Route part={'/'} element={<Menu/>}>
        <Route path={'todos'} element={<Todos/>}/>
        <Route path={'albums'} element={<Albums/>}/>
        <Route path={'Comments'} element={<Comments/>}/>
    </Route>
</Routes>


    </div>
  );
}

export default App;
