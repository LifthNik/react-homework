export default function User ({user}) {

    return (<div className='user' id={user.id}>

    <h3>{user.id} - {user.name}</h3>
        </div>
    );
}