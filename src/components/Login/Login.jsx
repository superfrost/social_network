import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" name="login" type="text" placeholder="Login" required/>
      </div>
      <div>
        <Field component="input" name="password" type="password" placeholder="Password" required/>
      </div>
      <div>
        <Field component="input" name="rememberMe" type="checkbox" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'})(LoginForm)


const Login = (props) => {
  //debugger
  const onSubmit = (formData) => {
    console.log(formData); 
  }
  return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login