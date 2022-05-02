import React, { useState } from 'react'
import "./landing.scss";

const Landing = () => {
   const [form, setform] = useState('signIn')
   const [emailSignIn, setEmailSignIn] = useState(null)
   const [passwordSignin, setPasswordSignin] = useState(null)
   const [nameSignUp, setNameSignUp] = useState(null)
   const [emailSignUp, setEmailSignUp] = useState(null)
   const [passwordSignUp, setPasswordSignUp] = useState(null)

   const signInClicked = () => {
      console.log(emailSignIn, passwordSignin)
   }

   const signUpClicked = () => {
      console.log(nameSignUp, emailSignUp, passwordSignUp)
   }

   const shuffleForm = (id) => {
      if (id === 'signUp') {
         setform('signUp')
         setNameSignUp('')
         setEmailSignUp('')
         setPasswordSignUp('')
         console.log(emailSignIn, passwordSignin)
      } else {
         setform('signIn')
         setEmailSignIn('')
         setPasswordSignin('')
      }
      
   }
  return (
    <div className="container_landing">
      <div className="center">
      <div className={form === 'signUp' ? 'container_landing_inner right-panel-active': 'container_landing_inner'} id="container">
      <div className="form-container sign-up-container">
      <div className="form">
         <h1>Create Account</h1>
         <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
         </div>
         <span>or use your email for registration</span>
         <input type="text" placeholder="Name" value={nameSignUp} onChange={e => setNameSignUp(e.target.value)}/>
         <input type="email" placeholder="Email" value={emailSignUp} onChange={e => setEmailSignUp(e.target.value)}/>
         <input type="password" placeholder="Password" value={passwordSignUp} onChange={e => setPasswordSignUp(e.target.value)}/>
         <button onClick={() => signUpClicked()}>Sign Up</button>
      </div>
   </div>
   <div className="form-container sign-in-container">
      <div className="form">
         <h1>Sign in</h1>
         <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
         </div>
         <span>or use your account</span>
         <input type="email" placeholder="Email" value={emailSignIn} onChange={e => setEmailSignIn(e.target.value)}/>
         <input type="password" placeholder="Password" value={passwordSignin} onChange={e => setPasswordSignin(e.target.value)}/>
         <a href="#">Forgot your password?</a>
         <button onClick={() => signInClicked()}>Sign In</button>
      </div>
   </div>
   <div className="overlay-container">
      <div className="overlay">
         <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={() => shuffleForm('signIn')}>Sign In</button>
         </div>
         <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={() => shuffleForm('signUp')} id="signUp">Sign Up</button>
         </div>
      </div>
   </div>
        </div>
        </div>
    </div>
  )
}

export default Landing