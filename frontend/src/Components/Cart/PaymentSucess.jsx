import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSucess = () => {
  return (
    <>
        <section className='paymentsucess'>
            <main>
                <h1>Order Confirmed</h1>
                <p>Order Placed SuccessFully, You can Check Order Status below</p>
                <Link to="/myorders">Check Status</Link>
            </main>
        </section>
    </>
  )
}

export default PaymentSucess
