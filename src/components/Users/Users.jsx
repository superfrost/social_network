import React from "react";
import styless from "./Users.module.css";
import no_avatar from "../../asserts/img/no_ava.png";

let Users = (props) => {
  debugger
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styless.selectedPage}
              onClick={(e) => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={styless.user_avatar}
                src={u.avatarSrc != null ? u.avatarSrc : no_avatar}
                alt={u.name}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unFollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
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

export default Users;
