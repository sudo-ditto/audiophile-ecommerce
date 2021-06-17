import React from 'react'

const InputContainer = ({ name, children }) => {
    return (
        <div className="form-input__container">
            <h4>{name}</h4>
            {children}
        </div>
    )
}

export default InputContainer
