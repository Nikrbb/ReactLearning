function List(props) {
    const { children } = props
    return (
        <ul>{
            children.map((item, i) => {
                return <li key={i} className="list-group-item">{item}</li>
            })
        }</ul>
    )
}
export default List