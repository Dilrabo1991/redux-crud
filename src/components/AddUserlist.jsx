import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddUserlist = () => {
    const [name, nameChenge] = useState('');
    const [email, emailChenge] = useState('');
    const [phone, phoneChenge] = useState('');
    const [role, roleChenge] = useState('staff');

    const hendleSubmit = (e) => {
        e.preventDefault();
        const userobj = { name, email, phone, role };
        console.log(userobj);
    }

    return (
        <div className='card'>
            <form onSubmit={hendleSubmit}>
                <div className='card-header' style={{ textAlign: 'left' }}>
                    <h2>Add User</h2>
                </div>
                <div className='card-body' style={{ textAlign: 'left' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <label>Name</label>
                            <input value={name} onChange={e => nameChenge(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <label>Email</label>
                            <input value={email} onChange={e => emailChenge(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <label>Phone</label>
                            <input value={phone} onChange={e => phoneChenge(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <label>Role</label>
                            <select value={role} onChange={e => roleChenge(e.target.value)} className="form-control">
                                <option value='admin'>Admin</option>
                                <option value="staff">Staff</option>

                            </select>
                        </div>
                    </div>
                </div>

                <div className='card-footer' style={{ textAlign: 'left' }}>
                    <botton className="btn btn-primary" type="submit">Submit</botton>
                    <Link className='btn btn-danger' to={"/user"}>Back</Link>
                </div>
            </form>
        </div>
    )
}

export default AddUserlist
