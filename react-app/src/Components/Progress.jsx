import React from "react";

class Progress extends React.Component {
    constructor(props) {
        super(props);
        const { percentage } = this.props
        this.style = {
            width: percentage + "%"
        }
    }

    render() {
        return (
            <>
                <div className="progress mt-5">
                    <div className="progress-bar" role="progressbar" aria-valuenow={ this.percentage } aria-valuemin="0"
                         aria-valuemax="100" aria-label="progressbar" style={ this.style }>
                    </div>
                </div>
            </>
        )
    }
}

export default Progress