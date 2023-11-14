import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Userlisting from './components/Userlisting'
import AddUserlist from './components/AddUserlist'
import UpdateUser from './components/UpdateUser'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import Store from './Redux/store';



const App = () => {
  return (
    <div className='App'>
      <Provider store={Store} >
        <BrowserRouter>
          <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>

          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Userlisting />} />
            <Route path="/user/add" element={<AddUserlist />} />
            <Route path="/user/edit/:code" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toast-position"
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        ></ToastContainer>

      </Provider>
    </div>
  )
}

export default App
