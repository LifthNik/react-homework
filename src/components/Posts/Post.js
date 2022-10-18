import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

export default function Post ({post}) {

    let dispatch = useDispatch();
    return (<div className='User'>

            <div>id:{post.id}</div>

            <div>title:{post.title}</div>

            <button onClick={() => dispatch(postActions.setOnePost(post))}>
                Show Details
            </button>

        </div>
    );
};

export {Post}