import {Link} from "react-router-dom";

export default function Menu () {

    return (
        <div className='menu'>

            <div className='linkDiv'>
                <Link to={'/'} className='linkButton'>Menu</Link>
            </div>

            <div className='linkDiv'>
                <Link to={'users'} className='linkButton'>Users</Link>
            </div>

            <div className='linkDiv'>
                <Link to={'posts'} className='linkButton'>Posts</Link>
            </div>

            <div className='linkDiv'>
                <Link to={'comments'} className='linkButton'>Comments</Link>
            </div>

        </div>
    );
};

export {Menu}