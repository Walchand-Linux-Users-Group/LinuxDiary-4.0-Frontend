import React from 'react'
import './Register.css'
// import axios from 'axios'
// import { useState } from 'react'
// import swal from 'sweetalert2'

// import { ProgressBar } from 'react-loader-spinner'
// import QRCode from 'react-qr-code'

// const API = axios.create({
//     baseURL: 'https://linuxdiary-4-0-backend.onrender.com',
//     // baseURL: 'https://localhost:4000',
// })
// let qr_img_src = "./images/QR_0.png"
const Register = () => {
    // const [qrLink, setqrLink] = useState("")
    // const [qrVisibility, setqrVisibility] = useState({ display: "none" })
    // const [placeholderVisibility, setplaceholderVisibility] = useState({ display: "block" })

    // const [isLoading, setisLoading] = useState(false)
    // // const [isLoading, setisLoading] = useState(false)
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     collegeName: '',
    //     branch: 'other',
    //     yearOfStudy: '',
    //     isDualBooted: '',
    //     transactionId: '',
    //     referalCode: ''
    // })

    // const handleChange = (event) => {
    //     event.preventDefault()

    //     const { name, value } = event.target
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: value,
    //     }))
    //     console.log(formData)
    // }
    // const handleChangeName = (event) => {
    //     event.preventDefault()

    //     let { name, value } = event.target
    //     value = value.trim()
    //     if (value.length > 0) {
    //         qr_img_src = "./images/QR_2.png"
    //         setqrVisibility({ display: "block" })
    //         setplaceholderVisibility({ display: "none" })
    //         setqrLink("upi://pay?pa=dattnareshgangji21@okaxis&pn=Datta%20Gangji&am=199.00&cu=INR&aid=uGICAgID3ib3mVA&tn=LD4%2D" + value)
    //     }
    //     else {
    //         qr_img_src = "./images/QR_0.png"
    //         setqrLink("")
    //         setqrVisibility({ display: "none" })
    //         setplaceholderVisibility({ display: "block" })
    //     }
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: value,
    //     }))
    //     console.log(formData)
    // }
    // const handleReset = (event) => {
    //     event.preventDefault()
    //     event.target.reset()
    // }

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
        <>
            <div className="flex-container" id='register'>
                {/* <h2>If you have paid the amount and didn't recieve confirma email,<br /> please contact Datta Gangji +91 75177 56075</h2> */}
                <h1 className='pink'>Registrations are now closed.</h1>
            </div>
            <div className="flex-container vid" id='register'>
                {/* <h2>If you have paid the amount and didn't recieve confirma email,<br /> please contact Datta Gangji +91 75177 56075</h2> */}
                <iframe src="https://www.youtube.com/embed/x3gKaA-6wFg" title="LinuxDiary 4.0 | Official Trailer 🐧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </>

    )
    // return (
    //     <div className="flex-container" id='register'>
    //         <form className='form' onSubmit={handleSubmit}>
    //             <label htmlFor="name" className="input-labels">
    //                 {" "}
    //                 Name{" "}
    //             </label>
    //             <input
    //                 required=""
    //                 placeholder="Your Name"
    //                 name="name"
    //                 id="name"
    //                 type="text"
    //                 // onChange={handleChangeName}
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="email" className="input-labels">
    //                 {" "}
    //                 Email ID{" "}
    //             </label>
    //             <input
    //                 required=""
    //                 placeholder="Your Email"
    //                 name="email"
    //                 id="email"
    //                 type="email"

    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="phone" className="input-labels">
    //                 {" "}
    //                 Phone Number{" "}
    //             </label>
    //             <input
    //                 required=""
    //                 placeholder="Your Phone Number"
    //                 name="phone"
    //                 id="phone"
    //                 type="tel"

    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="collegeName" className="input-labels">
    //                 {" "}
    //                 College Name{" "}
    //             </label>
    //             <input
    //                 required=""
    //                 placeholder="Your College Name"
    //                 name="collegeName"
    //                 id="collegeName"
    //                 type="text"
    //                 onChange={handleChange}
    //             />
    //             {/* <label htmlFor="branch" className="input-labels" id='dont-display'>
    //                 {" "}
    //                 Branch{" "}
    //             </label>
    //             <br /> */}

    //             {/* <div className='selectdropdown' id='dont-display'>
    //                 <select id="branch" name="branch" required=""
    //                     onChange={handleChange} class="mySelectArrow">
    //                     <option value="" disabled selected id='dont-display'>
    //                         Select your option
    //                     </option>
    //                     <option value="CS">Computer Science Engineering</option>
    //                     <option value="IT">Information Technology Engineering</option>
    //                     <option value="ELECTRONICS">Electronics Engineering</option>
    //                     <option value="ELECTRICAL">Electrical Engineering</option>
    //                     <option value="MECHANICAL">Mechanical Engineering</option>
    //                     <option value="CIVIL">Civil Engineering</option>
    //                     <option value="OTHERS">Others</option>
    //                 </select>
    //             </div> */}
    //             <label htmlFor="yearOfStudy" className="input-labels">
    //                 {" "}
    //                 Year of Study{" "}
    //             </label>
    //             <br />

    //             <div className='selectdropdown'>
    //                 <select id="yearOfStudy" name="yearOfStudy" required=""
    //                     onChange={handleChange} class="mySelectArrow">
    //                     <option value="" disabled selected id='dont-display'>
    //                         Select your option
    //                     </option>
    //                     <option value="First Year">First Year</option>
    //                     <option value="Second Year">Second Year</option>
    //                     <option value="Third Year">Third Year</option>
    //                     <option value="Fourth Year">Fourth Year</option>
    //                     <option value="Other">Other</option>
    //                 </select>
    //             </div>
    //             <label htmlFor="isDualBooted" className="input-labels">
    //                 Do you have dual booted laptop ?{" "}
    //             </label>
    //             <br />
    //             <div className='selectdropdown'>
    //                 <select id="isDualBooted" name="isDualBooted" required="" onChange={handleChange} class="mySelectArrow">
    //                     <option value="" disabled selected id='dont-display'>
    //                         Select your option
    //                     </option>
    //                     <option value="Yes">Yes</option>
    //                     <option value="No">No</option>
    //                 </select>
    //             </div>
    //             <label htmlFor="transactionId" className="input-labels">
    //                 {" "}
    //                 Transaction ID{" "}
    //             </label>
    //             <input
    //                 required=""
    //                 placeholder="Payment Transaction ID"
    //                 name="transactionId"
    //                 id="transactionId"
    //                 type="text"
    //                 onChange={handleChange}
    //             />
    //             <label htmlFor="referalCode" className="input-labels">
    //                 {" "}
    //                 Referral Code{" "}
    //             </label>
    //             <input
    //                 required=""
    //                 placeholder="Referral Code"
    //                 name="referalCode"
    //                 id="referalCode"
    //                 type="text"
    //                 onChange={handleChange}
    //             />
    //             <div className='submitSection'>
    //                 {!isLoading && (<div className='submitButton'>
    //                     <input type="submit" defaultValue="REGISTER" className='btn-hover color-5' />
    //                 </div>
    //                 )}
    //                 {isLoading && (
    //                     <ProgressBar
    //                         height="160"
    //                         width="auto"
    //                         ariaLabel="progress-bar-loading"
    //                         wrapperStyle={{}}
    //                         wrapperClass="progress-bar-wrapper"
    //                         borderColor='#00d12d'
    //                         barColor='#ffffff'
    //                     />
    //                 )}

    //             </div>
    //         </form>
    //         <div className='qr-div'>
    //             {/* <img src={qr_img_src} className="qr" />
    //             <a href={qrLink}>
    //             <QRCode value={qrLink} className='qrWithName'></QRCode>
    //         </a> */}
    //             <div className='qr-section'>
    //                 <div className='qr-text-section'>
    //                     {/* <p className='qr-text-heading'>Scan <span>/ Tap </span>QR to pay</p> */}
    //                     <p className='qr-text-heading'>Scan QR to pay</p>
    //                     <p className='qr-text-info'>
    //                         UPI ID: dattnareshgangji21@okaxis<br /><br />
    //                         <span>Amount: ₹‎199.00</span></p>
    //                 </div>
    //                 {/* <div style={placeholderVisibility}>
    //                     <p className='qr-text-placeholder'>Enter Name <br /> to view QR</p>
    //                 </div> */}
    //                 {/* <div style={qrVisibility}> */}
    //                 <div>
    //                     {/* <a href={qrLink}> */}
    //                     {/* <a href="upi://pay?pa=dattnareshgangji21@okaxis&pn=Datta%20Gangji&am=1.00&cu=INR&aid=uGICAgID3ib3mVA"> */}
    //                     <img src="./images/qr.png" className="qr2" alt='qr' />
    //                     {/* <QRCode value={qrLink} className='qr'>
    //                         </QRCode>*/}
    //                     {/* </a>  */}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // )
}

export default Register