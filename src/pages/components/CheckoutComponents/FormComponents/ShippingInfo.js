import React from 'react'
import FormInput from './FormInput'
import InputContainer from './InputContainer'

const ShippingInfo = () => {
    return (
        <InputContainer name="Shipping info">
            <FormInput labelName="Your Address" placeholder="1137 Williams Avenue" inputType="text" id="address" name="address" />
            <FormInput labelName="ZIP Code" placeholder="10001" inputType="text" id="zip" name="zip" />
            <FormInput labelName="City" placeholder="New York"  inputType="text" id="city" name="city" />
            <FormInput labelName="Country" placeholder="United States"  inputType="text" id="country" name="country" />
        </InputContainer>
    )
}

export default ShippingInfo
