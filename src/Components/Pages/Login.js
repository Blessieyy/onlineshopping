import React from 'react'
import '../Styles/Login.css'


function Login() {
    return (
        <div className='loginContainer'>
          <div className='titleContainer'>
            <div>Shoppie<span>Space</span></div>
          </div>
          <br />
          <div className={'inputContainer'}>
            <input
            //   value={email}
              placeholder="Enter your email here"
              className={'inputBox'}
            />
           
          </div>
          <br />
          <div className={'inputContainer'}>
            <input
            //   value={password}
              placeholder="Enter your password here"

              className={'inputBox'}
            />
          </div>
          <br />
          <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" value={'Log in'} />
          </div>
        </div>
      )
    }

export default Login