export default function Rocket (props) {

    let {rocket} = props;

    return(

        <div className='rocketCard'>
        <h4>{rocket.mission_name}</h4>
        <h3>{rocket.launch_year}</h3>
            <img src={rocket.links?.mission_patch_small} alt={rocket.mission_name}/>

        </div>
    )

}