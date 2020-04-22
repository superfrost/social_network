import React from 'react';
import styless from './Preloader.module.css'
import preloader from './../../../asserts/img/loading1.svg'

const Preloader = (props) => {
  return (
    <div>
      <img className={styless.rotate} src={preloader} /> 
    </div>
  )
}

export default Preloader;