// src/utils/Register.js
import {useState} from 'react'
import auth from '../utils/firebase';
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {useNavigate, Link, } from 'react-router-dom';
// import {useAuthValue} from './AuthContext'


function Register(){

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate ()

// const navigate = useNavigate()
// const {setTimeActive} = useAuthValue()

const validatePassword = () => {
  let isValid = true;
  if (password !== "" && confirmPassword !== "") {
    if (password !== confirmPassword) {
      isValid = false;
      setError("Passwords does not match");
    }
  }
  return isValid;
};

const register = e => {
    e.preventDefault();
    setError('')
    console.log(email);
    console.log(password);
    console.log('the confirmation % password is ', confirmPassword);

    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }
  
  // ...


  return (
<div className='center'>
<div className='auth'>
    <h1>Register</h1>
    {error && <div className='auth__error'>{error}</div>}
    <form onSubmit={register} name='registration_form'>
    
    
        { <input 
        type='text'
        value={name} 
        required
        placeholder='Enter your name'
        onChange={e => setName(e.target.value)}/> }

         <input 
        type='email' 
        value={email}
        placeholder="Enter your email"
        required
        onChange={(e)=> setEmail(e.target.value)}/> 

        <input 
        type='password'
        value={password} 
        required
        placeholder='Enter your password'
        onChange={(e) => setPassword(e.target.value)}/>

        <input 
        type='password'
        value={confirmPassword} 
        required
        placeholder='Confirm password'
        onChange={(e) => setConfirmPassword(e.target.value)}/>



        <button type='submit'>Register</button>
      </form>
      <span>
        Already have an account?  
        <Link to='/login'>login</Link>
      </span>
    </div>
  </div>
  );
}

export default Register;