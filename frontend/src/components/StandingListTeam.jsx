const StandingListTeam = (props) => {

    return (
        <tr key={props.index}>
            <td>{props.team}</td>
            <td>{props.points}</td>
        </tr>
    )
}

export default StandingListTeam;