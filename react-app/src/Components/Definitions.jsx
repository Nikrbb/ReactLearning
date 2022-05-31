import React from "react";
class Definitions extends React.Component {
    renderList() {
        const { data } = this.props
        return data.map(item => {
            return <>
                <dt key={item.id}>{item.dt}</dt>
                <dd>{item.dd}</dd>
            </>
        })
    }
    render() {
        return <dl>{this.renderList()}</dl>
    }
}

export default Definitions;