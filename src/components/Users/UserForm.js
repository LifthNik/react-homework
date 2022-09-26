import {useForm} from "react-hook-form";
import {usersGet} from "../../services";

export default function UserForm ({setUsers}) {

    let {register, handleSubmit} = useForm({

        defaultValues: {
            name: 'name',
            email: 'email'
        },
    });

    let addUser = (newUser) => {
        usersGet.addUser(newUser).then(({data}) => setUsers(users => [...users, data]))
    }
    return (<div>

            <form onSubmit={handleSubmit(addUser)}>

                <input type="text" {...register('name')}/>
                <input type="text" {...register('email')}/>

                <button>ADD</button>

            </form>

        </div>
    );
}