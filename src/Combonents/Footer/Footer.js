import React from 'react'
import footre from"../../286467435-0ba1061e-ddaf-4b3f-abd3-684a31d19fa5.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import "./footer.css"
import facebook from "../../png-transparent-computer-icons-facebook-inc-logo-facebook-blue-text-rectangle-thumbnail.png"
import linkedin from "../../linkedin-logo-hd-png-3.png"
import twetter from "../../Logo_Twitter.png"
import instgeam from "../../8f8fb43ce828a22c91c0b59f55fb91b3.png"
export default function Footer() {
  return <>
   <div className='container'>
    <div className='row'>
        <div className='col-md-3 col-lg-3'>
          <div className='footer'>
          <img src={footre} className='footerlogo' alt=''/>
          
          <p>lorem ipsum is dolor sit amet
          </p>
          </div>
          
            <div className='footer-contact'>
              <div className='footer-icon'>
              <FontAwesomeIcon icon={faPhone}/>
              
              </div>
              <div className='footer-text'>
              <h6>Contact Us</h6>
                <h5>+01 123 456 7890</h5>
              </div>
            </div>
        </div>
        <div  className='col-md-3 col-lg-3></div>'>
          <h2>Quick Lenks</h2>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Booking</a></li>
            <li><a href='#'>Faqs</a></li>
            <li><a href='#'>Our team</a></li>
            <li><a href='#'>Services </a></li>
            
          </ul>
        </div>
        <div  className='col-md-3 col-lg-3'>
          <h2>Our Services</h2>
          <ul>
            <li><a href='#'>Dental Care</a></li>
            <li><a href='#'>Cardiac Clinic</a></li>
            <li><a href='#'>Massege Therapy</a></li>
            <li><a href='#'>Cardiology</a></li>
            <li><a href='#'>Precise Diagnosis</a></li>
            <li><a href='#'>Abmbulance Services</a></li>
            <li><a href='#'>Services </a></li>
            
          </ul>
        </div>
        <div  className='col-md-3 col-lg-3'>
          <h2>Subcribe</h2>
          <form>
            <input type='email' placeholder='Enter Email'></input>
            <button type='submit'>Subscribe now</button>
          </form>
          <ul className='social'>
            <li><a href='#'><img src={facebook}/></a></li>
            <li><a href='#'><img src={linkedin}/></a></li>
            <li><a href='#'><img src={twetter}/></a></li>
            <li><a href='#'><img src={instgeam}/></a></li>

          </ul>
        </div>
       
    </div>
   </div>
   <hr></hr>
        <div className='col-lg-12 col-md-12 footer-butom'>
          <span>Copyright @ 2022 Design & Developod by ThemeTeades </span>
        </div>
  </>
   
 
}
