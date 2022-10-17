import './App.css';

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserHead from "./components/Head/Head";
import PostsHead from "./components/Head/PostsHead";

function App() {
  return (
      <div className="App">

          <div className='usersPart'>
              <UserHead/>
              <Users/>
          </div>


          <div className='postsPart'>
              <PostsHead/>
              <Posts/>
          </div>

      </div>
  );
}

export default App;
