export default function Simpson (props) {

    let {simpson} = props;

    return (<div className = 'simpsonCard'>

            <h2>{simpson.name}</h2>
            <img src={simpson.img} alt={simpson.name}/>
            <p>{simpson.description}</p>

        </div>
    );
};

export {Simpson}