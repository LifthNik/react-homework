import './App.css';
import {Routes, Route} from 'react-router-dom'

import Main from "./components/mainPage/menu";
import AlbumPage from "./pages/AlbumPage";
import TodoPage from "./pages/TodoPage";
import CommentPAge from "./pages/CommentPAge";
import Posts from "./components/posts/posts";



function App() {

return (

    <div className="App">

<Routes>
    <Route path={'/'} element={<Main/>}>
        <Route path={'todos'} element={<TodoPage/>}/>

        <Route path={'albums'} element={<AlbumPage/>}/>

        <Route path={'comments'} element={<CommentPAge/>}>
            <Route path={':postId'} element={<Posts/>}/>

        </Route>

    </Route>
</Routes>


    </div>
  );
}

export default App;
