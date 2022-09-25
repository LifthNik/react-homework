export default function User ({user}) {

    return (<div className='user'>

    <h3>{user.id} - {user.name}</h3>
        </div>
    );
}