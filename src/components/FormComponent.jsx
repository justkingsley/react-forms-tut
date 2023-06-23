import React from 'react'

const FormComponent = ({id, placeholder, type, htmlFor, label, onChange, value}) => {
  return (
    <div className = "pb-4">
              <label htmlFor = {htmlFor} className="text-sm text-gray-500 block">
                {label}
              </label>
              <input
              placeholder = {placeholder} id = {id} type = {type} onChange = {onChange} value = {value}
              className = "border-2 text-sm placeholder-gray-300 focus:ring-0 focus:border-green-600 outline-none border-gray-500 p-2 rounded-md w-full"
              />
    </div>
  )
}

export default FormComponent;
