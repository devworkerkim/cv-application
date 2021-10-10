import React from "react";

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.addJob = this.addJob.bind(this);
        this.editJob = this.editJob.bind(this);
        this.changeCompany = this.changeCompany.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeTasks = this.changeTasks.bind(this);
        this.changeStarted = this.changeStarted.bind(this);
        this.changeEnded = this.changeEnded.bind(this);
        this.saveJob = this.saveJob.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
    }

    addJob() {
        let experienceData = this.state.data;
        experienceData.push({
            company: document.querySelector('#company').value,
            title: document.querySelector('#title').value,
            tasks: document.querySelector('#tasks').value,
            started: document.querySelector('#started').value,
            ended: document.querySelector('#ended').value,
            edit: false
        });
        this.setState({data: experienceData});
        document.querySelector('#company').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#tasks').value = '';
        document.querySelector('#started').value = '';
        document.querySelector('#ended').value = '';
    }

    editJob(event) {
        let experienceData = this.state.data;
        experienceData[parseInt(event.target.parentElement.id.slice(3))].edit = true;
        this.setState({data: experienceData});
    }

    changeCompany(event) {
        let experienceData = this.state.data;
        experienceData[parseInt(event.target.parentElement.parentElement.id.slice(3))].company = event.target.value;
        this.setState({data: experienceData});
    }
    changeTitle(event) {
        let experienceData = this.state.data;
        experienceData[parseInt(event.target.parentElement.parentElement.id.slice(3))].title = event.target.value;
        this.setState({data: experienceData});
    }
    changeTasks(event) {
        let experienceData = this.state.data;
        experienceData[parseInt(event.target.parentElement.parentElement.id.slice(3))].tasks = event.target.value;
        this.setState({data: experienceData});
    }
    changeStarted(event) {
        let experienceData = this.state.data;
        experienceData[parseInt(event.target.parentElement.parentElement.id.slice(3))].started = event.target.value;
        this.setState({data: experienceData});
    }
    changeEnded(event) {
        let experienceData = this.state.data;
        experienceData[parseInt(event.target.parentElement.parentElement.id.slice(3))].ended = event.target.value;
        this.setState({data: experienceData});
    }

    saveJob(event) {
        let experienceData = this.state.data;
        experienceData[parseInt(event.target.parentElement.id.slice(3))].edit = false;
        this.setState({data: experienceData});
    }

    deleteJob(event) {
        let experienceData = this.state.data;
        experienceData.splice(parseInt(event.target.parentElement.id.slice(3)), 1);
        this.setState({data: experienceData});
    }

    render() {
        let experienceData = this.state.data;
        experienceData = this.state.data.map((job, ind) => {
            if (job.edit) {
                return <li key={ind} id={'job' + ind}>
                    <label>Company: <input type="text" value={job.company} onChange={this.changeCompany} /></label>
                    <label>Position Title: <input type="text" value={job.title} onChange={this.changeTitle} /></label>
                    <label>Main Tasks: <textarea value={job.tasks} onChange={this.changeTasks} /></label>
                    <label>Date Started: <input type="date" value={job.started} onChange={this.changeStarted} /></label>
                    <label>Date Ended: <input type="date" value={job.ended} onChange={this.changeEnded} /></label>
                    <button onClick={this.saveJob}>Save</button>
                    <button onClick={this.deleteJob}>Delete</button>
                </li>
            }
            else {
                return <li key={ind} id={'job' + ind}>
                    <p>Company: {job.company}</p>
                    <p>Position Title: {job.title}</p>
                    <p>Main Tasks: {job.tasks}</p>
                    <p>Date Started: {job.started}</p>
                    <p>Date Ended: {job.ended}</p>
                    <button onClick={this.editJob}>Edit</button>
                    <button onClick={this.deleteJob}>Delete</button>
                </li>
            }
        });
        return (
            <div className="Experience">
                <h2>Job Experience</h2>
                <ul>
                    {experienceData}
                </ul>
                <div>
                    <label>Company: <input type="text" id="company" /></label>
                    <label>Position Title: <input type="text" id="title" /></label>
                    <label>Main Tasks: <textarea id="tasks" /></label>
                    <label>Date Started: <input type="date" id="started" /></label>
                    <label>Date Ended: <input type="date" id="ended" /></label>
                    <button onClick={this.addJob}>Add</button>
                </div>
            </div>
        )
    }
}

export default Experience;