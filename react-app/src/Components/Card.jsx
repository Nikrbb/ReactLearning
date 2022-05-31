import React from "react";

function TitleText (props) {
    return !props ? null :
                props.title ?
                    <h4 className="card-title">{props.title}</h4> :
                    <p className="card-text">{props.text}</p>
}
TitleText()
class Card extends React.Component {

    render() {
        const { title, text } = this.props;
        return  <>
                    <div className="card">
                        <div className="card-body">
                            <TitleText title={title}/>
                            <TitleText text={text} />
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