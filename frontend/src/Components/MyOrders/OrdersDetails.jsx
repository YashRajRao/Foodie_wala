import React from 'react'

const OrdersDetails = () => {
  return (
   <>
    <section className='orderDetails'>
    <main>

    <h1>Orders Details</h1>
        <div>
            <h1>Shiping</h1>
            <p>
            <b>Address</b> 

            {"sjda 12-32cs dsad"}
            </p>
        </div>


        <div>
            <h1>Contact</h1>
            <p>
            <b>Name</b> 

            {"yash"}
            </p>

            <p>
                <b>Phone</b>
                {2124356568}
            </p>
        </div>


        <div>
            <h1>Status</h1>
            <p>
            <b>Order Satus</b> 

            {"processing"}
            </p>

            <p>
                <b>Placed At</b>
                {"23_02-2002"}
            </p>

            <p>
                <b>Deliver At</b>
                {"23-02-2003"}
            </p>
        </div>


        <div>
            <h1>Status</h1>
            <p>
            <b>Order Satus</b> 

            {"processing"}
            </p>

            <p>
                <b>Placed At</b>
                {"23_02-2002"}
            </p>

            <p>
                <b>Deliver At</b>
                {"23-02-2003"}
            </p>
        </div> 
        
        <div>
            <h1>Payment</h1>
            <p>
            <b>Payment Satus</b> 

            {"Online"}
            </p>

            <p>
                <b>Payment Reference</b>
                {"dhgcgvk"}
            </p>

            <p>
                <b>Paid At</b>
                {"23-02-2003"}
            </p>
        </div>



        <div>
            <h1>Status</h1>
            <p>
            <b>Order Satus</b> 

            {"processing"}
            </p>

            <p>
                <b>Placed At</b>
                {"23_02-2002"}
            </p>

            <p>
                <b>Deliver At</b>
                {"23-02-2003"}
            </p>
        </div> 
        
        <div>
            <h1>Amount</h1>
            <p>
            <b>iteams Total</b> 

            {"122"}
            </p>

            <p>
                <b>Shiping Charges</b>
                {"200"}
            </p>

            <p>
                <b>Tax</b>
                {"244"}
            </p>

            
            <p>
                <b>Total Amount</b>
                {"244"}
            </p>
        </div>
        
        <article>
            <h1>Ordered Iteams</h1>
            <div>
                <h4>Chease Burger</h4>
                <div>
                    <span>{12}</span> x  <span>{232}</span> 
                </div>
            </div>

            <div>
                <h4> Veg Chease Burger</h4>
                <div>
                    <span>{10}</span> x <span>{500}</span> 
                </div>
            </div>

            <div>
                <h4> extra Chease Burger</h4>
                <div>
                    <span>{7}</span> x <span>{800}</span> 
                </div>
            </div>


            <div>
                <h4 style={{fontWeight:800}}>Sub Total</h4>
                <div  style={{fontWeight:800}}>{2132}</div>
                
                <div>
                 
                </div>
            </div>
        </article>


    </main>

    </section>
   </>
  )
}

export default OrdersDetails
