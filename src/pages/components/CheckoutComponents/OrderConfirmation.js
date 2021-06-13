import React from 'react'
import ModalOverlay from '../UI/ModalOverlay'

const OrderConfirmation = () => {
    return (
       <ModalOverlay>
           <div className="order-confirmation">
               <h2>Thank you for your order</h2>
               <p>You will receive an email confirmation shortly.</p>
           </div>
       </ModalOverlay>
    )
}

export default OrderConfirmation
