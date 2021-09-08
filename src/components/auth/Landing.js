import React from 'react'
import { useHistory } from 'react-router'
import newUser from '../../images/new-user.png'
import logo from '../../images/ps4-logo.png'

function LoginOrRegister() {

  const history = useHistory()


  const handleClick = (event) => {
    if (event.target.innerHTML === 'login')
      history.push('/login')
    else if (event.target.alt === 'register')
      history.push('/register')
  }
  return (
    <div className='main'>
      <div className='second-container'>
        <img className='ps4-logo'src={logo}/>
        <div className='third-container'>
          <div className='container is-max-desktop'>
            <div className='welcome-message'>
              <h3>DUALSHOCK 4 wireless controller connected. Who is using this controller?</h3>
            </div>
            <div className='sign-in'>
              <div className='landing'>
                <div alt='register'
                  onClick={handleClick}>
                  <img id='new-user' src={newUser} alt='register'/>
                </div>
              </div>
              <div className='landing'>
                <div 
                  onClick={handleClick}
                  alt='login'>
                  <h1>USER PROFILE</h1>
                </div>
              </div>
              <div className='landing'>
                <div 
                  onClick={handleClick}
                  alt='login'>
                  <h1>USER PROFILE</h1>
                </div>
              </div>
              <div className='landing'>
                <div 
                  onClick={handleClick}
                  alt='login'>
                  <h1>USER PROFILE</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginOrRegister