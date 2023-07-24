import React from 'react'
import './Register.css'
import axios from 'axios'
import { useState } from 'react'
import swal from 'sweetalert2'


const API = axios.create({
    baseURL: 'https://linuxdiary-4-0-backend.onrender.com',
    // baseURL: 'https://localhost:4000',
})
let qr_img_src = "./images/QR_0.png"
const Register = () => {

    const [isLoading, setisLoading] = useState(false)
    // const [isLoading, setisLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        collegeName: '',
        branch: '',
        yearOfStudy: '',
        isDualBooted: '',
        transactionId: '',
        referalCode: ''
    })

    const handleChange = (event) => {
        event.preventDefault()

        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
        console.log(formData)
    }
    const handleChangeName = (event) => {
        event.preventDefault()

        const { name, value } = event.target
        if(value.length>0){
            qr_img_src = "./images/QR_2.png"
        }
        else{
            qr_img_src = "./images/QR_0.png"
        }
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
        console.log(formData)
    }
    const handleReset = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setisLoading(true)
        try {
            setisLoading(true)
            const res = await API.post('/createUser', formData)
            setisLoading(false)
            handleReset(e)
            console.log('res :')
            console.log(res)
            console.log(res.data.postdata.phone.toString().length)
            if (res.status === 201) {

                // alert('You have successfully Registered. Check email for confirmation')
                swal
                    .fire({
                        title: 'Registered Successfully!! Check email for confirmation.',
                        imageHeight: 200,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Continue',
                        imageUrl:
                            'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066882/TechnoTweet/hurray_uptaef.png',
                        customClass: {
                            popup: 'animated fadeInDown faster',
                            confirmButton: 'animated bounceIn faster',
                            cancelButton: 'animated bounceIn faster',
                        },
                    })

                return true
            }
            console.log(res)
            return true
        }

        catch (err) {
            console.log('err :')
            console.log(err)
            setisLoading(false)
            if (
                err.response.data.success === 'false' &&
                err.response.data.message === 'Email Already Registered'
            ) {
                swal.fire({
                    title: 'Email already registered!!! Try using different email.',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 200,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    animation: 'true',
                    customClass: {
                        popup: 'animated fadeInDown faster',
                        confirmButton: 'animated bounceIn faster',
                        cancelButton: 'animated bounceIn faster',
                    },
                })
                return false
            } else if (
                err.response.data.success === 'false' &&
                err.response.data.message === 'Transaction id already used'
            ) {
                swal.fire({
                    title: 'Transaction ID already used. Try different one!!',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 200,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    animation: 'true',
                    customClass: {
                        popup: 'animated fadeInDown faster',
                        confirmButton: 'animated bounceIn faster',
                        cancelButton: 'animated bounceIn faster',
                    },
                })
                return false
            } else if (
                err.response.data.success === 'false' &&
                err.response.data.message === 'Invalid mobile number'
            ) {
                // console.log('catch');
                swal.fire({
                    title: 'Invalid mobile number',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 300,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    animation: 'true',
                    customClass: {
                        popup: 'animated fadeInDown faster',
                        confirmButton: 'animated bounceIn faster',
                        cancelButton: 'animated bounceIn faster',
                    },
                })
                return false
            }
            else {
                swal.fire({
                    title: 'Something went wrong!! Try again after some time.',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 300,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    animation: 'true',
                    customClass: {
                        popup: 'animated fadeInDown faster',
                        confirmButton: 'animated bounceIn faster',
                        cancelButton: 'animated bounceIn faster',
                    },
                })
                return false
            }
        }
        //   const data = API.getData(formData);
        //   setisLoading(false);
        //   sethurray(true)
        // }catch (error) {
        //   console.log(error);
    }

    return (
        <div className="flex-container" id='register'>
            <form className='form' onSubmit={handleSubmit}>
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
                    onChange={handleChangeName}
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

                    onChange={handleChange}
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

                    onChange={handleChange}
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
                    onChange={handleChange}
                />
                <label htmlFor="branch" className="input-labels">
                    {" "}
                    Branch{" "}
                </label>
                <br />

                <div className='selectdropdown'>
                    <select id="branch" name="branch" required=""
                        onChange={handleChange} class="mySelectArrow">
                        <option value="" disabled selected>
                            Select your option
                        </option>
                        <option value="CS">Computer Science</option>
                        <option value="IT">Information Technology</option>
                        <option value="OTHERS">Others</option>
                    </select>
                </div>
                <label htmlFor="yearOfStudy" className="input-labels">
                    {" "}
                    Year of Study{" "}
                </label>
                <br />

                <div className='selectdropdown'>
                    <select id="yearOfStudy" name="yearOfStudy" required=""
                        onChange={handleChange} class="mySelectArrow">
                        <option value="" disabled selected>
                            Select your option
                        </option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Fourth Year">Fourth Year</option>
                    </select>
                </div>
                <label htmlFor="isDualBooted" className="input-labels">
                    Do you have Dual Booted Laptop ?{" "}
                </label>
                <br />
                <div className='selectdropdown'>
                    <select id="isDualBooted" name="isDualBooted" required="" onChange={handleChange} class="mySelectArrow">
                        <option value="" disabled selected>
                            Select your option
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
                <input type="submit" defaultValue="REGISTER" className='btn-hover color-5' />
            </form>
            <div className='qr-div'>
                <a href="upi://pay?pa=dattnareshgangji21@okaxis&pn=Datta%20Gangji&am=199.00&cu=INR&aid=uGICAgID3ib3mVA">
                    <img src={qr_img_src} className="qr" /></a>
                {/* <div className='qr-section'>
                    <div className='qr-text'>
                        <p className='qr-text2'>Scan to pay</p>
                        <p>
                            UPI ID: dattnareshgangji21@okaxis<br /><br />
                            Amount: ₹‎199.00</p>
                    </div>
                    <div>
                        <a href="upi://pay?pa=dattnareshgangji21@okaxis&pn=Datta%20Gangji&am=199.00&cu=INR&aid=uGICAgID3ib3mVA">
                            <img src="./images/qr.png" className="qr" /></a>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default Register