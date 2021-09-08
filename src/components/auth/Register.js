import React from 'react'

function Register() {

  return (
    <div className='register-container is-max-desktop'>
      <div className='join-message'>
        <h1>Join Playstation Network</h1>
      </div>
      <div className='form'>
        <form>
          <div className='field'>
            <label className='label'>Online ID</label>
            <div className='control'>
              <input className='register-input'/>
            </div>
          </div>
          <div className='field'>
            <label className='label'>Email Address</label>
            <div className='control'>
              <input className='register-input'/>
            </div>
          </div>
          <div className='field '>
            <label className='label'>Password</label>
            <div className='control'>
              <input className='register-input'/>
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password Confirmation</label>
            <div className='control'>
              <input className='register-input'/>
            </div>
          </div>
          <button className='button is-info'>Register</button>
        </form>


      </div>
    </div>
  )
}

export default Register