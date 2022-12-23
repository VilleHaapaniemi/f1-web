const ResultList = (props) => {

    const pointsReceived = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
        
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td>{props.driver}</td>
            { props.index + 1 <= pointsReceived.length ? <td> {pointsReceived[props.index]} </td> : <td>0</td>}
        </tr>
    )
}
export default ResultList;