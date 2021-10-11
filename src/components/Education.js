import React, { useState } from 'react';

function Education() {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    const addSchool = () => {
        const addData = [...data];
        addData.push({
            school: document.querySelector('#add_school').value,
            field: document.querySelector('#add_field').value,
            graduated: document.querySelector('#add_graduated').value,
        });
        setData(addData);
        document.querySelector('#add_school').value = '';
        document.querySelector('#add_field').value = '';
        document.querySelector('#add_graduated').value = '';
    }

    const deleteSchool = (ind) => {
        const deleteData = [...data];
        deleteData.splice(ind, 1);
        setData(deleteData);
    }

    const handleChange = (event, ind, inputField) => {
        const changeData = [...data];
        if (inputField === 'school') changeData[ind].school = event.target.value;
        if (inputField === 'field') changeData[ind].field = event.target.value;
        if (inputField === 'graduated') changeData[ind].graduated = event.target.value;
        setData(changeData);
    }

    let button;
    let educationList;
    let addSchoolForm;
    if (edit) {
        button = <button onClick={() => handleEdit()}>Save</button>
        educationList = data.map((item, ind) => 
            <li key={ind}>
                <label>School: <input type='text' value={item.school} onChange={(event) => handleChange(event, ind, 'school')} /></label>
                <label>Field Of Study: <input type='text' value={item.field} onChange={(event) => handleChange(event, ind, 'field')} /></label>
                <label>Graduated: <input type='date' value={item.graduated} onChange={(event) => handleChange(event, ind, 'graduated')} /></label>
                <button onClick={() => deleteSchool(ind)}>Delete</button>
            </li>
        )
        addSchoolForm = <div>
                <label>School: <input type='text' id='add_school'/></label>
                <label>Field Of Study: <input type='text' id='add_field' /></label>
                <label>Graduated: <input type='date' id='add_graduated' /></label>
                <button onClick={() => addSchool()}>Add</button>
            </div>;
    } else {
        button = <button onClick={() => handleEdit()}>Edit</button>
        educationList = data.map((item, ind) => 
            <li key={ind}>
                <p>{item.school}</p>
                <p>{item.field}</p>
                <p>{item.graduated}</p>
            </li>
        );
        addSchoolForm = null;
    }
    return (
        <div className='Education'>
            <h2>Education</h2>
            {button}
            <ul>{educationList}</ul>
            {addSchoolForm}
        </div>
    )
}

export default Education;