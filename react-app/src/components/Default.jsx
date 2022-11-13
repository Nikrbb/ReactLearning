import React from "react";
import { Alert } from "react-bootstrap";

class Default extends React.Component {
    render() {
        return <React.Fragment>
            <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                <Alert variant="primary" className="py-3 px-5">
                    Default component
                </Alert>
            </div>
        </React.Fragment>
    }
}

export default Default