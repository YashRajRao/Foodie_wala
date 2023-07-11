import React from 'react'
import {Country,State} from "country-state-city"
import { Link } from 'react-router-dom'

const Shiping = () => {
  return (
    <>
        <section className='shipping'>
            <main>
                <h1>Shipping Details</h1>
                <form>
                    <div>
                        <label>H.NO</label>
                        <input type='text' placeholder='Enter House No.'/>
                    </div>

                    <div>
                        <label>City</label>
                        <input type='text' placeholder='Enter City'/>
                    </div>

                    <div>
                        <label>Pin Code</label>
                        <input type='text' placeholder='Enter Pin Code'/>
                    </div>
                     
                    <div>
                        <label>Country</label>
                        <select >
                         <option value="">Country</option>
                      {
                          Country && Country.getAllCountries().map(i=>(

                            <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                          ))

                      }

                        </select>
                    </div>


                    <div>
                        <label>State</label>
                        <select >
                         <option value="">State</option>
                    {
                        State && State.getStatesOfCountry("IN").map(i =>(
                            <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                        ))
                    }

                        </select>
                    </div>



                    <div>
                        <label>Phone No</label>
                        <input type='text' placeholder='Enter Phone No'/>
                    </div>
                    <Link to="/ConfirmOrder">
                        <div>
                        <button type='submit' to="/ConfirmOrder" className='btn' >Confirm Order</button>
                        </div>
                    </Link>
        
                </form>
            </main>
        </section>
    </>
  )
}

export default Shiping
