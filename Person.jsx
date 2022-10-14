function Person(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>    
    )
}

export default Person;