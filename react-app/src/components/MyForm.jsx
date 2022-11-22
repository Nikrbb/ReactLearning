import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            isAcceptedRules: false,
        }
        this.state = {
            form: this.initialState,
            payload: this.initialState,
            isSubmitted: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            payload: { ...this.state.form },
            isSubmitted: true,
            form: this.initialState,
        })
    }
    handleInput = (e) => {
        if (e.target.id === "isAcceptedRules") {
            this.setState({ form: { ...this.state.form, [e.target.id]: e.target.checked } })
        } else {
            this.setState({ form: { ...this.state.form, [e.target.id]: e.target.value } })
        }
    };

    rollback = () => {
        this.setState({
            form: { ...this.state.payload },
            isSubmitted: false,
            payload: this.initialState,
        })
    }
    submitInformation = () => {
        if (!this.state.isSubmitted) return null;
        return (
            <article className="ms-auto">
                <table className="table">
                    <tbody>
                    { Object.keys(this.state.form).map(type => {
                        if (!this.state.payload[type]) return null
                        return (
                            <tr key={type}>
                                <td>{type === "isAcceptedRules" ? "Rules accepted" : type}</td>
                                <td>{this.state.payload[type]}</td>
                            </tr>
                        )
                    }) }
                    </tbody>
                </table>
                <button onClick={this.rollback} type="button" className="btn btn-primary">Back</button>
            </article>
        )
    }
    render() {
        return <div className="d-flex gap-5 justify-content-start align-items-center" style={{minWidth: "400px", width: "fit-content", margin: "100px auto 0"}}>
            <form onSubmit={this.handleSubmit} name="myForm">
                <div className="mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input onChange={this.handleInput}
                           value={this.state.form.email}
                           type="email"
                           name="email"
                           className="form-control"
                           id="email"
                           placeholder="Email"/>
                </div>

                <div className="form-group ">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input onChange={this.handleInput}
                           value={this.state.form.password}
                           className="form-control"
                           type="password" name="password" id="password"
                           placeholder="Password"/>
                </div>

                <div className=" mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea onChange={this.handleInput}
                              value={this.state.form.address}
                              className="form-control"
                              name="address" id="address" placeholder="1234 Main St"/>
                </div>

                <div className=" mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input onChange={this.handleInput}
                           className="form-control"
                           value={this.state.form.city}
                           type="text" name="city" id="city"/>
                </div>

                <div className=" mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select onChange={this.handleInput}
                            className="form-control"
                            value={this.state.form.country}
                            id="country" name="country">
                        <option>Choose</option>
                        <option value="uruguay">Uruguay</option>
                        <option value="parussia">pidoRussia</option>
                        <option value="china">China</option>
                    </select>
                </div>

                <div className=" mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="isAcceptedRules">
                            <input onChange={this.handleInput}
                                   className="form-check-input"
                                   checked={this.state.form.isAcceptedRules}
                                   id="isAcceptedRules" type="checkbox" name="acceptRules"/>
                            Accept Rules
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            { this.submitInformation() }
        </div>
    }
}
export default MyForm