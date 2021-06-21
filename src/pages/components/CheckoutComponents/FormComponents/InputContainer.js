import React from 'react'

const InputContainer = ({ name, children }) => {
    return (
        <fieldset className="form-input__container">
            <legend>{name}</legend>
            {children}
        </fieldset>
    )
}

export default InputContainer
