import React from "react";
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImage: 0,
        }
    };
    changeImage = (side) => {
        if (side === "prev") {
            this.state.activeImage ?
                this.setState({activeImage: this.state.activeImage - 1}) :
                this.setState({activeImage: this.props.images.length - 1})
        } else if (side === "next" && this.props.images[this.state.activeImage + 1]) {
            this.setState({activeImage: this.state.activeImage + 1})
        } else {
            this.setState({activeImage: 0})
        }
    };
    render() {
        const { images } = this.props;
        return <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {images.map((item, index) =>
                        <div className={"carousel-item" + (index === this.state.activeImage ? " active" : "")} key={index}>
                            <img alt="First Slide" className="d-block w-100" src={ item }/>
                        </div>
                    )}
                </div>
                <button className="carousel-control-prev"
                        onClick={() => this.changeImage("prev")}
                        data-bs-target="#carousel"
                        type="button"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next"
                        onClick={() => this.changeImage("next")}
                        data-bs-target="#carousel"
                        type="button"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    }
}

export default Carousel