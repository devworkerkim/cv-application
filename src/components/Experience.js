import React, { useState } from 'react';

function Experience() {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    const addJob = () => {
        const addData = [...data];
        addData.push({
            company: document.querySelector('#add_company').value,
            title: document.querySelector('#add_title').value,
            tasks: document.querySelector('#add_tasks').value,
            started: document.querySelector('#add_started').value,
            ended: document.querySelector('#add_ended').value,
        });
        setData(addData);
        document.querySelector('#add_company').value = '';
        document.querySelector('#add_title').value = '';
        document.querySelector('#add_tasks').value = '';
        document.querySelector('#add_started').value = '';
        document.querySelector('#add_ended').value = '';
    }

    const deleteJob = (ind) => {
        const deleteData = [...data];
        deleteData.splice(ind, 1);
        setData(deleteData);
    }

    const handleChange = (event, ind, inputField) => {
        const changeData = [...data];
        if (inputField === 'company') changeData[ind].company = event.target.value;
        if (inputField === 'title') changeData[ind].title = event.target.value;
        if (inputField === 'tasks') changeData[ind].tasks = event.target.value;
        if (inputField === 'started') changeData[ind].started = event.target.value;
        if (inputField === 'ended') changeData[ind].ended = event.target.value;
        setData(changeData);
    }
    let button;
    let jobList;
    let addJobForm;
    if (edit) {
        button = <button onClick={() => handleEdit()}>Save</button>
        jobList = data.map((item, ind) => 
            <li key={ind}>
                <label>Company: <input type='text' value={item.company} onChange={(event) => handleChange(event, ind, 'company')} /></label>
                <label>Position Title: <input type='text' value={item.title} onChange={(event) => handleChange(event, ind, 'title')} /></label>
                <label>Main Tasks: <textarea value={item.tasks} onChange={(event) => handleChange(event, ind, 'tasks')} /></label>
                <label>Date Started: <input type='date' value={item.started} onChange={(event) => handleChange(event, ind, 'started')} /></label>
                <label>Date Started: <input type='date' value={item.ended} onChange={(event) => handleChange(event, ind, 'ended')} /></label>
                <button onClick={() => deleteJob(ind)}>Delete</button>
            </li>
        )
        addJobForm = <div>
                <label>Company: <input type='text' id='add_company' /></label>
                <label>Position Title: <input type='text' id='add_title' /></label>
                <label>Main Tasks: <textarea id='add_tasks' /></label>
                <label>Date Started: <input type='date' id='add_started' /></label>
                <label>Date Started: <input type='date' id='add_ended' /></label>
                <button onClick={() => addJob()}>Add</button>
            </div>;
    } else {
        button = <button onClick={() => handleEdit()}>Edit</button>
        jobList = data.map((item, ind) => 
            <li key={ind}>
                <p>{item.company}</p>
                <p>{item.title}</p>
                <p>{item.tasks}</p>
                <p>{item.started}</p>
                <p>{item.ended}</p>
            </li>
        );
        addJobForm = null;
    }
    return (
        <div className='Experience'>
            <h2>Job Experience</h2>
            {button}
            <ul>{jobList}</ul>
            {addJobForm}
        </div>
    )
}

export default Experience;