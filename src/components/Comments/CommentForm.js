import {useForm} from "react-hook-form";
import {commentsGet} from "../../services";

export function CommentForm ({setComments}) {

    let {register, handleSubmit} = useForm({
        defaultValues: {
            name: "name",
            email: "email",
            body: "body"
        }
    });


    let addComment = (newComment) => {
        commentsGet.newComment(newComment).then(({data}) => setComments(comment => [...comment,data]))
    }


    return (<div>

            <form onSubmit={handleSubmit(addComment)}>

                <input type="text"{...register('name')}/>
                <input type="text"{...register('email')}/>
                <input type="text"{...register('body')}/>

                <button>ADD</button>

            </form>

        </div>
    );
}