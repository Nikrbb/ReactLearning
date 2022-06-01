import React from "react";
class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            right: false,
            left: false,
            rightStyle: "",
            leftStyle: ""
        }
    }
    changeEvent = (e) => {
        e.target.getAttribute("id") === "right" ?
            this.setState({ left: true, rightStyle: " active"}) :
            this.setState({ right: true, leftStyle: " active"})
    }
    render() {
        return (
            <>
                 <div className="container d-flex mt-5 btn-group" role="group" aria-label="Basic mixed styles example">
                    <button disabled={this.state.left} onClick={this.changeEvent} id="left" type="button" className={"btn btn-warning" + this.state.leftStyle}>Left</button>
                    <button disabled={this.state.right} onClick={this.changeEvent} id="right" type="button" className={"btn btn-primary" + this.state.rightStyle}>Right</button>
                </div>
            </>
        )
    }
}

export default BtnGroup