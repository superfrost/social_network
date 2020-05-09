import React from "react";
import styless from './NoAvatar.module.css'
import no_avatar from '../../../asserts/img/no_ava.png'

const Noavatar = () => {
  return <img className={styless.ava} 
              alt="avatar" 
              src={no_avatar} />;
} 

export default Noavatar