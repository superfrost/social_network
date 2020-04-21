import React from 'react'
import styless from './Users.module.css'
import * as axios from 'axios'
import no_avatar from '../../asserts/img/no_ava.png'

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get('http://localhost:5000/users')
      .then(response => {
        this.props.setUsers(response.data.users)
      })
  };

  render() {
    return (
    <div>
      {this.props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img 
                className={styless.user_avatar}
                src={u.avatarSrc != null ? u.avatarSrc : no_avatar } 
                alt={u.name} />
            </div>
            <div>
              { u.followed
                ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
                : <button onClick={() => this.props.follow(u.id)}>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
    )
  }
}

export default Users