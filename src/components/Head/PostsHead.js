import {useSelector} from "react-redux";

export default function PostsHead () {

    let {onePost} = useSelector(state => state.postReducer);

    return (<div className = 'PostsHead'>
            {onePost && onePost.title}
        </div>
    );
};

export {PostsHead}