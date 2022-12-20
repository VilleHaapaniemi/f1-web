const ResultList = (props) => {
        
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td>{props.driver}</td>
            <td>0</td>
        </tr>
    )
}
export default ResultList;