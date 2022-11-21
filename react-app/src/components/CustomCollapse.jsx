import React from "react";
import { Button } from "react-bootstrap";
import { Collapse  as BootstrapCollapse } from 'react-bootstrap';

class CustomCollapse extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.opened,
        }
    }
    render() {
        return <>
            <Button
                onClick={ () => this.setState({ isOpen: !this.state.isOpen }) }
                aria-controls="example-collapse-text"
                aria-expanded={ this.state.isOpen }
            >
                my own collapse
            </Button>
            <BootstrapCollapse in={ this.state.isOpen }>
                <div id="example-collapse-text">
                    { this.props.text }
                </div>
            </BootstrapCollapse>
        </>
    }
}
CustomCollapse.defaulProps = {
    opened: true,
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n" +
        "                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n" +
        "                    labore wes anderson cred nesciunt sapiente ea proident."
}
export default CustomCollapse