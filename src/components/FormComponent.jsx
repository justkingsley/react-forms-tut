import React from 'react'

const FormComponent = ({id, placeholder, type}) => {
  return (
    <div className = "pb-4">
              <input
              placeholder = {placeholder} id = {id} type = {type}
              className = "border-1 text-sm placeholder-gray-400 focus:ring-0 focus:border-green-600 outline-none border-gray-500 p-2 rounded-md w-1/2"
              />
    </div>
  )
}

export default FormComponent;
