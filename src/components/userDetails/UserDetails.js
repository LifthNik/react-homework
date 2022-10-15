const UserDetails = ({user}) => {


    return (

        <div className = 'UserDetails'>

            <h2>{user.id}.{user.name}.</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>WebSite: {user.website}</p>

        </div>

    )
}

export {UserDetails};