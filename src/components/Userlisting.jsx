/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { FetchUserList, Removeuser } from '../Redux/Action'
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Userlisting = (props) => {
    useEffect(() => {
        props.loaduser();

    }, []);
    const hendleDelete = (code) => {
        if (window.confirm("do you want remuve?")) {
            props.removeuser(code);
            props.loaduser();
            toast.success('User remove successfule')
        }
    }

    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :
                <div>
                    <div className='card'>
                        <div className='cart-header'>
                            <Link to={'/user/add'} className='btn btn-success'>Add User [+]</Link>
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered p-13px '>
                                <thead className='bg-black text-white  '>
                                    <td>Code</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Role</td>
                                    <td>Action</td>
                                </thead>
                                <tbody>{
                                    props.user.userlist && props.user.userlist.map(item =>
                                        <tr key={item.id} >
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.role}</td>
                                            <td>
                                                <Link to={'/user/edit/' + item.id} className='btn btn-primary'>Edit</Link>
                                                <button onClick={() => hendleDelete(item.id)} className='btn btn-danger'>Delete</button>
                                            </td>

                                        </tr>

                                    )
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting)
