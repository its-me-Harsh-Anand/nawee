import React from 'react'
import '../css/Form.css'
function Form() {
  return (
    <form>
      <div className="reciever">
        <h3>Receiver's Information</h3>
        <select name="destination" className='select'>
          <option value="none">Destination</option>
          <option value="patna">Patna</option>
          <option value="bihar">Bihar</option>
          <option value="india">India</option>
        </select>

        <h5>Drop-Off Option</h5>
        <div className='check'>
            <div className="opt">
                <input type="radio" name="drop-option-1" id="drop"/>
                <label htmlFor="drop-option-1">Drop at Home</label>
            </div>
            <div className="opt">
                <input type="radio" name="drop-option-2" id="drop" />
                <label htmlFor="drop-option-2">Drop at Booth</label>
            </div>
        </div>


        <input type="text" className="input" name='recname' placeholder="  Receiver's name"/>
        <input type="text" className="input" name='emailphone' placeholder="  Receiver's Email/Mobile Number"/>


        <h5>Receiver's Address</h5>

        <div className="box">Search Address from Location</div>

        <input type="text" className="input" name='address' placeholder="  Address Line 1"/>
        <input type="text" className="input" name='address' placeholder="  Landmark"/>
        
        <div className="city-state">
            <input type="text" className="input city" name='address' placeholder="  City"/>       
            <input type="text" className="input city" name='address' placeholder="  State"/>       
            <input type="text" className="input city" name='address' placeholder="  Pincode"/>       
        </div>

        <h5>Select Preferred Delivery Time:</h5>
        <div className='check'>
            <div className="opt">
                <input type="radio" name="t1" id="drop"/>
                <label htmlFor="t1">9AM-12AM</label>
            </div>
            <div className="opt">
                <input type="radio" name="t2" id="drop" />
                <label htmlFor="t2">12PM-3PM</label>
            </div>
            <div className="opt">
                <input type="radio" name="t3" id="drop" />
                <label htmlFor="t3">3PM-6PM</label>
            </div>
            <div className="opt">
                <input type="radio" name="t4" id="drop" />
                <label htmlFor="t4">Anytime</label>
            </div>
        </div>
      </div>

      
      <div className="parcel">
        <h3>Parcel Information</h3>
      </div>
    </form>
  );
}

export default Form