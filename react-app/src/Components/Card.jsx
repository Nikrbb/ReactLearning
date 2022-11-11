import React from "react";

class Card extends React.Component {
    render() {
        const { title, text } = this.props;
        return  <>
                    <div className="card">
                        <div className="card-body">
                            {<h4 className="card-title">{ title }</h4> ?? null}
                            {<p className="card-text">{ text }</p> ?? null}
                        </div>
                    </div>
                </>
    }
}
Card.defaultProps = {
    title: null,
    text: null
};
export default Card