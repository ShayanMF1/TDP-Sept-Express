cont ComponentWithProps = (props) => {
    return(
        <>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <p>{props.number}</p>
        <p>{props.nonexistent}</p>   
        </>
    )
}

export default ComponentWithProps;
