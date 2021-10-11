import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.addSchool = this.addSchool.bind(this);
        this.deleteSchool = this.deleteSchool.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {data: [], edit: false};
    }

    handleEdit() {
        this.setState({edit: !this.state.edit});
    }

    addSchool() {
        const data = this.state.data;
        data.push({
            school: document.querySelector('#add_school').value,
            field: document.querySelector('#add_field').value,
            graduated: document.querySelector('#add_graduated').value,
        });
        this.setState({data: data});
        document.querySelector('#add_school').value = '';
        document.querySelector('#add_field').value = '';
        document.querySelector('#add_graduated').value = '';
    }

    deleteSchool(ind) {
        const data = this.state.data;
        data.splice(ind, 1);
        this.setState({data: data});
    }

    handleChange(event, ind, inputField) {
        const data = this.state.data;
        if (inputField === 'school') data[ind].school = event.target.value;
        if (inputField === 'field') data[ind].field = event.target.value;
        if (inputField === 'graduated') data[ind].graduated = event.target.value;
        this.setState({data: data});
    }

    render() {
        let button;
        let educationList;
        let addSchool;
        if (this.state.edit) {
            button = <button onClick={this.handleEdit}>Save</button>
            educationList = this.state.data.map((item, ind) => 
                <li key={ind}>
                    <label>School: <input type='text' value={item.school} onChange={(event) => this.handleChange(event, ind, 'school')} /></label>
                    <label>Field Of Study: <input type='text' value={item.field} onChange={(event) => this.handleChange(event, ind, 'field')} /></label>
                    <label>Graduated: <input type='date' value={item.graduated} onChange={(event) => this.handleChange(event, ind, 'graduated')} /></label>
                    <button onClick={() => this.deleteSchool(ind)}>Delete</button>
                </li>
            )
            addSchool = <div>
                    <label>School: <input type='text' id='add_school'/></label>
                    <label>Field Of Study: <input type='text' id='add_field' /></label>
                    <label>Graduated: <input type='date' id='add_graduated' /></label>
                    <button onClick={() => this.addSchool()}>Add</button>
                </div>;
        } else {
            button = <button onClick={this.handleEdit}>Edit</button>
            educationList = this.state.data.map((item, ind) => 
                <li key={ind}>
                    <p>{item.school}</p>
                    <p>{item.field}</p>
                    <p>{item.graduated}</p>
                </li>
            );
            addSchool = null;
        }
        return (
            <div className='Education'>
                <h2>Education</h2>
                {button}
                <ul>{educationList}</ul>
                {addSchool}
            </div>
        )
    }
}
export default Education;