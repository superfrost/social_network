import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/authReduser'
import Preloader from '../Common/Preloader/Preloader'
import { FormControl } from '../Common/FormsControl/FormsControl'
import { required, maxLengthCreator } from '../../utils/validation'
import { Redirect } from "react-router-dom"
import styless from './../Common/FormsControl/FormControl.module.css'

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styless.loginComponent2}>
      <h1>Login</h1>
      <div>
        <Field component={FormControl} name="login" validate={[required, maxLength20]} type="text" typeField="input" placeholder="Login" />
      </div>
      <div>
        <Field component={FormControl} name="password" validate={[required, maxLength20]} type="password" typeField="input" placeholder="Password" />
      </div>
      <div>
        <Field component="input" name="rememberMe" type="checkbox" />
        <label htmlFor="rememberMe">rememberMe</label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      {props.error 
      ? <div className={styless.formSumError}>
          {props.error}
        </div>
      : null}
    </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

class Login extends React.Component {
  onSubmit = (formData) => {this.props.loginUser(formData)}
  
  render() {
    if (this.props.isAuth) {
      return <Redirect to={"/profile"} />
    }
    return <div className={styless.loginComponent}>
      <div>
        {this.props.isFetching 
        ? <Preloader/>
        : <LoginReduxForm onSubmit={this.onSubmit}/>}
      </div>
      </div>
    }
  }

let mapStateToProps = (state) => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  userPhoto: state.auth.userPhoto,
  rememberMe: state.auth.rememberMe,
})

export default connect(mapStateToProps, {
  loginUser
})(Login)