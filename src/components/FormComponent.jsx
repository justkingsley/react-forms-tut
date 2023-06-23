import React from 'react'

const FormComponent = ({id, placeholder, type, htmlFor, label, onChange, value, error, onBlur, touchName}) => {
  return (
    <div className = "pb-4">
              <label htmlFor = {htmlFor} className={`text-sm text-gray-500 block ${error && touchName ? 'text-red-400 text-xs' : 'text-gray-500'}`}>

                {touchName && error ? error : label} 

              </label>
              <input
              placeholder = {placeholder} id = {id} type = {type} onChange = {onChange} value = {value} onBlur = {onBlur}
              className = "border-2 text-sm placeholder-gray-300 focus:ring-0 focus:border-green-600 outline-none border-gray-500 p-2 rounded-md w-full"
              />
    </div>
  )
}

export default FormComponent;
