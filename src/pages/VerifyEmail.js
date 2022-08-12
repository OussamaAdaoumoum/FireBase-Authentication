import './verifyEmail.css'
import {useAuthValue} from '../utils/authentication-Context';
import {useState} from 'react'
import {sendEmailVerification} from 'firebase/auth'
import auth from '../utils/firebase'


function VerifyEmail() {
  const {currentUser} = useAuthValue()
  const [buttonDisabled, setButtonDisabled] = useState(false)

  //diasbling the button 60s
  const [time, setTime] = useState(60)
  const [timeActive, setTimeActive] = useState(false)

  //handles resending the verification
  const resendEmailVerification = () => {
    setButtonDisabled(true)
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setButtonDisabled(false)
    }).catch((err) => {
      alert(err.message)
      setButtonDisabled(false)
    })
  }


  return (
    <div className='center'>
      <div className='verifyEmail'>
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong><br/>
          <span>{currentUser?.email}</span>

        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button  onClick={resendEmailVerification}  disabled={buttonDisabled}>
          Resend Email
        </button>
      </div>
    </div>
  )
}

export default VerifyEmail
