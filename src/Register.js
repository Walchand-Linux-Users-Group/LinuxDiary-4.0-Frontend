import React from 'react'
import './Register.css'
const Register = () => {
  return (
      <div className="flex-container" id='register'>
          <form action="POST">
              <label htmlFor="name" className="input-labels">
                  {" "}
                  Name{" "}
              </label>
              <input
                  required=""
                  placeholder="Your Name"
                  name="name"
                  id="name"
                  type="text"
              />
              <label htmlFor="email" className="input-labels">
                  {" "}
                  Email ID{" "}
              </label>
              <input
                  required=""
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  type="email"
              />
              <label htmlFor="phone" className="input-labels">
                  {" "}
                  Phone Number{" "}
              </label>
              <input
                  required=""
                  placeholder="Your Phone Number"
                  name="phone"
                  id="phone"
                  type="tel"
              />
              <label htmlFor="collegeName" className="input-labels">
                  {" "}
                  College Name{" "}
              </label>
              <input
                  required=""
                  placeholder="Your College Name"
                  name="collegeName"
                  id="collegeName"
                  type="text"
              />
              <label htmlFor="branch" className="input-labels">
                  {" "}
                  Branch{" "}
              </label>
              <input
                  required=""
                  placeholder="Your Branch"
                  name="branch"
                  id="branch"
                  type="text"
              />
              <label htmlFor="yearOfStudy" className="input-labels">
                  {" "}
                  Year of Study{" "}
              </label>
              <br />
              <select id="yearOfStudy" name="yearOfStudy" required="">
                  <option value="" disabled="" selected="">
                      Select your option
                  </option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
              </select>
              <label htmlFor="isDualBooted" className="input-labels">
                  Do you have Dual Booted Laptop ?{" "}
              </label>
              <br />
              <select id="isDualBooted" name="isDualBooted" required="">
                  <option value="" disabled="" selected="">
                      Select your option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
              </select>
              <label htmlFor="transactionId" className="input-labels">
                  {" "}
                  Transaction ID{" "}
              </label>
              <input
                  required=""
                  placeholder="Payment Transaction ID"
                  name="transactionId"
                  id="transactionId"
                  type="text"
              />
              <label htmlFor="referalCode" className="input-labels">
                  {" "}
                  Referal Code{" "}
              </label>
              <input
                  required=""
                  placeholder="Referal Code"
                  name="referalCode"
                  id="referalCode"
                  type="text"
              />
              <input type="submit" defaultValue="REGISTER" className='btn-hover color-5'/>
          </form>
          <img src="./images/qr.png" className="qr" />
      </div>

  )
}

export default Register