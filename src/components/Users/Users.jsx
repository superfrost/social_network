import React from 'react'
import styless from './Users.module.css'

const Users = (props) => {
  debugger; 
  if (props.users.length === 0) {
    props.setUsers(
      [
        {id: 1, name: 'Anton', followed: true, status: 'Boss', location: {city: 'Moscow', country: 'Russia'}, avatarSrc: 'https://www.famousbirthdays.com/faces/clooney-george-image.jpg'},
        {id: 2, name: 'Lera', followed: true, status: 'Boss', location: {city: 'Moscow', country: 'Russia'}, avatarSrc: 'https://www.famousbirthdays.com/headshots/zoe-saldana-5.jpg'},
        {id: 3, name: 'Andrew', followed: true, status: 'Boss', location: {city: 'New-York', country: 'USA'}, avatarSrc: 'https://www.famousbirthdays.com/faces/dicaprio-l-image.jpg'},
        {id: 4, name: 'Nick', followed: false, status: 'Boss', location: {city: 'LA', country: 'USA'}, avatarSrc: 'https://www.famousbirthdays.com/headshots/ben-stiller-4.jpg'},
        {id: 5, name: 'John', followed: false, status: 'Boss', location: {city: 'San-Fran', country: 'USA'}, avatarSrc: 'https://www.famousbirthdays.com/faces/banks-tyra-image.jpg'},
      ]
    )}
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img 
                className={styless.user_avatar}
                src={u.avatarSrc} 
                alt={u.name} />
            </div>
            <div>
              { u.followed
                ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>
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
  );
};

export default Users