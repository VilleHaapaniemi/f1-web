const standingList = (props) => {

    return (
        <tr key={props.index}>
            <td>{props.lname}</td>
            <td>{props.team}</td>
            <td>{props.points}</td>
        </tr>
    )
}

export default standingList;