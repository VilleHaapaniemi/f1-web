const ResultList = (props) => {
    console.log(props.result);
    return (
        props.result.map((position) => (
            <p>{position}</p>
        ))
    )
}
export default ResultList;