import React from 'react';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {name: '', email: '', phone: '', edit: false};
    }

    handleEdit() {
        this.setState({edit: !this.state.edit});
    }
    handleChange(event, inputField) {
        if (inputField === 'name') this.setState({name: event.target.value});
        if (inputField === 'email') this.setState({email: event.target.value});
        if (inputField === 'phone') this.setState({phone: event.target.value});
    } 

    render () {
        let infoButton;
        let info;
        if (this.state.edit) {
            info = <div>
                    <label>Name: <input type='text' value={this.state.name} onChange={(event) => this.handleChange(event, 'name')} /></label>
                    <label>Email: <input type='email' value={this.state.email} onChange={(event) => this.handleChange(event, 'email')} /></label>
                    <label>Phone: <input type='tel' value={this.state.phone} onChange={(event) => this.handleChange(event, 'phone')} /></label>
                </div>
            infoButton = <button onClick={() => this.handleEdit()}>Save</button>
        }
        else {
            info = <div>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
            </div>
            infoButton = <button onClick={() => this.handleEdit()}>Edit</button>
        }
        
        return (
            <div className='Info'>
                <h2>Info</h2>
                {infoButton}
                {info}
            </div>
        )
    }
}

export default Info;