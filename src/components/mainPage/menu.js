import {Link, Outlet} from "react-router-dom"
import {urls} from "../../config";

export default function Main() {

    return (<div className='MainPage'>

            <div className="links">
                <Link to={'/'} className='menuLink'>Home Page</Link>
                <Link to={urls.todos} className='menuLink'>Todos</Link>
                <Link to={urls.albums} className='menuLink'>Albums</Link>
                <Link to={urls.comments} className='menuLink'>Comments</Link>
            </div>
            <Outlet/>

        </div>
    );
};