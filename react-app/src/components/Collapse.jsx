import React from "react";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: props.opened,
        }
    }
    render() {
        return <>
            <div>
                <button className="btn btn-primary"
                        onClick={ () => { this.setState({ isShown: !this.state.isShown }) } }
                        data-bs-toggle="collapse"
                        type="button"
                        aria-expanded={this.state.isShown}
                        aria-controls="collapseExample">
                    collapse from homework</button>
            </div>
            <div className={"collapse" + (this.state.isShown ? " show" : "")}>
                <div className="card card-body">
                    { this.props.text }
                </div>
            </div>
        </>
    }
}
Collapse.defaultProps = {
    opened: true,
    text: "default text to collapse"
}
export default Collapse