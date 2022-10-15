const UserDetails = ({user}) => {

    console.log(1);

    return (

        <div className = 'UserDetails'>
            {user.id}

            <h2>{user.name}</h2>

        </div>

    )
}

export {UserDetails};