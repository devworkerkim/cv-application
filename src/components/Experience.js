import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.addJob = this.addJob.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {data: [], edit: false};
    }

    handleEdit() {
        this.setState({edit: !this.state.edit});
    }

    addJob() {
        const data = this.state.data;
        data.push({
            company: document.querySelector('#add_company').value,
            title: document.querySelector('#add_title').value,
            tasks: document.querySelector('#add_tasks').value,
            started: document.querySelector('#add_started').value,
            ended: document.querySelector('#add_ended').value,
        });
        this.setState({data: data});
        document.querySelector('#add_company').value = '';
        document.querySelector('#add_title').value = '';
        document.querySelector('#add_tasks').value = '';
        document.querySelector('#add_started').value = '';
        document.querySelector('#add_ended').value = '';
    }

    deleteJob(ind) {
        const data = this.state.data;
        data.splice(ind, 1);
        this.setState({data: data});
    }

    handleChange(event, ind, inputField) {
        const data = this.state.data;
        if (inputField === 'company') data[ind].company = event.target.value;
        if (inputField === 'title') data[ind].title = event.target.value;
        if (inputField === 'tasks') data[ind].tasks = event.target.value;
        if (inputField === 'started') data[ind].started = event.target.value;
        if (inputField === 'ended') data[ind].ended = event.target.value;
        this.setState({data: data});
    }

    render() {
        let button;
        let jobList;
        let addJob;
        if (this.state.edit) {
            button = <button onClick={this.handleEdit}>Save</button>
            jobList = this.state.data.map((item, ind) => 
                <li key={ind}>
                    <label>Company: <input type='text' value={item.company} onChange={(event) => this.handleChange(event, ind, 'company')} /></label>
                    <label>Position Title: <input type='text' value={item.title} onChange={(event) => this.handleChange(event, ind, 'title')} /></label>
                    <label>Main Tasks: <textarea value={item.tasks} onChange={(event) => this.handleChange(event, ind, 'tasks')} /></label>
                    <label>Date Started: <input type='date' value={item.started} onChange={(event) => this.handleChange(event, ind, 'started')} /></label>
                    <label>Date Started: <input type='date' value={item.ended} onChange={(event) => this.handleChange(event, ind, 'ended')} /></label>
                    <button onClick={() => this.deleteJob(ind)}>Delete</button>
                </li>
            )
            addJob = <div>
                    <label>Company: <input type='text' id='add_company' /></label>
                    <label>Position Title: <input type='text' id='add_title' /></label>
                    <label>Main Tasks: <textarea id='add_tasks' /></label>
                    <label>Date Started: <input type='date' id='add_started' /></label>
                    <label>Date Started: <input type='date' id='add_ended' /></label>
                    <button onClick={() => this.addJob()}>Add</button>
                </div>;
        } else {
            button = <button onClick={this.handleEdit}>Edit</button>
            jobList = this.state.data.map((item, ind) => 
                <li key={ind}>
                    <p>{item.company}</p>
                    <p>{item.title}</p>
                    <p>{item.tasks}</p>
                    <p>{item.started}</p>
                    <p>{item.ended}</p>
                </li>
            );
            addJob = null;
        }
        return (
            <div className='Experience'>
                <h2>Job Experience</h2>
                {button}
                <ul>{jobList}</ul>
                {addJob}
            </div>
        )
    }
}

export default Experience;