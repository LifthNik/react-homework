let Info = ({user}) => {

    return (
        <div className='infoBox'>

            <h2>User Info:</h2>

            <br/>
            User Name: {JSON.stringify(user.username)}<br/>
            Email: {JSON.stringify(user.email)}<br/>
            Phone: {JSON.stringify(user.phone)}<br/>
            Website: {JSON.stringify(user.website)}<br/>

            <br/>
            <br/>

            Address:
            <br/>
            City: {JSON.stringify(user.address?.city)} <br/>
            Zip-code: {JSON.stringify(user.address?.zipcode)} <br/>
            Street: {JSON.stringify(user.address?.street)} <br/>
            Suite: {JSON.stringify(user.address?.suite)} <br/>
            Geo: LAT:{JSON.stringify(user.address?.geo?.lat)},
            LNG: {JSON.stringify(user.address?.geo?.lng)}<br/>

            <br/>
            <br/>

            Company:
            <br/>
            Name: {JSON.stringify(user.company?.name)}<br/>
            Catch Phrase: {JSON.stringify(user.company?.catchPhrase)}<br/>
            BS: {JSON.stringify(user.company?.bs)}<br/>

        </div>
            )
};

export {Info};