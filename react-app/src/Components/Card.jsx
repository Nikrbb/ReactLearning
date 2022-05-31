import React from "react";

class Card extends React.Component {
    TitleText (props) {
        return !props ? null :
            props.title ?
                <h4 className="card-title">{props.title}</h4> :
                <p className="card-text">{props.text}</p>
    }
    render() {
        const { title, text } = this.props;
        return  <>
                    <div className="card">
                        <div className="card-body">
                            <this.TitleText title={title}/>
                            <this.TitleText text={text} />
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