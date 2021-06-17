import React from 'react'

const FormInput = ({ labelName, placeholder, inputType, id, name, checked }) => {
    return (
        <div className="form-input">
            <label htmlFor={id}>{labelName}</label>
            <input type={inputType} id={id} placeholder={placeholder} name={name} defaultChecked={checked ? checked : ""} />
        </div>
    )
}

export default FormInput
