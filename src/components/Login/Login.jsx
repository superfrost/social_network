import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/loginReducer'
import Preloader from '../Common/Preloader/Preloader'

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
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

class Login extends React.Component {
  onSubmit = (formData) => {this.props.loginUser(formData)}
  
  render() {
    return <div>
        <h1>Login</h1>
        {this.props.isFetching 
        ? <Preloader/>
        : <LoginReduxForm onSubmit={this.onSubmit}/>}
      </div>
    }
  }

// const Login = (props) => {
//   const onSubmit = (formData) => {
//     props.loginUser(formData);
//   }
//   return <div>
//       <h1>Login</h1>
//       {props.isFetching 
//       ? <Preloader/>
//       : <LoginReduxForm onSubmit={onSubmit}/>}
//     </div>
// }

let mapStateToProps = (state) => ({
  login: state.login.login,
  password: state.login.password,
  rememberMe: state.login.rememberMe,
  user_id: state.login.user_id,
  isFetching: state.login.isFetching,
})

export default connect(mapStateToProps, {
  loginUser
})(Login)