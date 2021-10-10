import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.addEducation = this.addEducation.bind(this);
        this.editEducation = this.editEducation.bind(this);
        this.saveEducation = this.saveEducation.bind(this);
        this.changeSchool = this.changeSchool.bind(this);
        this.changeField = this.changeField.bind(this);
        this.changeGraduated = this.changeGraduated.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
        this.state = {data: []};
    }

    addEducation() {
        let educationData = this.state.data;
        educationData.push({
            school: document.querySelector('#form__school').value,
            field: document.querySelector('#form__field').value,
            graduated: document.querySelector('#form__graduated').value,
            edit: false
        })
        this.setState({data: educationData});
        document.querySelector('#form__school').value = '';
        document.querySelector('#form__field').value = '';
        document.querySelector('#form__graduated').value = '';
    }

    editEducation(event) {
        let educationData = this.state.data;
        educationData[parseInt(event.target.parentElement.id.slice(6))].edit = true;
        this.setState({educationData});
    }
    
    saveEducation(event) {
        let educationData = this.state.data;
        educationData[parseInt(event.target.parentElement.id.slice(6))].edit = false;
        this.setState({educationData});

    }

    changeSchool(event) {
        let educationData = this.state.data;
        educationData[parseInt(event.target.parentElement.parentElement.id.slice(6))].school = event.target.value;
        this.setState({educationData});
    }
    
    changeField(event) {
        let educationData = this.state.data;
        educationData[parseInt(event.target.parentElement.parentElement.id.slice(6))].field = event.target.value;
        this.setState({educationData});
        
    }
    
    changeGraduated(event) {
        let educationData = this.state.data;
        educationData[parseInt(event.target.parentElement.parentElement.id.slice(6))].graduated = event.target.value;
        this.setState({educationData});

    }

    removeEducation(event) {
        let educationData = this.state.data;
        educationData.splice(parseInt(event.target.parentElement.id.slice(6)), 1);
        this.setState({data: educationData});
    }

    render() {
        const educationItems = this.state.data.map((item, ind) => {
                if (item.edit) {
                    return <li key={ind} id={'school' + ind}>
                        <label>School: <input type="text" value={item.school} onChange={this.changeSchool} /></label>
                        <label>Field Of Study: <input type="text" value={item.field} onChange={this.changeField} /></label>
                        <label>Graduated: <input type="date" value={item.graduated} onChange={this.changeGraduated} /></label>
                        <button onClick={this.saveEducation}>Save</button>
                        <button onClick={this.removeEducation}>Delete</button>
                    </li>
                }
                else {
                    return <li key={ind} id={'school' + ind}>
                        <p>{item.school}</p>
                        <p>{item.field}</p>
                        <p>{item.graduated}</p>
                        <button onClick={this.editEducation}>Edit</button>
                        <button onClick={this.removeEducation}>Delete</button>
                    </li>
                }
            }
        )
        return (
            <div className="Education">
                <h2>Education</h2>
                <ul>
                    {educationItems}
                </ul>
                <div>
                    <label>School: <input type="text" id="form__school" /></label>
                    <label>Field Of Study: <input type="text" id="form__field" /></label>
                    <label>Graduated: <input type="date" id="form__graduated" /></label>
                    <button onClick={this.addEducation}>Add</button>
                </div>
            </div>
        )
    }
}

export default Education;