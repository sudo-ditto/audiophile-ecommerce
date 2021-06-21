import React from 'react'
import FormInput from './FormInput'
import InputContainer from './InputContainer'

const PaymentDetails = () => {
    return (
        <InputContainer name="Payment Details">
            <div className="payment-method__container">
                <p className="payment-label">Payment Method</p>
                <FormInput labelName="e-Money" placeholder="" inputType="radio" id="e-money" name="payment-method" checked />
                <FormInput labelName="Cash on Delivery" placeholder="" inputType="radio" id="cash-on-delivery" name="payment-method" />
            </div>
            <FormInput labelName="e-Money Number" placeholder="238521993" inputType="number" id="e-money-number" name="e-money-number" />
            <FormInput labelName="e-Money PIN" placeholder="6891" inputType="number" id="e-money-pin" name="e-money-pin" />
        </InputContainer>
    )
}

export default PaymentDetails
