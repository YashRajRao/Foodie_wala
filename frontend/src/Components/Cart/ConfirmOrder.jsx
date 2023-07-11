import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmOrder = () => {
  return (
   <>
    <section className='confirmOrder'>
        <main>
        <h1>Confirm Order</h1>


        <form>
           <div>
            <label > Cash On Delivery</label>
            <input type='radio' name='payment' />
           </div>


           <div>
            <label >Online</label>
            <input type='radio' name='payment' />
           </div>

           <Link to="/PaymentSucess">
                        <div>
                        <button type='submit' to="/ConfirmOrder" className='btn1'>Place Order</button>
                        </div>
                    </Link>
        </form>
        </main>
    </section>
   </>
  )
}

export default ConfirmOrder
