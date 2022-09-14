export default function RaM(props) {

        let {id, name, status, species, gender, image} = props;

        return(

            <div className='ramCard'>

                    <h2>{id}. {name} </h2>
                        <p>Status: {status}</p>
                        <p>Species: {species}</p>
                        <p>Gender: {gender}</p>
                        <img src={image} alt={name}/>

            </div>

        )


};

