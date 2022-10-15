import {Route, Routes} from "react-router-dom";
import './App.css';


import MainPage from "./pages/mainPage";
import UsersPage from "./pages/usersPage";
import OneUserPage from "./pages/oneUserPage";
import PostsPage from "./pages/postsPage";
import CommentsPage from "./pages/commentsPage";

let App = () => {

    return (

        <Routes>
          <Route path={'/'} element={<MainPage/>}>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'users/:id'} element={<OneUserPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>

          </Route>


          </Routes>
    )
}

export {App};