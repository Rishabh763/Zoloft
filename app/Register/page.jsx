import React from 'react'

function page() {
  return (
    <main>
        <div className="Register">
        <div className="title">Register / Login</div>
        {/* <div className="subtitle">Have a project for Me?</div> */}
        <div className="input-container mt-1">
            <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            />
            <div className="cut"></div>
            <label for="firstname" className="placeholder">First name</label>
        </div>
        <div className="input-container mt-2">
            <input id="email" className="input" type="text" placeholder=" " />
            <div className="cut cut-short"></div>
            <label for="email" className="placeholder">Email</label>
        </div>
        <div className="input-container mt-2">
            <input id="password" className="input" type="text" placeholder=" " />
            <div className="cut "></div>
            <label for="password" className="placeholder">password</label>
        </div>
        <button type="text" className="submit mt-2 btn1 bg-gradient-to-r from-violet-600 to-indigo-600">Submit</button>
        </div>
        
    </main>
  )
}

export default page