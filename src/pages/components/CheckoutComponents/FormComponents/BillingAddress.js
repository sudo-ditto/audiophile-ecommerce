import React from 'react'
import FormInput from './FormInput'
import InputContainer from './InputContainer'

const BillingAddress = () => {
    return (
      <InputContainer name="Billing details">
          <FormInput labelName="Name" placeholder="Alexei Ward" inputType="text" id="name" name="name"/>
          <FormInput labelName="Email Address" placeholder="alexei@mail.com" inputType="email" id="email" name="email"/>
          <FormInput labelName="Phone Number" placeholder="+1 202-555-0136" id="number" name="number"/>
      </InputContainer>
    )
}

export default BillingAddress
