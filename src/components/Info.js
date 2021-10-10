import React from "react"

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'John Doe', email: "john@johndoe.com", phone: "(555) 555-3434", edit: false};
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.editInfo = this.editInfo.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
    }

    changeName (event) {
        this.setState({name: event.target.value})
    }
    changeEmail (event) {
        this.setState({email: event.target.value})
    }
    changePhone (event) {
        this.setState({phone: event.target.value})
    }

    editInfo () {
    this.setState({edit: true});
    }
    saveInfo () {
    this.setState({edit: false});
    }

    render () {
        let infoButton;
        let info;
        if (this.state.edit) {
            info = <div>
                    <label>Name: <input type="text" value={this.state.name} onChange={this.changeName} id="name" /></label>
                    <label>Email: <input type="email" value={this.state.email} onChange={this.changeEmail} id="email" /></label>
                    <label>Phone: <input type="tel" value={this.state.phone} onChange={this.changePhone} id="phone" /></label>
                </div>
            infoButton = <button onClick={this.saveInfo}>Save</button>
        }
        else {
            info = <div>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
            </div>
            infoButton = <button onClick={this.editInfo}>Edit</button>
        }
        
        return (
            <div className="Info">
                <h2>Info</h2>
                {info}
                {infoButton}
            </div>
        )
    }
}

export default Info;