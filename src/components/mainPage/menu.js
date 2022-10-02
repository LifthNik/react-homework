import {Link, Outlet} from "react-router-dom"
import {urls} from "../../config";

export default function Main() {

    return (<div className='MainPage'>

            <div className="links">
                <Link to={'/'}>Home Page</Link>
                <Link to={urls.todos}>Todos</Link>
                <Link to={urls.albums}>Albums</Link>
                <Link to={urls.comments}>Comments</Link>
            </div>
            <Outlet/>

        </div>
    );
};