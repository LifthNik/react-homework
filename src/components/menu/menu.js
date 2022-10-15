import {Link} from "react-router-dom";

export default function Menu () {

    return (
        <div className='menu'>

            <div className='linkButton'>
                <Link to={'/'}>Menu</Link>
            </div>

            <div className='linkButton'>
                <Link to={'users'}>Users</Link>
            </div>

            <div className='linkButton'>
                <Link to={'posts'}>Posts</Link>
            </div>

            <div className='linkButton'>
                <Link to={'comments'}>Comments</Link>
            </div>

        </div>
    );
};

export {Menu}