import React from "react";

import Banner from "../Banner/Banner";
import'./Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Banner title="Contact" smtitle="contact" />
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <form>
              <div className="form-control">
                <input placeholder="Your Name"/>
              </div>
              <div className="form-control">
                <input placeholder="Your Email"/>
              </div>
              <div className="form-control">
                <input placeholder="Phone Numbers"/>
              </div>
              <select>
                <option>Select Depatment</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <div className="form-control">
              <textarea placeholder="massage"></textarea>
              </div>
              <button>Sabmit</button>
            </form>

            </div>
            
            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                  <h3>Contact Us For Any Informations</h3>
                  <li><FontAwesomeIcon icon={faMap}/>Location</li>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
