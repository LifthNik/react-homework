export default function Simpson (props) {

    let {name, img, description} = props;

    return (

        <div className ='simpsonCard'>

            <h2>{name}</h2>
            <img src = {img} alt={name}/>
            <p>{description}</p>

        </div>
    );
}