import {Outlet} from "react-router-dom";

import Comments from "../components/comments/comments";

export default function CommentPAge () {

    return (<div className = 'commentPAge'>

            <Outlet/>
            <Comments/>

        </div>
    );
};