import React from 'react'

const FormComponent = ({id, placeholder, type, htmlFor, labelName}) => {
  return (
    <div className = "pb-4">
              <label 
              htmlFor = {htmlFor} 
              className="block text-sm pb-2 font-latoBold text-gray-700">{labelName}</label>
              <input
              placeholder = {placeholder} id = {id} type = {type}
              className = "border-2 text-sm focus:border-green-600 outline-none border-gray-500 p-2 rounded-md w-1/2"
              />
    </div>
  )
}

export default FormComponent;
