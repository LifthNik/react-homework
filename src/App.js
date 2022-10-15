import {Route, Routes} from "react-router-dom";
import './App.css';


import MainPage from "./pages/mainPage";
import UsersPage from "./pages/usersPage";
import UserPage from "./pages/userPage";
import PostsPage from "./pages/postsPage";
import CommentsPage from "./pages/commentsPage";

let App = () => {

    return (

        <Routes>
          <Route path={'/'} element={<MainPage/>}>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'user/:id'} element={<UserPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>

          </Route>


          </Routes>
    )
}

export {App};