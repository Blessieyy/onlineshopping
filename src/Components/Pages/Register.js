import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Register() {
  const [email, setEmail]= useState('')
  const [password, setPassword]=('')
  const[fName, setFName] = useState('')
  const dispatch = useDispatch();


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        email,
        password,
        fullName,
      });

      // Dispatch Redux action with token
      dispatch(registerUser(response.data.token));
      alert(response.data.message);
    } catch (error) {
      console.error('Registration error:', error.response?.data?.error || error.message);
      alert(error.response?.data?.error || 'Registration failed');
    }
  };



  return (
    <div>  <div className='loginContainer'>
    <div className='titleContainer'>
      <div>Shoppie<span>Space</span></div>
      <p>Welcome</p>
    </div>

    <div className={'inputContainer'}>
      <input
      //   value={email}
        placeholder="Enter your First Name here"
        className={'inputBox'}
      />
     
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
      //   value={email}
        placeholder="Enter your Last Name here"
        className={'inputBox'}
      />
     
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
      <input className={'inputButton'} type="button" value={'Sign up'} />
    </div>
  </div>
</div>
  )
}

export default Register