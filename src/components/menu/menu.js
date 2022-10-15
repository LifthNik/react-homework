import {Link} from "react-router-dom";

export default function Menu () {

    return (<div className = 'Menu'>

            <div><Link to={'/'}/>Menu</div>
            <div><Link to={'users'}/>Users</div>
            <div><Link to={'posts'}/>Posts</div>
            <div><Link to={'comments'}/>Comments</div>
        </div>
    );
};

export {Menu}