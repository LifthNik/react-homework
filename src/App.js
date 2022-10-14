import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getComments, getPosts, getUsers} from "./services";

function App() {

  let users = useSelector(state => state.userReducer);
  let posts = useSelector(state => state.postReducer);
  let comments = useSelector(state => state.commentReducer);

  console.log(users);
  console.log(posts);
  console.log(comments);

  let dispatch = useDispatch();


  useEffect(() => {

    getUsers().then(value => {

      dispatch({type: 'LOAD_USERS', payload: value});

    });


  }, []);


  useEffect(() => {

    getPosts().then(value => {

      dispatch({type: 'LOAD_POSTS', payload: value});

    });


  }, []);


  useEffect(() => {

    getComments().then(value => {

      dispatch({type: 'LOAD_COMMENTS', payload: value});

    });


  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
