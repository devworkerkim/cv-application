import React, { useState } from 'react';

function Info() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    const handleChange = (event, inputField) => {
        if (inputField === 'name') setName(event.target.value);
        if (inputField === 'email') setEmail(event.target.value);
        if (inputField === 'phone') setPhone(event.target.value);
    }

    let infoButton;
    let info;
    if (edit) {
        info = <div>
                <label>Name: <input type='text' value={name} onChange={(event) => handleChange(event, 'name')} /></label>
                <label>Email: <input type='email' value={email} onChange={(event) => handleChange(event, 'email')} /></label>
                <label>Phone: <input type='tel' value={phone} onChange={(event) => handleChange(event, 'phone')} /></label>
            </div>
        infoButton = <button onClick={() => handleEdit()}>Save</button>
    }
    else {
        info = <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
        infoButton = <button onClick={() => handleEdit()}>Edit</button>
    }
    
    return (
        <div className='Info'>
            <h2>Info</h2>
            {infoButton}
            {info}
        </div>
    )    
}

export default Info;