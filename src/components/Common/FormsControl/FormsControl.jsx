import React from 'react'
import styless from './FormControl.module.css'

export const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  let tag = <props.typeField {...input} {...props}/>
  return (
    <div className={styless.formControl + " " + (hasError ? styless.error : "")}>
      <div>
        {tag}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={styless.formControl + " " + (hasError ? styless.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  debugger
  const hasError = meta.touched && meta.error
  return (
    <div className={styless.formControl + " " + (hasError ? styless.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}