import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

export default function Post ({post}) {

    let dispatch = useDispatch();

    return (<div className='User'>

            <p>id:{post.id}</p>
            <p>title:{post.title}</p>

            <button onClick={() => dispatch(postActions.setOnePost(post))}>
                Set Post
            </button>

        </div>
    );
};

export {Post}