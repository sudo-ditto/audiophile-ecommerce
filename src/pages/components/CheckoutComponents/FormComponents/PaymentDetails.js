import React from 'react'
import FormInput from './FormInput'
import InputContainer from './InputContainer'

const PaymentDetails = () => {
    return (
        <InputContainer name="Payment Details">
            <div className="payment-method__container">
                <p>Payment Method</p>
                <FormInput labelName="e-Money" placeholder="" inputType="radio" id="e-money" name="e-money" checked />
                <FormInput labelName="Cash on Delivery" placeholder="" inputType="radio" id="cash-on-delivery" name="cash-on-delivery" />
            </div>
            <FormInput labelName="Cash on Delivery" placeholder="238521993" inputType="number" id="e-money-number" name="e-money-number" />
            <FormInput labelName="e-Money PIN" placeholder="6891" inputType="number" id="e-money-pin" name="e-money-pin" />
        </InputContainer>
    )
}

export default PaymentDetails
